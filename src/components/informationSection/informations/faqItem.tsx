import React from 'react';
import ArrowIcon from '../../../public/icons/arrowIcon';
import '../informationSection.scss';

interface IItem{
  question:string;
  answer:string;
}
interface IFaqItem{
  activeId: number;
  id:number;
  item: IItem;
  changeActiveId: (status: number) => void
}

const FaqItem = ({
  id, activeId, item, changeActiveId,
}: IFaqItem) => {
  const style = id === activeId ? 'information-section__question' : 'information-section__question_closed';
  return (
    <div key={item.question} className={style}>
      <div className="information-section__header">
        <h5>{item.question}</h5>
        <div onClick={() => changeActiveId(id)}>
          <ArrowIcon />
        </div>
      </div>
      <p className="information-section__question_answer">
        {item.answer}
      </p>
    </div>
  );
};
export default FaqItem;
