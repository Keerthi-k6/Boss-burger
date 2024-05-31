import React, { useEffect } from 'react'
import { useState } from 'react'
import { getNewOrderForCurrentUser } from '../../services/orderService'
import styles from './PaymentPage.module.css'
import Title from '../../components/Title/Title'
import OrderItemsList from '../../components/OrderItemsList/OrderItemsList'
import Map from '../../components/Map/Map'
import PayButtons from '../../components/PayButtons/PayButtons'
const PaymentPage = () => {
    const [order,setOrder] = useState()
    useEffect(() => {
        getNewOrderForCurrentUser().then(data => setOrder(data))
    },[])
    if(!order) return;
  return (
    <div className={styles['container']}>
      <div className={styles['content'] + ' innerwidth paddings flexCenter'}>
           <h1 style={{textAlign: 'center',color: 'var(--black)'}}>Order Summary</h1>
        <div className={styles['order']}>
        <div className={styles['summary'] + ' innerwidth paddings'}>
            <strong >Order Details : </strong>
            <div className={styles['summary-item'] +' innerwidth paddings'}>
                <h3>Name: </h3>
                <span>{order.name}</span>
                <hr/>
                <h3>Address: </h3>
                <span>{order.address}</span>
            </div>
      <div className={styles['map']}>
        <strong >Your Location: </strong>
        <Map location={order.addressLatLng} readonly={true}/>
      </div>
        </div>
        <OrderItemsList order={order}/>
        </div>
        <div className={styles['btn-cnt']}>
            <div className={styles['btn']}>
                <PayButtons order={order} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentPage
