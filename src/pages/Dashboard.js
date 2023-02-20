import AdminDashboard from '../components/AdminDashboard.js';
import {useEffect, useState, Fragment,useContext} from 'react'
import {Table,Container, Button,Row,Col} from 'react-bootstrap';
import UserContext from '../UserContext.js';
import {useNavigate , Link, Navigate} from 'react-router-dom'
import Swal from 'sweetalert2';

export default function Dashboard(){
	
 const [products, setProducts] = useState([]);
 const {user, setUser} = useContext(UserContext);
 const [isAdmin, setIsAdmin] = useState(false);
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

 /*useEffect(()=>{
		fetch(`${process.env.REACT_APP_ECOM_API}/user/details`,{
			headers:{
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		}).then(result => result.json())
		.then(data =>{
			setIsAdmin(data.isAdmin)
		})
	},[])*/

 


	return(
		// isAdmin ?
		<Fragment>
		<Container fluid>
		<h1 className="text-center mt-3">Admin Dashboard</h1>
		<Row className = "justify-content-center mx-auto mt-3">
		<Col md="auto">
		<Button as = {Link} to = "/addproduct">Add Products</Button>
		</Col>
		<Col md="auto">
		<Button>View All Orders</Button>
		</Col>
		</Row>		  
	      {products}
		</Container>
		</Fragment>
		// :
		// <Navigate to = "/login"/>
		
		
		
		

		)
}

