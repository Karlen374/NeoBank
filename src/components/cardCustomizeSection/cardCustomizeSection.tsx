import React, { startTransition, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  ICardCustomizeForm,
  useAppDispatch,
  postCardCustomizeData,
  useAppSelector,
  termOptions,
} from '@utils';
import SuccessIcon from '../../public/icons/successIcon';
import ErrorIcon from '../../public/icons/errorIcon';
import './cardCustomizeSection.scss';
import CustomizeSectionHeader from './customizeSectionHeader';
import Loader from '../shared/loader/loader';

export const CardCustomizeSection = () => {
  const [amount, setAmount] = useState(15000);
  const { loader } = useAppSelector((store) => store.cardSlice);
  const dispatch = useAppDispatch();

  const {
    register,
    formState: { errors, touchedFields },
    handleSubmit,
    reset,
  } = useForm<ICardCustomizeForm>({ mode: 'onBlur' });

  const handleChangeAmount = (amount: number) => {
    setAmount(amount);
  };
  const handleSubmitForm = (data: ICardCustomizeForm) => {
    startTransition(() => {
      dispatch(postCardCustomizeData({ ...data, amount }));
      reset();
    });
  };

  if (loader) {
    return <Loader />;
  }
  return (
    <section id="customize-form" className="customize-section wrapper">
      <div className="customize-section__block">
        <CustomizeSectionHeader onChange={handleChangeAmount} amount={amount} />
        <h3 className="customize-section__contact">Contact Information</h3>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <div className="customize-section__information">
            <div className="customize-section__input">
              <label className="customize-section__input_necessary" htmlFor="lastName">Your last name</label>
              <div>
                <input
                  name="lastName"
                  id="lastName"
                  type="text"
                  className="customize-section__input_default"
                  placeholder="For Example Doe"
                  {...register('lastName', {
                    required: 'Enter your last name',
                  })}
                />
                {errors.lastName?.message && (
                <ErrorIcon />
                )}
                {touchedFields.lastName && !errors.lastName?.message && (
                <SuccessIcon />
                )}
              </div>
              {errors.lastName?.message && (
                <p className="customize-section__input_errorMessage">{errors.lastName?.message}</p>
              )}
            </div>
            <div className="customize-section__input">
              <label className="customize-section__input_necessary" htmlFor="firstName">Your first name</label>
              <div>
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
                <ErrorIcon />
                )}
                {touchedFields.firstName && !errors.firstName?.message && (
                <SuccessIcon />
                )}
              </div>
              {errors.firstName?.message && (
                <p className="customize-section__input_errorMessage">{errors.firstName?.message}</p>
              )}
            </div>
            <div className="customize-section__input">
              <label className="customize-section__input_notNecessary" htmlFor="patronymic">Your patronymic</label>
              <div>
                <input
                  className="customize-section__input_default"
                  type="text"
                  name="patronymic"
                  id="patronymic"
                  placeholder="For Example Victorovich"
                  {...register('middleName')}
                />
                {errors.middleName?.message && (
                <ErrorIcon />
                )}
                {touchedFields.middleName && !errors.middleName?.message && (
                <SuccessIcon />
                )}
              </div>
            </div>
            <div className="customize-section__input">
              <label className="customize-section__input_necessary" htmlFor="term">Select term</label>
              <select
                className="customize-section__input_default"
                {...register('term', {
                  required: 'Select one of the options',
                })}
                name="term"
                id="term"
              >
                {termOptions.map((item) => <option key={item.value} value={item.value}>{item.text}</option>)}
              </select>
            </div>

            <div className="customize-section__input">
              <label className="customize-section__input_necessary" htmlFor="email">Your email</label>
              <div>
                <input
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
                <ErrorIcon />
                )}
                {touchedFields.email && !errors.email?.message && (
                <SuccessIcon />
                )}
              </div>
              {errors.email?.message && (
                <p className="customize-section__input_errorMessage">{errors.email?.message}</p>
              )}
            </div>
            <div className="customize-section__input">
              <label className="customize-section__input_necessary" htmlFor="dateoOfBirth">Your date of birth</label>
              <div>
                <input
                  className="customize-section__input_error"
                  type="date"
                  name="dateoOfBirth"
                  id="dateoOfBirth"
                  max={(new Date(new Date().setFullYear(new Date().getFullYear() - 18))).toISOString().slice(0, 10)}
                  placeholder="Select Date and Time"
                  {...register('birthdate', {
                    required: 'this field is required',
                  })}
                />
              </div>
              {errors.birthdate?.message && (
                <p className="customize-section__input_errorMessage">{errors.birthdate?.message}</p>
              )}
            </div>
            <div className="customize-section__input">
              <label className="customize-section__input_necessary" htmlFor="passportSeries">Your passport series</label>
              <div>
                <input
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
                <ErrorIcon />
                )}
                {touchedFields.passportSeries && !errors.passportSeries?.message && (
                <SuccessIcon />
                )}
              </div>
              {errors.passportSeries?.message && (
                <p className="customize-section__input_errorMessage">{errors.passportSeries?.message}</p>
              )}
            </div>
            <div className="customize-section__input">
              <label className="customize-section__input_necessary" htmlFor="passportNumber">Your passport number</label>
              <div>
                <input
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
                <ErrorIcon />
                )}
                {touchedFields.passportNumber && !errors.passportNumber?.message && (
                <SuccessIcon />
                )}
              </div>
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
