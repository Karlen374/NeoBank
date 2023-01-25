import React from 'react';
import './signingForm.scss';

export const SigningText = () => {
  return (
    <div className="wrapper sign-message">
      <h1>
        Documents have been successfully
        <hr />
        {' '}
        signed and sent for approval
      </h1>
      <p>Within 10 minutes you will be sent a PIN code to your email for confirmation</p>
    </div>
  );
};
