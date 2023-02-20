import {Container, Nav, Navbar} from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';
import {Fragment, useContext, useState,useEffect} from 'react';
import UserContext from '../UserContext.js';


export default function AppNavBar(){
	const {user, setUser} = useContext(UserContext)
	const [isAdmin,setIsAdmin] = useState('');

	// useEffect(()=>{
	// 	fetch(`${process.env.REACT_APP_ECOM_API}/user/details`,{
	// 		headers:{
	// 			Authorization: `Bearer ${localStorage.getItem('token')}`
	// 		}
	// 	}).then(result => result.json())
	// 	.then(data =>{
	// 		setIsAdmin(data.isAdmin)			
	// 	})
	// },[])

	return(
		<Navbar className="Nav" expand="lg">
		      <Container>
		        {/*<Navbar.Brand as = {Link} to = "/">Gadget Shop</Navbar.Brand>*/}
		        <Navbar.Brand as = {Link} to = "/">
		        <img
		        className="logo" 
		        src="https://i.ibb.co/Bzsr40T/Rose-Gold-Photography-Circle-Logo.png"
		        />
		        </Navbar.Brand>
		        
		        <Navbar.Toggle aria-controls="basic-navbar-nav" />
		        <Navbar.Collapse id="basic-navbar-nav">
		          <Nav className="ms-auto">
		          <Nav.Link as = {NavLink} to = "/">Home</Nav.Link>		            
		          {/*<Nav.Link as = {NavLink} to = "/product">Products</Nav.Link>*/}
		          
		          {
		          	user && user.isAdmin ?
		          	<Nav.Link as = {NavLink} to = "/admindashboard">Dashboard</Nav.Link>
		          	:
		          	
		          	<Nav.Link as = {NavLink} to = "/product">Products</Nav.Link>
		          }
		            
		            {
		            	user ?
		            	<Fragment>
		            	
		            	<Nav.Link as = {NavLink} to = "/logout">Logout</Nav.Link>
		            	
		            	</Fragment>
		            	:
		            	<Fragment>
		            	
		            	<Nav.Link as = {NavLink} to = "/register">Register</Nav.Link>          
		            	<Nav.Link as = {NavLink} to = "/login">Login</Nav.Link>
		            	</Fragment>	
		            	

		            }	
		            
       
		          </Nav>
		        </Navbar.Collapse>
		      </Container>
		    </Navbar>
		)
}