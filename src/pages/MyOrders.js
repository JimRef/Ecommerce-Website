import UserContext from '../UserContext.js'
import { useContext, useEffect, useState } from 'react'
import { Container, Row, Col, Table} from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import ViewMyOrders from '../components/ViewMyOrders.js'

export default function MyOrders (){
    const {user} = useContext(UserContext);
    const [myOrders, setMyOrders] = useState([]);


    useEffect(()=>{
        fetch(`${process.env.REACT_APP_ECOM_API}/order/retrieveorder`,{
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(result => result.json())
        .then(data => {
            console.log(data)
            setMyOrders(data.map(myorders =>{
                return(
                    <ViewMyOrders key={myorders._id} myOrderProp={myorders}/>
                )
            }))
        })
               
    },[])
    
    return (
        user && user.isAdmin?
        <Navigate to = "*"/>
        :        
        <Container>
            <Row>
                <Col className='mx-auto mt-3'>
                    <h1 className='text-center'>My Order's</h1>
                </Col>
            </Row>
            <Table>
                <thead>
                    <tr>
                        <th>Order Number</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Total Amount</th>
                        <th>Purchase Date</th>
                    </tr>                    
                </thead>
                {myOrders}              
            </Table>
        </Container>
        
    )
}