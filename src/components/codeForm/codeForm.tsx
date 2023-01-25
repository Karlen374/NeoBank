import { useAppDispatch, useAppSelector, postCode } from '@utils';
import React, { useEffect, useState } from 'react';
import Loader from '../shared/loader/loader';
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
    ? (
      <div className="confirm-code__inputBlock_active">
        <input type="number" onChange={(e) => setFirstValue(e.target.value)} value={firstValue} />
      </div>
    )
    : (
      <div className="confirm-code__inputBlock_passive">
        <input type="number" onChange={() => setFirstValue('')} value={firstValue} />
      </div>
    );
  const secondInput = !secondValue
    ? (
      <div className="confirm-code__inputBlock_active">
        <input type="number" onChange={(e) => setSecondValue(e.target.value)} value={secondValue} />
      </div>
    )
    : (
      <div className="confirm-code__inputBlock_passive">
        <input type="number" onChange={() => setSecondValue('')} value={secondValue} />
      </div>
    );
  const thirdInput = !thirdValue
    ? (
      <div className="confirm-code__inputBlock_active">
        <input type="number" onChange={(e) => setThirdValue(e.target.value)} value={thirdValue} />
      </div>
    )
    : (
      <div className="confirm-code__inputBlock_passive">
        <input type="number" onChange={() => setThirdValue('')} value={thirdValue} />
      </div>
    );
  const fourthInput = !fourthValue
    ? (
      <div className="confirm-code__inputBlock_active">
        <input type="number" onChange={(e) => setFourthValue(e.target.value)} value={fourthValue} />
      </div>
    )
    : (
      <div className="confirm-code__inputBlock_passive">
        <input type="number" onChange={() => setFourthValue('')} value={fourthValue} />
      </div>
    );
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
