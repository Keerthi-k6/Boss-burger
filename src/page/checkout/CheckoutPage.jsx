import React, { useState } from 'react'
import {useCart} from '../../hooks/useCart'
import {useAuth} from '../../hooks/useAuth'
import {useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { toast } from 'react-toastify'
import { createOrder } from '../../services/orderService'
import styles from './Checkout.module.css'  
import Title from '../../components/Title/Title'
import Input from '../../components/input/Input'
const CheckoutPage = () => {
    const {cart} = useCart()
    const {user} = useAuth()
    const navigate = useNavigate()
    const [order,setOrder] = useState({...cart})
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const submit = async(data) => {
        if(!order.addressLatLng)
            {
                toast.warning('Please select your location on Map')
                return;
            }
            await createOrder({...order,name:data.name,address:data.address})
            navigate('/payment')
    }
  return (
    <>
       <Title Title='Order Form' color='var(--black)' fontSize='2rem'/>
     <form 
     onSubmit={handleSubmit(submit)}
     className={styles['checkout-container']+' innerwidth flexColCenter'}>
     <div className={styles['form-content']} style={{flexDirection:'row'}}>
         <div className={styles['form-inputs']}>
            <Input
              defaultValue={user.name}
              label='Name'
              {...register('name', { required: true })}
              error={errors.name}
              />
            <Input
              defaultValue={user.address}
              label='Address'
              {...register('address', { required: true })}
              error={errors.address}
              />
         </div>
         <div className={styles['form-map']}>
            <Title Title='Choose Your Location' color='var(--black)' fontSize='1rem'/>
         </div>  
     </div>
            <button className={`button`} type='submit' style={{width: '9rem'}}>Go To Payment</button>
     </form>

    </>
  )
}

export default CheckoutPage