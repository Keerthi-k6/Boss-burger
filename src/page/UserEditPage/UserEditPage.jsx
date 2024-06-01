import React, { useEffect } from 'react'
import styles from './UserEditPage.module.css'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { getById, updateUser } from '../../services/userService'
import Title from '../../components/Title/Title'
import Input from '../../components/input/Input'
import { EMAIL } from '../../constants/patterns'

const UserEditPage = () => {
    const {register, handleSubmit, formState: {errors},reset} = useForm()
    const {userId} = useParams()
    const navigate=useNavigate();
    const isEditMode = userId;
    useEffect(() => {
        if(isEditMode) loadUser()
    },[userId])
    const loadUser=async()=>{
        const user = await getById(userId)
        reset(user)
    }
    const submit = userData => {
        updateUser(userData);
        navigate('/admin/users')

      };
  return (
    <div className={styles.container}>
        <Title Title='Edit User' color='var(--black)' fontSize='2rem' />

        
        <div className={styles.content+' innerwidth paddings'} >
            <form onSubmit={handleSubmit(submit)} noValidate>
            <Input
            label="Name"
            {...register('name', { required: true, minLength: 3 })}
            error={errors.name}
          />
          <Input
            label="Email"
            {...register('email', { required: true, pattern: EMAIL })}
            error={errors.email}
          />
          <Input
            label="Address"
            {...register('address', { required: true, minLength: 5 })}
            error={errors.address}
          />

          <Input label="Is Admin" type="checkbox" {...register('isAdmin')} />
          <button type='submit' className={'button'}>Submit</button> 
            </form>

        </div>
      
    </div>
  )
}

export default UserEditPage
