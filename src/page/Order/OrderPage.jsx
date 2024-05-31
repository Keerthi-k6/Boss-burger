import React, { useEffect, useReducer } from 'react'
import styles from './OrderPage.module.css'
import { Link, useParams } from 'react-router-dom';
import { getAll, getAllByStatus } from '../../services/orderService';
import Title from '../../components/Title/Title';
import DateTime from '../../components/Date/DateTime';
import NotFound from '../../components/NotFound/NotFound';
const initialState = {};
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ALL_STATUS_FETCHED':
      return { ...state, allStatus: payload };
    case 'ORDERS_FETCHED':
      return { ...state, orders: payload };
    default:
      return state;
  }
};

const OrderPage = () => {
    const [{allStatus,orders}, dispatch] = useReducer(reducer, initialState);
    const {filter} = useParams();
    useEffect(() => {
        getAll(filter).then(orders => dispatch({type: 'ORDERS_FETCHED', payload: 
        orders}))
        getAllByStatus().then(status => dispatch({type: 'ALL_STATUS_FETCHED', payload: status}))
    },[filter])
  return (
    <div className={styles['container'] +' flexColCenter'}>
      <Title Title=' Your Orders' color='var(--black)' fontSize='2rem'/>
      {
        allStatus && <div className={styles['status']}>
            <Link to='/orders' className={!filter ? styles['selected'] : ''}>All</Link>
            {
                allStatus.map(status => <Link key={status} to={`/orders/${status}`}  className={status == filter ? styles['selected'] : ''}>{status}</Link>)
            }
        </div>
      }
      {orders?.length === 0 && <NotFound message='No Orders Found' linkRoute={filter ? '/orders' : '/'} linkText={filter ? 'Show All' : 'Go Back to HomePage'}/>}
      {
        orders && orders.map(order => (
            <div className={styles['cnt']+' innerwidth '} key={order._id} >
                <div className={styles['header']+' paddings innerwidth'}>
                    <p> # {order._id}</p> 
                    <DateTime date={order.createdAt} />
                    <p>{order.status}</p>
                </div>
                <div className={styles['order-items']}>
                    {
                        order.items.map(item => (
                            <div className={styles['order-item']} key={item._id}>
                                <Link to={`/food/${item.food._id}`} key={item.food._id}><img src={item.food.imageUrl} alt={item.food.name} width={100} /></Link>
                            </div>
                        ))
                    }
                </div>
                <div className={styles['footer']}>
                    <div className="">
                        <Link to={`/track/${order._id}`} style={{color: 'var(--yellow)'}}>View Details</Link>
                    </div>
                    <div className="">
                        <p>&#x20B9; {order.totalPrice}</p>
                    </div>
                </div>
            </div>
        )) 
      }

    </div>
  )
}

export default OrderPage
