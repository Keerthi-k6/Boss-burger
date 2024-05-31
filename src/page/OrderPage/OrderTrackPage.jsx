import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import NotFound from '../../components/NotFound/NotFound';
import styles from './OrderTrackPage.module.css'
import { trackOrderById } from '../../services/orderService';
import Date from '../../components/Date/DateTime';
import OrderItemsList from '../../components/OrderItemsList/OrderItemsList';
import Map from '../../components/Map/Map';
import Title from '../../components/Title/Title';
const OrderTrackPage = () => {
  const {orderId} = useParams()
  const [order,setOrder] = useState();
  useEffect(() => {
    orderId && trackOrderById(orderId).then(order => setOrder(order))

  },[])
  if(!orderId)
    {
      return <NotFound message={"Order not found"} linkText={"Go Back to HomePage"} linkRoute={'/'}/>
    }
  return (
    order && 
    <>
      <h1 style={{textAlign: 'center',color: 'var(--black)',paddingTop: '2rem'}}>Order Tracking</h1>    
    <div className={styles.container+' innerwidth paddings flexCenter'} style={{justifyContent:'space-around',alignItems:'flex-start'}} >
      <div className={styles.content + ' innerwidth paddings'}>
        <div className={styles.order + ' innerwidth paddings'}>
        <h2 style={{color: 'var(--black)',fontWeight:'light'}}>Order # {order.id}</h2>
          <strong>Order Date: </strong>
          <p>
          <Date date={order.createdAt} />
          </p>
          <p>
          <strong>Address</strong>
          </p>
          <p>{order.address}</p>
          <strong>Status: </strong>
          <p>{order.status}</p>
          {order.paymentId && (
            <div className="">
              <strong>Payment Id: </strong>
              <p>{order.paymentId}</p>
            </div>
          )}
        </div>
          <div className={styles.map + ' innerwidth paddings'}>
              <h3> Your Location :</h3>
              <Map location={order.addressLatLng} readonly={true} />
          </div>
      </div>
          <OrderItemsList order={order} />
          {order.status === 'NEw' && (<div className={styles.payment}>
            <Link to = '/payment' className={'button'}>Proceed To Payment</Link> 
            </div>)}
    </div>
    </>
  )
}

export default OrderTrackPage
