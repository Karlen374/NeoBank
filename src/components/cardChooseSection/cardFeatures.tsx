import React from 'react';
import './cardChooseSection.scss';
import { cardFeatures } from '@utils';
import SuccessIcon from '../../public/icons/successIcon';
import Illustration from '../../public/assets/Illustration.png';

const CardFeatures = () => {
  return (
    <div className="card-section__features">
      <img src={Illustration} alt="happy person img" />
      <div>
        <h3 className="card-section__features_header">
          We Provide Many Features You Can Use
        </h3>
        <p className="card-section__features_subHeader">
          You can explore the features that we provide with fun and have their own functions each feature
        </p>
        {
          cardFeatures.map((item) => {
            return (
              <div key={item} className="card-section__features_item">
                <span>
                  <SuccessIcon />
                </span>
                <p>
                  {item}
                </p>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};
export default CardFeatures;
