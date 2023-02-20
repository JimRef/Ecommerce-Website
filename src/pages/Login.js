import {Button, Form, Container, Row} from 'react-bootstrap';
import {Fragment, useState, useEffect, useContext} from 'react';
import {Navigate, useNavigate, Link} from 'react-router-dom';
import UserContext from '../UserContext.js';
import Swal from 'sweetalert2';


export default function Login(){
	
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isActive, setIsActive] = useState(false);
	const {user, setUser} = useContext(UserContext);
	const navigate = useNavigate();
	
	

	// useEffect(()=>{
	// 	if (email !== "" && password !=="") {
	// 		setIsActive(true)
	// 	}else{
	// 		setIsActive(false)
	// 	}

	// },[email, password])
		const retrieveUserDetails = (token) =>{
		fetch(`${process.env.REACT_APP_ECOM_API}/user/details`,{
			headers:{
				Authorization: `Bearer ${token}`
			}
		}).then(result => result.json())
		.then(data =>{
			console.log(data)
			setUser({
				id: data._id,
				isAdmin: data.isAdmin
			})
		})
	}

	function login (event){
		event.preventDefault();

		fetch(`${process.env.REACT_APP_ECOM_API}/user/login`,{
			method: 'POST',
			headers:{
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: email,
				password: password
			})
		}).then(result => result.json())
		.then(data =>{
			
			console.log(data)
			if (data === false) {
				Swal.fire({
				title: "Authentication failed!",
				icon: 'error',
				text: "Please try again!"
			})
			} else if(data.isAdmin === true){
					

					localStorage.setItem('token', data.auth)
					retrieveUserDetails(localStorage.getItem('token'))

					Swal.fire({
						title: "Authentication successfull",
						icon: "success",
						text: `Welcome to our Website`
					})

					navigate("/admindashboard")
		
			} else {
				localStorage.setItem('token', data.auth)
					retrieveUserDetails(localStorage.getItem('token'))

					Swal.fire({
						title: "Authentication successfull",
						icon: "success",
						text: `Welcome to our Website`
					})

					navigate("/")
			}
		})
	}

	







	return(
		user ?
		<Navigate to ="/*"/>
		:
		<Fragment>
			<Container>
				<Row>
					<h1 className="text-center mt-5">Login</h1>
					<Form className="mt-5 mx-auto col-md-6" onSubmit = {event => login(event)}>
					     <Form.Group className="mb-3" controlId="formBasicEmail">
					       <Form.Label>Email address</Form.Label>
					       <Form.Control 
					       		type="email" 
					       		placeholder="Enter email"
					       		value = {email}
					       		onChange = {event => setEmail(event.target.value)}
					       		required />
					       <Form.Text className="text-muted">
					         We'll never share your email with anyone else.
					       </Form.Text>
					     </Form.Group>

					     <Form.Group className="mb-3" controlId="formBasicPassword">
					       <Form.Label>Password</Form.Label>
					       <Form.Control 
					       		type="password" 
					       		placeholder="Password"
					       		value = {password}
					       		onChange = {event => setPassword(event.target.value)}
					       		required />
					       	<Form.Text className="text-muted">
					         Don't have an account? <Link to ="/register">Register</Link>
					       </Form.Text>	
					     </Form.Group>		
					     			     
					     
					     	<Button variant="success" type="submit">
					     	  Submit
					     	</Button>
					     	
					</Form>
				</Row>	     
			</Container>		   
		</Fragment>
		)
}