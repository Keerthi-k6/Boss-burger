import React, { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { createOrder } from '../../services/orderService';
import styles from './Checkout.module.css';
import Title from '../../components/Title/Title';
import Input from '../../components/input/Input';
import OrderItemsList from '../../components/OrderItemsList/OrderItemsList';
import Map from '../../components/Map/Map';
const CheckoutPage = () => {
    const { cart } = useCart();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [order, setOrder] = useState({ ...cart });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const submit = async (data) => {
        if (!order.addressLatLng) {
            toast.warning('Please select your location on Map');
            return;
        }
        await createOrder({ ...order, name: data.name, address: data.address });
        navigate('/payment');
    };

    return (
        <div className={styles['checkout-page'] + ' innerwidth'} style={{padding: '4rem',paddingTop: '0'}} >
            <Title Title='Order Summary' color='var(--black)' fontSize='2rem'/>
            <form 
                onSubmit={handleSubmit(submit)}
                className={styles['checkout-container'] + ' innerwidth'}
            >
                <div className={styles['form-content']}>
                    <div className={styles['address']}>
                        <div className={styles['form-inputs'] + ' paddings'}>
                          <strong>Please enter your details:</strong>
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
                    </div>
                    <div className={styles['form-map']}>
                       <strong>Please select your location on the map :</strong>
                       <Map location={order.addressLatLng} onChange={(latlng) => setOrder({ ...order, addressLatLng: latlng })} />
                    </div>
                </div>
                <div className={styles['order-items']}>
                <OrderItemsList order={order} />
                <button className={`button`} type='submit' style={{ width: '20rem' }}>Go To Payment</button>
                </div>
            </form>
        </div>
    );
};

export default CheckoutPage;
