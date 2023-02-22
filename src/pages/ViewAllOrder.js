import {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col, Table, Button} from 'react-bootstrap';
import UserContext from '../UserContext.js';
import ViewOrder from '../components/ViewOrder.js';

export default function ViewAllOrder(){
	

	const {user} = useContext(UserContext);
	const [orders, setOrders] = useState([])

	fetch(`${process.env.REACT_APP_ECOM_API}/order/retrieveallorder`,{
		headers:{
			Authorization: `Bearer ${localStorage.getItem('token')}`
		}
	}).then(result => result.json())
	.then(data =>{
		// console.log(data)
		setOrders(data.map(order =>{
			return(
				<ViewOrder key={order._id} orderProp={order}/>
				)
		}))
	})

	return(
		<Container>
		<Row>
		<Col className="mt-1">
		<Button as = {Link} to = "/admindashboard" id="adminbutton">Back</Button>
		</Col>
		<Col md={{ span: 8, offset: 5 }}>
		<h1 className=" mx-auto mt-3" >User's Orders</h1>
		</Col>
		
		</Row>
		<Table  className="mt-3 text-center">
		<thead className="mt-3 Nav ">
	        <tr >
	          <th>Order Number</th>
	          <th>User Id</th>
	          <th>Product</th>
	          <th>Quantity</th>
	          <th>Total Amount</th>
	          <th>Purchase Date</th>
	        </tr>	        	        
	      </thead>
	      {orders}
	    </Table>		
		</Container>
		)
}