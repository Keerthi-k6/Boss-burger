import axios from "axios";

export const createOrder = async (order) => {
    try {
        const { data } = await axios.post('/api/orders/create', order);
        console.log(data);
        return data;
    } catch (err) {
        console.log(err);
    }
};

export const getNewOrderForCurrentUser = async () => {
    const { data } = await axios.get('/api/orders/newOrderForCurrentUser');
    return data;
};

export const razorpayPayment = async (amount) => {
    try {
        const { data } = await axios.post('/api/orders/razorpay', amount);
        console.log(data.data);
        const orderId = await handleVerify(data.data);
        console.log(orderId);
        return orderId;;
    } catch (err) {
        console.log(err);
    }
};

const handleVerify = (data) => {
    return new Promise((resolve, reject) => {
        const options = {
            key: "rzp_test_kTqi2QBrp0xsCq",
            amount: data.amount,
            currency: data.currency,
            name: "Boss Burger",
            description: "Test Transaction",
            order_id: data.id,
            handler: async (response) => {
                console.log("res", response);
                try {
                    const res = await pay({ paymentId: response.razorpay_payment_id });
                    console.log(res);
                    resolve(res); 
                } catch (err) {
                    console.log(err);
                    reject(err);
                }
            },
            theme: {
                color: "#f9b209",
            }
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    });
};

export const pay = async (paymentId) => {
    try {
        const { data } = await axios.put('/api/orders/pay', paymentId);
        return data;
    } catch (err) {
        console.log(err);
    }
};

export const  trackOrderById = async(orderId) => {
    const {data} = await axios.get(`/api/orders/track/${orderId}`)
    return data
}
export const getAll = async (state) => {
    const { data } = await axios.get(`/api/orders/${state ?? ''}`);
    return data;
}

export const getAllByStatus = async () => {
    const  {data} = await axios.get('/api/orders/allstatus')
    return data
}

export const deliverStat = async orderId => {
    const { data } = await axios.put(`api/upload/updateStatus/${orderId}` );
    console.log(data);
    return data;
  };