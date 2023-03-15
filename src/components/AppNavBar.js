import {Container, Row, Col, Nav, Navbar} from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';
import {Fragment, useContext} from 'react';
import UserContext from '../UserContext.js';


export default function AppNavBar(){
	const {user} = useContext(UserContext)
	



	return(
		<Container fluid>
		<Row>			
			<Navbar className="Nav" expand="lg">
			
				<Col md={{offset: 1}}>
				<Navbar.Brand as = {Link} to = {user && user.isAdmin ? '/admindashboard': '/'}>NyaPee
				{/* <img
				className="logo" 
				src="https://i.ibb.co/Bzsr40T/Rose-Gold-Photography-Circle-Logo.png"
				alt='mylogo'
				/> */}
				</Navbar.Brand>
				</Col>
			
				<Col>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
			
			
					<Nav className="ms-auto" >			

					{
						user && user.isAdmin ?
						<Fragment>
						<Nav.Link as = {NavLink} to = "/admindashboard">Dashboard</Nav.Link>
						
						</Fragment>
						
						:
						<Fragment>
						<Nav.Link as = {NavLink} to = "/">Home</Nav.Link>
						<Nav.Link as = {NavLink} to = "/product">Products</Nav.Link>
						
						</Fragment>
					}
					{
						user && !user.isAdmin ?
						<Nav.Link as = {NavLink} to = "/myorders">My Order's</Nav.Link>
						:
						null
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
				</Col>
				
			</Navbar>
			</Row>
		</Container>
			
			

		    
		    
		)
}