import {
  IScoringForm,
  useAppDispatch,
  postScoringData,
  materialOptions,
  dependentOptions,
  employmentOptions,
  positionOptions,
} from '@utils';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import SuccessIcon from '../../public/icons/successIcon';
import ErrorIcon from '../../public/icons/errorIcon';
import './scoringForm.scss';

export const ScoringForm = () => {
  const {
    register,
    formState: { errors, touchedFields },
    handleSubmit,
    reset,
  } = useForm<IScoringForm>({ mode: 'onBlur' });
  const { applicationId } = useParams();
  const dispatch = useAppDispatch();

  const handleSubmitForm = (data: IScoringForm) => {
    dispatch(postScoringData({ data, applicationId }));
    reset();
  };
  return (
    <form onSubmit={handleSubmit(handleSubmitForm)} className="scoringForm wrapper">
      <div className="scoringForm__header">
        <h2>Continuation of the application</h2>
        <p>Step 2 of 5</p>
      </div>
      <div className="scoring-dataForm__data">
        <div className="scoring-dataForm__select">
          <label className="scoring-dataForm__select_necessary" htmlFor="gender">What&apos;s your gender</label>
          <select
            {...register('gender', {
              required: 'Select one of the options',
            })}
            className="scoring-dataForm__select_default"
            name="gender"
            id="gender"
          >
            <option value="">{' '}</option>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
          </select>
          {errors.gender?.message && (
            <p className="customize-section__input_errorMessage">{errors.gender?.message}</p>
          )}
        </div>
        <div className="scoring-dataForm__select">
          <label className="scoring-dataForm__select_necessary" htmlFor="material status">Your marital status</label>
          <select
            name="material status"
            id="material status"
            className="scoring-dataForm__select_default"
            {...register('maritalStatus', {
              required: 'Select one of the options',
            })}
          >
            {materialOptions.map((item) => <option key={item.text} value={item.value}>{item.text}</option>)}
          </select>
          {errors.maritalStatus?.message && (
            <p className="customize-section__input_errorMessage">{errors.maritalStatus?.message}</p>
          )}
        </div>
        <div className="scoring-dataForm__select">
          <label className="scoring-dataForm__select_necessary" htmlFor="number of dependents">Your number of dependents</label>
          <select
            name="number of dependents"
            id="number of dependents"
            className="scoring-dataForm__select_default"
            {...register('dependentAmount', {
              required: 'Select one of the options',
            })}
          >
            {dependentOptions.map((item) => <option key={item.text} value={item.value}>{item.text}</option>)}
          </select>
          {errors.dependentAmount?.message && (
            <p className="customize-section__input_errorMessage">{errors.dependentAmount?.message}</p>
          )}
        </div>
        <div className="scoring-dataForm__input">
          <label className="scoring-dataForm__input_necessary" htmlFor="passport">Date of issue of the passport</label>
          <div>
            <input
              type="text"
              name="passport"
              id="passport"
              placeholder="Select Date and Time"
              {...register('passportIssueDate', {
                required: 'Incorrect date of passport issue date',
              })}
            />
            {errors.passportIssueDate?.message && (
            <ErrorIcon />
            )}
            {touchedFields.passportIssueDate && !errors.passportIssueDate?.message && (
            <SuccessIcon />
            )}
          </div>
          {errors.passportIssueDate?.message && (
            <p className="customize-section__input_errorMessage">{errors.passportIssueDate?.message}</p>
          )}
        </div>
        <div className="scoring-dataForm__input">
          <label className="scoring-dataForm__input_necessary" htmlFor="division">Division code</label>
          <div>
            <input
              type="text"
              name="division"
              id="division"
              placeholder="000000"
              {...register('passportIssueBranch', {
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
            {errors.passportIssueBranch?.message && (
            <ErrorIcon />
            )}
            {touchedFields.passportIssueBranch && !errors.passportIssueBranch?.message && (
            <SuccessIcon />
            )}
          </div>
          {errors.passportIssueBranch?.message && (
            <p className="customize-section__input_errorMessage">{errors.passportIssueBranch?.message}</p>
          )}
        </div>
      </div>
      <h3>Employment</h3>
      <div className="scoring-employmentForm">
        <div className="scoring-employmentForm__select">
          <label className="scoring-employmentForm__select_necessary" htmlFor="status">Your employment status</label>
          <select
            className="scoring-employmentForm__select_default"
            name="status"
            id="status"
            {...register('employmentStatus', {
              required: 'Select one of the options',
            })}
          >
            {employmentOptions.map((item) => <option key={item.text} value={item.value}>{item.text}</option>)}
          </select>
          {errors.employmentStatus?.message && (
            <p className="customize-section__input_errorMessage">{errors.employmentStatus?.message}</p>
          )}
        </div>
        <div className="scoring-employmentForm__input">
          <label className="scoring-employmentForm__input_necessary" htmlFor="INN">Your employer INN</label>
          <div>
            <input
              type="text"
              name="INN"
              id="INN"
              placeholder="000000000000"
              {...register('employerINN', {
                required: 'this field is required',
                minLength: {
                  value: 12,
                  message: 'The series must be 12 digits',
                },
                maxLength: {
                  value: 12,
                  message: 'The series must be 12 digits',
                },
              })}
            />
            {errors.employerINN?.message && (
            <ErrorIcon />
            )}
            {touchedFields.employerINN && !errors.employerINN?.message && (
            <SuccessIcon />
            )}
          </div>
          {errors.employerINN?.message && (
            <p className="customize-section__input_errorMessage">{errors.employerINN?.message}</p>
          )}
        </div>
        <div className="scoring-employmentForm__input">
          <label className="scoring-employmentForm__input_necessary" htmlFor="salary">Your salary</label>
          <div>
            <input
              className="scoring-employmentForm__input_error"
              type="number"
              name="salary"
              id="salary"
              placeholder="For example 100 000"
              {...register('salary', {
                required: 'Enter your salary',
              })}
            />
            {errors.salary?.message && (
            <ErrorIcon />
            )}
            {touchedFields.salary && !errors.salary?.message && (
            <SuccessIcon />
            )}
          </div>
          {errors.salary?.message && (
            <p className="customize-section__input_errorMessage">{errors.salary?.message}</p>
          )}
        </div>
        <div className="scoring-employmentForm__select">
          <label className="scoring-employmentForm__select_necessary" htmlFor="status">Your position</label>
          <select
            className="scoring-employmentForm__select_default"
            name="status"
            id="status"
            {...register('position', {
              required: 'Select one of the options',
            })}
          >
            {positionOptions.map((item) => <option key={item.text} value={item.value}>{item.text}</option>)}
          </select>
          {errors.position?.message && (
            <p className="customize-section__input_errorMessage">{errors.position?.message}</p>
          )}
        </div>
        <div className="scoring-employmentForm__input">
          <label className="scoring-employmentForm__input_necessary" htmlFor="workExperienceTotal">Your work experience total</label>
          <div>
            <input
              type="number"
              name="workExperienceTotal"
              id="workExperienceTotal"
              placeholder="For example 10"
              {...register('workExperienceTotal', {
                required: 'Enter your work experience total',
                maxLength: {
                  value: 2,
                  message: 'no more than 2 characters',
                },
              })}
            />
            {errors.workExperienceTotal?.message && (
            <ErrorIcon />
            )}
            {touchedFields.workExperienceTotal && !errors.workExperienceTotal?.message && (
            <SuccessIcon />
            )}
          </div>
          {errors.workExperienceTotal?.message && (
            <p className="customize-section__input_errorMessage">{errors.workExperienceTotal?.message}</p>
          )}
        </div>
        <div className="scoring-employmentForm__input">
          <label className="scoring-employmentForm__input_necessary" htmlFor="workExperienceCurrent">
            Your work experience current
          </label>
          <div>
            <input
              type="number"
              name="workExperienceCurrent"
              id="workExperienceCurrent"
              placeholder="For example 2"
              {...register('workExperienceCurrent', {
                required: 'Enter your work experience current',
                maxLength: {
                  value: 2,
                  message: 'no more than 2 characters',
                },
              })}
            />
            {errors.workExperienceCurrent?.message && (
            <ErrorIcon />
            )}
            {touchedFields.workExperienceCurrent && !errors.workExperienceCurrent?.message && (
            <SuccessIcon />
            )}
          </div>
          {errors.workExperienceCurrent?.message && (
            <p className="customize-section__input_errorMessage">{errors.workExperienceCurrent?.message}</p>
          )}
        </div>
      </div>
      <div className="scoringForm__button">
        <button type="submit" className="button">Continue</button>
      </div>
    </form>
  );
};
