import React, { useState } from 'react';
import { useMailServices } from '@utils';
import './supportSection.scss';

const SupportSection = () => {
  const [mail, setMail] = useState('');
  const { postEmail } = useMailServices();
  const handleChangeMail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMail(e.target.value);
  };

  const postEmailAdress = async () => {
    const data = await (postEmail(mail));
    console.log(data);
  };

  const handleSubmitMail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postEmailAdress();
    setMail('');
  };

  return (
    <section className="support-section wrapper">
      <div className="support-section__header">
        <h3>Support</h3>
        <h2>Subscribe Newsletter & get</h2>
        <p>Bank News</p>
      </div>
      <form onSubmit={handleSubmitMail}>
        <div className="support-section__input">
          <div className="support-section__input_email">
            <input value={mail} onChange={handleChangeMail} type="email" placeholder="Your email" />
          </div>
          <div className="support-section__input_submit">
            <input type="submit" value="subscribe" />
          </div>
        </div>
      </form>
    </section>
  );
};
export default SupportSection;
