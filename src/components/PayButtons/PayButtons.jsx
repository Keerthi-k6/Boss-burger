import React from 'react';
import { razorpayPayment, pay } from '../../services/orderService';
import { useCart } from '../../hooks/useCart';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const PayButtons = ({ order }) => {
    const { clearCart } = useCart();
    const navigate = useNavigate();

    const handlePay = async () => {
        try {
            console.log(order.totalPrice);
            const orderId = await razorpayPayment({ amount: order.totalPrice });
            if (orderId) {
                clearCart();
                toast.success('Payment Successful!');
                navigate('/track/' + orderId);
            }
        } catch (err) {
            console.log(err);
            toast.error('Payment Failed!');
        }
    };

    return (
        <div>
            <button className={'button'} style={{ width: '30rem' }} onClick={handlePay}> Place Order </button>
        </div>
    );
};

export default PayButtons;
