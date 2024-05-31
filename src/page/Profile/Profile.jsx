import React from 'react'
import styles from './Profile.module.css'
import {useForm} from 'react-hook-form'
import {useAuth} from '../../hooks/useAuth'
import Title from '../../components/Title/Title'
import Input from '../../components/input/Input'
import ChangePassword from '../../components/ChangePassword/ChangePassword'
const Profile = () => {
  const {register, handleSubmit, formState: {errors}} = useForm()
  const {user,updateProfile} = useAuth()
  const submit = async(user) => {
    updateProfile(user)
    console.log(user)
  }
  return (
    <div className={styles.container + ' innerwidth paddings flexCenter'} style={{justifyContent: 'space-between'}}>
      <div className={styles.details + ' innerwidth paddings flexColCenter'}>
        <Title Title=' Update Profile' color='var(--black)' fontSize='2rem' />
        <form className={styles.form + ' flexColCenter'} onSubmit={handleSubmit(submit)}>
          <Input defaultValue={user.name} label='Name' {...register('name', {required: true, minLength: 5})} error={errors.name} type={'text'}/>
          <Input defaultValue={user.address} label='Address' {...register('address', {required: true, minLength: 10})} error={errors.name} type={'text'}/>
          <button className={styles.btn} type='submit'>Update</button>
        </form>
      </div>
        <ChangePassword/>
      
    </div>
  )
}

export default Profile
