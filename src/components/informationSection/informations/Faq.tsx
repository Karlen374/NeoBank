import React from 'react';
import '../informationSection.scss';

const Faq = () => {
  return (
    <div className="wrapper information-section__faq">
      <h2>Issuing and receiving a card</h2>
      <div className="information-section__questions">
        <div className="information-section__question">
          <div className="information-section__header">
            <h5>How to get a card?</h5>
            <img src="./img/icons/expand_up.svg" alt="arrow" />
          </div>
          <p className="information-section__question_answer">
            We will deliver your card by courier free of charge. Delivery in Moscow and St. Petersburg - 1-2 working days.
            For other regions of the Russian Federation - 2-5 working days.
          </p>
        </div>
        <div className="information-section__question">
          <div className="information-section__header">
            <h5>What documents are needed and how old should one be to get a card?</h5>
            <img src="./img/icons/expand_up.svg" alt="arrow" />
          </div>
          <p className="information-section__question_answer">Need a passport. You must be between 20 and 70 years old.</p>
        </div>
        <div className="information-section__question">
          <div className="information-section__header">
            <h5>In what currency can I issue a card?</h5>
            <img src="./img/icons/expand_up.svg" alt="arrow" />
          </div>
          <p className="information-section__question_answer">In rubles, dollars or euro</p>
        </div>
        <div className="information-section__question">
          <div className="information-section__header">
            <h5>How much income do I need to get a credit card?</h5>
            <img src="./img/icons/expand_up.svg" alt="arrow" />
          </div>
          <p className="information-section__question_answer">
            To obtain a credit card, you will need an income of at least 25,000 rubles per month after taxes.
          </p>
        </div>
        <div className="information-section__question">
          <div className="information-section__header">
            <h5>How do I find out about the bank&apos;s decision on my application?</h5>
            <img src="./img/icons/expand_up.svg" alt="arrow" />
          </div>
          <p className="information-section__question_answer">
            After registration, you will receive an e-mail with a decision on your application.
          </p>
        </div>
      </div>
      <h2>Using a credit card</h2>
      <div className="information-section__questions">
        <div className="information-section__question">
          <div className="information-section__header">
            <h5>What is an interest free credit card?</h5>
            <img src="./img/icons/expand_up.svg" alt="arrow" />
          </div>
          <p className="information-section__question_answer">
            A credit card with a grace period is a bank card with an established credit limit, designed for payment,
            reservation of goods and services, as well as for receiving cash, which allows you to use credit funds
            free of charge for a certain period.
          </p>
        </div>
        <div className="information-section__question">
          <div className="information-section__header">
            <h5>How to activate a credit card</h5>
            <img src="./img/icons/expand_up.svg" alt="arrow" />
          </div>
          <p className="information-section__question_answer">
            You can activate your credit card and generate a PIN code immediately
            after receiving the card at a bank branch using a PIN pad.
          </p>
        </div>
        <div className="information-section__question_closed">
          <div className="information-section__header">
            <h5>In what currency can I issue a card?</h5>
            <img src="./img/icons/expand_up.svg" alt="arrow" />
          </div>
          <p className="information-section__question_answer">In rubles, dollars or euro</p>
        </div>
        <div className="information-section__question">
          <div className="information-section__header">
            <h5>What is a settlement date?</h5>
            <img src="./img/icons/expand_up.svg" alt="arrow" />
          </div>
          <p className="information-section__question_answer">
            The settlement date is the date from which you can pay off the debt for the reporting period.
            The settlement date falls on the first calendar day following the last day of the reporting period.
            The first settlement date is reported by the bank when transferring the issued credit card to the client,
            and then in the monthly account statement.
          </p>
        </div>
        <div className="information-section__question">
          <div className="information-section__header">
            <h5>What do I need to know about interest rates?</h5>
            <img src="./img/icons/expand_up.svg" alt="arrow" />
          </div>
          <p className="information-section__question_answer">
            For each reporting period from the 7th day of the previous month to the 6th day of the current month inclusive,
            a statement is generated for the credit card. The statement contains information on the amount and
            timing of the minimum payment, as well as the total amount of debt as of the date of issue.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Faq;
