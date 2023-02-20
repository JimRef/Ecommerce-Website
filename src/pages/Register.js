import {Button, Form, Container, Row} from 'react-bootstrap';
import {Fragment, useState, useEffect, useContext} from 'react';
import {Navigate, useNavigate} from 'react-router-dom';
import UserContext from '../UserContext.js'
import Swal from 'sweetalert2';

export default function Register(){
	
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [mobileNo, setMobileNo] = useState('');
	const [isActive, setIsActive] = useState(false);
	const {user, setUser} = useContext(UserContext);
	const navigate = useNavigate()

	useEffect(()=>{
		if (firstName !== "" && lastName !== "" && email !== "" && mobileNo !== "" && password !== "" && confirmPassword !== "" && password === confirmPassword) {

			setIsActive(true);
		} else {
			setIsActive(false)
		}
	}, [firstName, lastName, email, password, confirmPassword, mobileNo])

	function register(event){
		event.preventDefault();
		// console.log(`${process.env.REACT_APP_ECOM_API}`)
		fetch(`${process.env.REACT_APP_ECOM_API}/user/register`,{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				firstName: firstName,
				lastName: lastName,
				email: email,
				mobileNo: mobileNo,
				password: password
			})
		}).then(result => result.json())
		.then(data => {
			if (data) {
				Swal.fire({
					title: "Registration Successfull",
					icon: "success",
					text: "You may now Login"
				})
				navigate("/")
			} else {
				Swal.fire({
					title: "Registration Unsuccessfull",
					icon: "error",
					text: "Please try again"
				})
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
				<h1 className="text-center mt-5">Register</h1>
					<Form className="mt-5 mx-auto col-md-6" onSubmit = {event => register(event)}>

						<Form.Group className="mb-3" controlId="formFirstName">
						    <Form.Label>First Name</Form.Label>
						    <Form.Control 
						       	type="String" 
						       	placeholder="First Name"
						       	value = {firstName}
						       	onChange = {event => setFirstName(event.target.value)}
						       	required />
						</Form.Group>

						     
						<Form.Group className="mb-3" controlId="formLastName">
						    <Form.Label>Last Name</Form.Label>
						    <Form.Control 
						       	type="String" 
						       	placeholder="Last Name"
						       	value = {lastName}
						       	onChange = {event => setLastName(event.target.value)}
						       	required />
						    </Form.Group>

						     <Form.Group className="mb-3" controlId="formEmail">
						       <Form.Label>Email</Form.Label>
						       <Form.Control 
						       		type="email" 
						       		placeholder="Email"
						       		value = {email}
						       		onChange = {event => setEmail(event.target.value)}
						       		required />
						       	<Form.Text className="text-muted">
			         				We'll never share your email with anyone else.
			       				</Form.Text>	
						     </Form.Group>

						     <Form.Group className="mb-3" controlId="formMobileNo">
						       <Form.Label>Mobile Number</Form.Label>
						       <Form.Control 
						       		type="string" 
						       		placeholder="Mobile Number"
						       		value = {mobileNo}
						       		onChange = {event => setMobileNo(event.target.value)}
						       		required />
						     </Form.Group>

						     <Form.Group className="mb-3" controlId="formPassword">
						       <Form.Label>Password</Form.Label>
						       <Form.Control 
						       		type="password" 
						       		placeholder="Password"
						       		value = {password}
						       		onChange = {event => setPassword(event.target.value)}
						       		required />
						     </Form.Group>

						     <Form.Group className="mb-3" controlId="formConfirmPassword">
						       <Form.Label>Confirm Password</Form.Label>
						       <Form.Control 
						       		type="password" 
						       		placeholder="Confirm Password"
						       		value = {confirmPassword}
						       		onChange = {event => setConfirmPassword(event.target.value)}
						       		required />
						     </Form.Group>

						     {
						     	isActive ?
			     			<Button variant="primary" type="submit">
			     	  		Submit
			     			</Button>
			     			:
			     			<Button variant="secondary" type="submit" disabled>
			     			  Submit
			     			</Button>

						     }
				</Form>
				</Row>
			</Container>
		</Fragment>
		)
}