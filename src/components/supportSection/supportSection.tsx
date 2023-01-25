import React, { useEffect, useState } from 'react';
import { useMailServices } from '@utils';
import EmailIcon from '../../public/icons/emailIcon';
import SendIcon from '../../public/icons/sendIcon';
import './supportSection.scss';

export const SupportSection = () => {
  const [mail, setMail] = useState('');
  const [showMailInput, setShowMailInput] = useState(true);
  const { postEmail } = useMailServices();

  const handleChangeMail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMail(e.target.value);
  };
  useEffect(() => {
    if (localStorage.getItem('email')) {
      setShowMailInput(false);
    }
  }, []);

  const postEmailAdress = async () => {
    const responseStatusCode = await (postEmail(mail));
    if (responseStatusCode === 200) {
      localStorage.setItem('email', 'true');
      setShowMailInput(false);
    }
  };

  const handleSubmitMail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postEmailAdress();
    setMail('');
  };

  const content = showMailInput ? (
    <form onSubmit={handleSubmitMail}>
      <div className="support-section__input">
        <div className="support-section__input_email">
          <EmailIcon />
          <input value={mail} onChange={handleChangeMail} type="email" placeholder="Your email" />
        </div>
        <div className="support-section__input_submit">
          <SendIcon />
          <input type="submit" value="subscribe" />
        </div>
      </div>
    </form>
  ) : <p>You are already subscribed to the bank&apos;s newsletter</p>;

  return (
    <section className="support-section wrapper">
      <div className="support-section__header">
        <h3>Support</h3>
        <h2>Subscribe Newsletter & get</h2>
        <p>Bank News</p>
      </div>
      {content}
    </section>
  );
};
