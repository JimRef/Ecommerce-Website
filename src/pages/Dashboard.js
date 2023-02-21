import AdminDashboard from '../components/AdminDashboard.js';
import {useEffect, useState, Fragment,useContext} from 'react'
import {Table,Container, Button,Row,Col} from 'react-bootstrap';
import UserContext from '../UserContext.js';
import {useNavigate , Link, Navigate} from 'react-router-dom'
import Swal from 'sweetalert2';

export default function Dashboard(){
	
 const [products, setProducts] = useState([]);
 const {user, setUser} = useContext(UserContext);
 const [isAdmin, setIsAdmin] = useState();
 const navigate = useNavigate();
// console.log(user)

 useEffect(()=>{
 	fetch(`${process.env.REACT_APP_ECOM_API}/product/allProduct`,{
 		headers:{
 			Authorization: `Bearer ${localStorage.getItem('token')}`
 		}
 	})
 	.then(result => result.json())
 	.then(data => {
 		console.log(data)
 		setProducts(data.map(product =>{

 			return(
 				<AdminDashboard key = {product._id} propProduct={product}/>
 				)
 		}))
 	})
 },[])


 


	return(
		user && user.isAdmin ?
		
		<Fragment>
		<Container>
		<h1 className="text-center mt-3">Admin Dashboard</h1>
		<Row className = "justify-content-center mx-auto mt-3">
		<Col md="auto" xs="auto">
		<Button as = {Link} to = "/addproduct" id="adminbutton">Add Products</Button>
		</Col>
		<Col md="auto" xs="auto">
		<Button id="adminbutton">View All Orders</Button>
		</Col>
		</Row>
		<Row>
		<Col>
		<Table  className="mt-3 text-center">
		<thead className="mt-3 Nav ">
	        <tr >
	          <th>Product Name</th>
	          <th>Description</th>
	          <th>Price</th>
	          <th>Availability</th>
	          <th>Actions</th>
	        </tr>	        	        
	      </thead>
	      {products}
	    </Table>
	    </Col>
	    </Row>  		  
	      
		</Container>
		</Fragment>
		:
		<Navigate to = "*"/>
		
		

		)
}

