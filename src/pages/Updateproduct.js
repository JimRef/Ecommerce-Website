import {useState, useEffect} from 'react';
import {Form, Button} from 'react-bootstrap';
import {useParams, useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';


export default function UpdateProduct(){
	
	const [productName, setProductName] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');
	const {productId} = useParams();
	const navigate = useNavigate();

	useEffect(()=>{
		fetch(`${process.env.REACT_APP_ECOM_API}/product/singleproduct/${productId}`)
		.then(result => result.json())
		.then(data => {
			setProductName(data.productName);
			setDescription(data.description);
			setPrice(data.price);
		})
	},[productId])

	

	function updateProduct (event) {
		event.preventDefault();

		fetch(`${process.env.REACT_APP_ECOM_API}/product/update/${productId}`,{
			method: 'PUT',
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
					title: "Updated Successfully",
					icon: "success",
					text: "You Successfully Updated This Product"
				})
				navigate("/admindashboard")
			} else {
				Swal.fire({
					title: "Update Unsuccessfully",
					icon: "error",
					text: "There is an error Updating This Product"
				})
			}
		})
	}






	return(
		<Form className="mt-5 mx-auto col-md-6" onSubmit = {event => updateProduct(event)}>
			<h1 className="text-center mt-5">Edit Product</h1>
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
			<Button type="submit">Update Product</Button>

		</Form>	
		)
}