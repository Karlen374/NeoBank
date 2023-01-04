import React from 'react';
import { useForm } from 'react-hook-form';
import './cardCustomizeSection.scss';
import CustomizeSectionHeader from './customizeSectionHeader';

interface IFormInput {
  amount: number,
  term: 6 | 12 | 18 |24,
  firstName: string,
  lastName: string,
  middleName: string | null,
  email: string,
  birthdate: string | Date,
  passportSeries: string,
  passportNumber: string
}

const CardCustomizeSection = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFormInput>({ mode: 'onBlur' });
  const customizeCard = (data: IFormInput) => {
    console.log(data);
    reset();
  };

  return (
    <section className="customize-section wrapper">
      <div className="customize-section__block">
        <CustomizeSectionHeader />
        <h3 className="customize-section__contact">Contact Information</h3>
        <form onSubmit={handleSubmit(customizeCard)}>
          <div className="customize-section__information">
            <div className="customize-section__input">
              <label className="customize-section__input_necessary" htmlFor="lastName">Your last name</label>
              <input
                className="customize-section__input_default"
                name="lastName"
                id="lastName"
                type="text"
                placeholder="For Example Doe"
                {...register('lastName', {
                  required: 'Enter your last name',
                })}
              />
              {errors.lastName?.message && (
                <p className="customize-section__input_errorMessage">{errors.lastName?.message}</p>
              )}
            </div>
            <div className="customize-section__input">
              <label className="customize-section__input_necessary" htmlFor="firstName">Your first name</label>
              <input
                className="customize-section__input_default"
                type="text"
                name="firstName"
                id="firstName"
                placeholder="For Example Jhon"
                {...register('firstName', {
                  required: 'Enter your first name',
                })}
              />
              {errors.firstName?.message && (
                <p className="customize-section__input_errorMessage">{errors.firstName?.message}</p>
              )}
            </div>
            <div className="customize-section__input">
              <label className="customize-section__input_notNecessary" htmlFor="patronymic">Your patronymic</label>
              <input
                className="customize-section__input_default"
                type="text"
                name="patronymic"
                id="patronymic"
                placeholder="For Example Victorovich"
                {...register('middleName')}
              />
            </div>
            <div className="customize-section__input">
              <label className="customize-section__input_necessary" htmlFor="select">Select term</label>
              <select className="customize-section__input_default" defaultValue={6} {...register('term')} name="select" id="select">
                <option value={6}>6 month</option>
                <option value={12}>12 month</option>
                <option value={18}>18 month</option>
                <option value={24}>24 month</option>
              </select>
            </div>

            <div className="customize-section__input">
              <label className="customize-section__input_necessary" htmlFor="email">Your email</label>
              <input
                className="customize-section__input_default"
                type="text"
                name="email"
                id="email"
                placeholder="test@gmail.com"
                {...register('email', {
                  required: 'this field is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Incorrect email address',
                  },
                })}
              />
              {errors.email?.message && (
                <p className="customize-section__input_errorMessage">{errors.email?.message}</p>
              )}
            </div>
            <div className="customize-section__input">
              <label className="customize-section__input_necessary" htmlFor="dateoOfBirth">Your date of birth</label>
              <input
                className="customize-section__input_default"
                type="number"
                name="dateoOfBirth"
                id="dateoOfBirth"
                placeholder="Select Date and Time"
                {...register('birthdate', {
                  required: 'this field is required',
                  min: {
                    value: 18,
                    message: 'Incorrect date of birth',
                  },
                })}
              />
              {errors.birthdate?.message && (
                <p className="customize-section__input_errorMessage">{errors.birthdate?.message}</p>
              )}
            </div>
            <div className="customize-section__input">
              <label className="customize-section__input_necessary" htmlFor="passportSeries">Your passport series</label>
              <input
                className="customize-section__input_default"
                type="text"
                name="passportSeries"
                id="passportSeries"
                placeholder="0000"
                {...register('passportSeries', {
                  required: 'this field is required',
                  minLength: {
                    value: 4,
                    message: 'The series must be 4 digits',
                  },
                  maxLength: {
                    value: 4,
                    message: 'The series must be 4 digits',
                  },
                })}
              />
              {errors.passportSeries?.message && (
                <p className="customize-section__input_errorMessage">{errors.passportSeries?.message}</p>
              )}
            </div>
            <div className="customize-section__input">
              <label className="customize-section__input_necessary" htmlFor="passportNumber">Your passport number</label>
              <input
                className="customize-section__input_default"
                type="text"
                name="passportNumber"
                id="passportNumber"
                placeholder="000000"
                {...register('passportNumber', {
                  required: 'this field is required',
                  minLength: {
                    value: 6,
                    message: 'The series must be 6 digits',
                  },
                  maxLength: {
                    value: 6,
                    message: 'The series must be 6 digits',
                  },
                })}
              />
              {errors.passportNumber?.message && (
                <p className="customize-section__input_errorMessage">{errors.passportNumber?.message}</p>
              )}
            </div>
          </div>
          <div className="customize-section__button">
            <button type="submit" className="button">Continue</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CardCustomizeSection;
