import React from 'react';
import './cardCustomizeSection.scss';

const CustomizeSectionHeader = () => {
  return (
    <div className="customize-section__amount">
      <div className="customize-section__selectAmount">
        <div className="customize-section__selectHeader">
          <h2>Customize your card</h2>
          <p>Step 1 of 5</p>
        </div>
        <div className="customize-section__selectBlock">
          <h4>Select amount</h4>
          <p className="customize-section__selectBlock_price">150 000</p>
          <input type="range" max="600000" min="15000" />
          <div className="customize-section__inputBorders">
            <p>15 000</p>
            <p>600 000</p>
          </div>
        </div>
      </div>
      <div className="customize-section__inputAmount">
        <h3 className="customize-section__inputAmount_header">You have chosen the amount</h3>
        <input type="text" value="150 000 ₽" />
      </div>
    </div>
  );
};
export default CustomizeSectionHeader;
