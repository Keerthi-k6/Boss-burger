import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../input/Input';
import { useAuth } from '../../hooks/useAuth';
import Title from '../Title/Title';

export default function ChangePassword() {
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();

  const { changePassword } = useAuth();
  const submit = passwords => {
    changePassword(passwords);
  };

  return (
    <div className=' innerwidth paddings' style={{width: '50%'}}>
      <Title Title='Change Password' color='var(--black)' fontSize='2rem' />
      <form onSubmit={handleSubmit(submit)} style={{border: '1px solid var(--black)', padding: '2rem',borderRadius: '1rem'}} className='flexColCenter'>
        <Input
          type="password"
          label="Current Password"
          {...register('currentPassword', {
            required: true,
          })}
          error={errors.currentPassword}
        />

        <Input
          type="password"
          label="New Password"
          {...register('newPassword', {
            required: true,
            minLength: 5,
          })}
          error={errors.newPassword}
        />

        <Input
          type="password"
          label="Confirm Password"
          {...register('confirmNewPassword', {
            required: true,
            validate: value =>
              value != getValues('newPassword')
                ? 'Passwords Do No Match'
                : true,
          })}
          error={errors.confirmNewPassword}
        />

       <button type="submit" className='button'>Change Password</button>
      </form>
    </div>
  );
}