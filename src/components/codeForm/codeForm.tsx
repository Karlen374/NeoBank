import { useAppDispatch, useAppSelector, postCode } from '@utils';
import React, { useEffect, useState } from 'react';
import Loader from '../shared/loader/loader';
import CodeItem from './codeItem';
import './codeForm.scss';

interface ICodeFormProps{
  applicationId:string;
}
export const CodeForm = ({ applicationId }: ICodeFormProps) => {
  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');
  const [thirdValue, setThirdValue] = useState('');
  const [fourthValue, setFourthValue] = useState('');
  const dispatch = useAppDispatch();
  const { loader, codeErrorStatus } = useAppSelector((store) => store.cardSlice);

  useEffect(() => {
    if (firstValue && secondValue && thirdValue && fourthValue) {
      const code = String(firstValue) + String(secondValue) + String(thirdValue) + String(fourthValue);
      dispatch(postCode({ applicationId, code }));
    }
  }, [firstValue, secondValue, thirdValue, fourthValue]);

  if (loader) {
    return (
      <Loader />
    );
  }
  const fisrtInput = !firstValue
    ? <CodeItem value={firstValue} onChange={(e) => setFirstValue(e.target.value)} st="confirm-code__inputBlock_active" />
    : <CodeItem value={firstValue} onChange={() => setFirstValue('')} st="confirm-code__inputBlock_passive" />;

  const secondInput = !secondValue
    ? <CodeItem value={secondValue} onChange={(e) => setSecondValue(e.target.value)} st="confirm-code__inputBlock_active" />
    : <CodeItem value={secondValue} onChange={() => setSecondValue('')} st="confirm-code__inputBlock_passive" />;

  const thirdInput = !thirdValue
    ? <CodeItem value={thirdValue} onChange={(e) => setThirdValue(e.target.value)} st="confirm-code__inputBlock_active" />
    : <CodeItem value={thirdValue} onChange={() => setThirdValue('')} st="confirm-code__inputBlock_passive" />;

  const fourthInput = !fourthValue
    ? <CodeItem value={fourthValue} onChange={(e) => setFourthValue(e.target.value)} st="confirm-code__inputBlock_active" />
    : <CodeItem value={fourthValue} onChange={() => setFourthValue('')} st="confirm-code__inputBlock_passive" />;

  return (
    <div className="wrapper confirm-code">
      <h2>Please enter confirmation code</h2>
      <div className="confirm-code__inputs">
        {fisrtInput}
        {secondInput}
        {thirdInput}
        {fourthInput}
      </div>
      {codeErrorStatus && <p>Invalid confirmation code</p>}
    </div>
  );
};
