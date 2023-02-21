import {Form, Button} from "react-bootstrap";
import {useState, useEffect, Fragment} from 'react';
import Swal from 'sweetalert2';
import {useNavigate} from 'react-router-dom'

export default function AddProduct(){
	const [productName, setProductName] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');
	const [isActive, setIsActive] = useState('');
	const navigate = useNavigate()

	useEffect(()=>{
		if (productName !== "" && description !== "" && price !== "") {
			setIsActive(true)
		} else {
			setIsActive(false)
		}
	},[productName,description,price])

	function addproduct(event) {
		event.preventDefault();
		fetch(`${process.env.REACT_APP_ECOM_API}/product/addproduct`,{
			method: 'POST',
			headers:{
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('token')}`
			},
			body: JSON.stringify({
				productName: productName,
				description: description,
				price: price
			})
		}).then(result => result.json())
		.then(data => {
			if (data) {
				Swal.fire({
					title: "Product Successfully Added",
					icon: "success",
					text: "You Added a New Product"
				})
				navigate("/admindashboard")
			} else {
				Swal.fire({
					title: "Something went wrong",
					icon: "error",
					text: "Error for adding a new product"
				})
			}
		})
	}

	return(
		<Form className="mt-5 mx-auto col-md-6" onSubmit = {event => addproduct(event)}>
			<h1 className="text-center mt-5">Add Product</h1>
			<Form.Group className="mb-3" controlId="formProductName">
			    <Form.Label>Product Name</Form.Label>
			    <Form.Control 
			       	type="String" 
			       	placeholder="Product Name"
			       	value = {productName}
			       	onChange = {event => setProductName(event.target.value)}
			       	required />
			</Form.Group>
			<Form.Group className="mb-3" controlId="formDescription">
			    <Form.Label>Product Description</Form.Label>
			    <Form.Control 
			       	type="String" 
			       	placeholder="Product Description"
			       	value = {description}
			       	onChange = {event => setDescription(event.target.value)}
			       	required />
			</Form.Group>
			<Form.Group className="mb-3" controlId="formPrice">
			    <Form.Label>Product Price</Form.Label>
			    <Form.Control 
			       	type="number" 
			       	placeholder="Product Price"
			       	value = {price}
			       	onChange = {event => setPrice(event.target.value)}
			       	required />
			</Form.Group>
			     {
			     	isActive ?
			     <Fragment>	
     			<Button variant="success" type="submit">
     	  		Add
     			</Button>
     			
     			</Fragment>
     			:
     			<Button variant="secondary" type="submit" disabled>
     			  Add
     			</Button>

			     }
		</Form>						
		)
}