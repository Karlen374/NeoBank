import React, { useState } from 'react';
import './cardCustomizeSection.scss';

const CustomizeSectionHeader = () => {
  const [amount, setAmount] = useState(15000);
  return (
    <div className="customize-section__amount">
      <div className="customize-section__selectAmount">
        <div className="customize-section__selectHeader">
          <h2>Customize your card</h2>
          <p>Step 1 of 5</p>
        </div>
        <div className="customize-section__selectBlock">
          <h4>Select amount</h4>
          <p className="customize-section__selectBlock_price">{amount}</p>
          <input type="range" onChange={(e) => setAmount(Number(e.target.value))} value={amount} max="600000" min="15000" />
          <div className="customize-section__inputBorders">
            <p>15 000</p>
            <p>600 000</p>
          </div>
        </div>
      </div>
      <div className="customize-section__inputAmount">
        <h3 className="customize-section__inputAmount_header">You have chosen the amount</h3>
        <input type="number" min={15000} max={600000} onChange={(e) => setAmount(Number(e.target.value))} value={amount} />
      </div>
    </div>
  );
};
export default CustomizeSectionHeader;
