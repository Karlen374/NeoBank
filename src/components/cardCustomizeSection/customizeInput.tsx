import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import SuccessIcon from '../../public/icons/successIcon';
import ErrorIcon from '../../public/icons/errorIcon';
import './cardCustomizeSection.scss';

interface IImport {
  firstName: string;
  lastName: string;
  mail:string;
}
const CustomizeInput = () => {
  const {
    register,
    formState: { errors, touchedFields, dirtyFields },
    handleSubmit,
    reset,
  } = useForm<IImport>({ mode: 'onBlur' });

  return (
    <form>
      <div className="customize__input">
        <input
          type="text"
          {...register('firstName', {
            required: 'Enter your last name',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Incorrect email address',
            },
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
    </form>
  );
};
export default CustomizeInput;
