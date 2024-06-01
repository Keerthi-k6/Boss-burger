import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import styles from  './LoginPage.module.css'
import Title from '../../components/Title/Title'
import Input from '../../components/input/Input'
import { EMAIL } from '../../constants/patterns'
const LoginPage = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm()
    const navigate = useNavigate()
    const {user , login } = useAuth()
    const [params] = useSearchParams()
    const returnUrl = params.get('returnUrl')
    useEffect(() => {
        if(!user) return;
        returnUrl ? navigate(returnUrl) : navigate('/')
    },[user]);
    const submit = async({email, password}) => {
        await login(email, password)
    }
  return (
    <div className={`${styles['login-wrapper']} innerwidth paddings`} >
        <Title Title='Login Page' color={'var(--black)'} fontSize={'2rem'} />
      <div className={`${styles['login-container']}`} style={{width:'70%'}}>
        <form className={styles['login-form'] + ' flexColCenter'} onSubmit={handleSubmit(submit)} noValidate >
           <Input type = 'email' label='Email'{...register('email', {required: true,pattern:EMAIL,
           })} 
           error={errors.email}/>
           <Input type = 'password' label='Password'{...register('password', {required: true,

           })} 
           error={errors.password}/>
        <button className={`button`} type='submit' style={{width: '9rem'}}>Login</button>
        <p style={{marginTop: '1rem'}}>Don't have an account ? &nbsp;
        <Link to={`/register?${returnUrl ? `returnUrl=${returnUrl}` : ''}`} style={{color: 'var(--yellow)'}}> 
        Register Here
        </Link>
        </p>
      </form>
      </div>
    </div>
  )
}

export default LoginPage
