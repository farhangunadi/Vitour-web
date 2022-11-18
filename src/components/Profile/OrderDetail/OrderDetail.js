import React, { useEffect, useState } from 'react'
import axios from 'axios';

import "./OrderDetail.css"
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { Footer } from '../../LandingPageCompt/Footer/Footer';

function OrderDetail(props) {
  const {id} = useParams();
  const [orders, setOrders] = useState([]);
  
  const myToken = sessionStorage.getItem('token')
  console.log(myToken)
  
  useEffect(() => {
    const fetchCart = async () => {
      // setLoading(true);
      axios
        .get(`https://vitour-backend.herokuapp.com/api/order/`+id, {
          headers: {
            'Authorization': `Bearer ${myToken}`
          }
        })
        .then((res) => {
          setOrders(res.data.data)
          console.log(res.data.data)
          
          // setLoading(false);
        }).catch(err => {
          console.log(err)
        })
    };

    fetchCart();
  }, []);
  return (
    <>
    <Container className="my-orders">
      <div className='page-title'>
      <h1>Order Detail</h1>
      </div>
      
      <Container className="orders">
        {orders.map((order) => {
          return (
            <Card className='order-card'>
              <Card.Body>
                <hr/>
                <Row>
                  <Col className="sub-title">
                    <p>Order ID</p>
                    <p>Merchant ID</p>
                    <p>Transaction ID</p>
                    <p>Total Payment</p>
                    <p>Pay With:</p>
                    <p>Va numbers:</p>
                    <p>Transaction Time:</p>
                    <p>Status</p>
                    
                    
                  </Col>
                  <Col>
                    <p>: {order.order_id}</p>
                    <p>: {order.response_midtrans.merchant_id}</p>
                    <p>: {order.response_midtrans.transaction_id}</p>
                    <p>: Rp {order.response_midtrans.gross_amount}</p>
                    <p>: {order.response_midtrans.payment_type ? order.response_midtrans.payment_type : "bank_transfer"} ({order.response_midtrans.va_numbers ? order.response_midtrans.va_numbers[0].bank : "permata"})</p>                    
                    <p>: <b>{order.response_midtrans.va_numbers ? order.response_midtrans.va_numbers[0].bank : order.response_midtrans.permata_va_number}</b></p> 
                    <p>: {order.response_midtrans.transaction_time}</p>
                    <p>: {order.response_midtrans.transaction_status}</p>
                  </Col>
                </Row>
              </Card.Body>
             
            </Card>
          )
        })}
        
      </Container>
      
        

    </Container>
    <Footer/>
    </>
  )
}

export default OrderDetail