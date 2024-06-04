import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Input from '../../components/input/Input'
import Title from '../../components/Title/Title'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import styles from './Register.module.css'
import { useAuth } from '../../hooks/useAuth'
import { EMAIL } from '../../constants/patterns'
const Register = () => {
    const auth = useAuth()
    const {user} = auth
    const navigate = useNavigate()
    const { handleSubmit, register, formState: { errors },getValues } = useForm()
    const [params] = useSearchParams()
    const returnUrl = params.get('returnUrl')
    useEffect(()=>
    {
        if(!user) return
        returnUrl ? navigate(returnUrl) : navigate('/')
    },[user])
    
    const handleRegSubmit = async(data) => {
        await auth.register(data);
    }
  return (
    <div className={styles['register-wrapper'] }>
        <Title Title='Register' color='var(--black)' fontSize='2rem' />
        <div className={styles['register-container'] } style={{width:'70%'}}>
         <form  className={styles['register-form'] + ' flexColCenter'} onSubmit={handleSubmit(handleRegSubmit) } noValidate>
            <Input type = 'text' label='Name'{...register('name', {required: true,minLength: 5})} 
            error={errors.name}/>
            <Input type = 'email' label='Email'{...register('email', {required: true,pattern:EMAIL,
            })} 
            error={errors.email}/>

            <Input type = 'password' label='Password'{...register('password', {required: true,  minLength: 5,
            })} 
            error={errors.password}/>
            <Input type = 'password' label='Confirm Password'{...register('confirmPassword', {required: true, 
            validate: (value) => value !== getValues('password')? 'Passwords do not match' : true, 
            })} 
            error={errors.confirmPassword}/>

            <Input type = 'text' label='Address'{...register('address', {required: true,  minLength: 10,
            })} 
            error={errors.address}/>
            <button type='submit' className='button' style={{width:'9rem'}}>Register</button>
            <p style={{marginTop:'1rem'}}>Already have an account? &nbsp;
            <Link to = {`/login?${returnUrl ? `returnUrl=${returnUrl}` : ''}`} style={{color:'var(--yellow)'}}> Login</Link>
            </p>
         </form>
            </div>
    </div>
  )
}

export default Register
