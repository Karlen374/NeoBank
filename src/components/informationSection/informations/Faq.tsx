import React, { useState } from 'react';
import '../informationSection.scss';
import { faqQuestions } from '@utils';
import FaqItem from './faqItem';

const Faq = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const changeActiveId = (status:number) => {
    if (status === activeId) {
      setActiveId(null);
    } else {
      setActiveId(status);
    }
  };

  return (
    <div className="wrapper information-section__faq">
      <h2>Issuing and receiving a card</h2>
      <div className="information-section__questions">
        {
          faqQuestions.slice(0, 5).map((item, id) => {
            return <FaqItem key={id} id={id} item={item} changeActiveId={changeActiveId} activeId={activeId} />;
          })
        }
      </div>
      <h2>Using a credit card</h2>
      <div className="information-section__questions">
        {
          faqQuestions.map((item, id) => {
            if (id < 5) return null;
            else return <FaqItem key={id} id={id} item={item} changeActiveId={changeActiveId} activeId={activeId} />;
          })
        }
      </div>
    </div>
  );
};
export default Faq;
