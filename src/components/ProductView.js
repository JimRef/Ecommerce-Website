import {useState, useEffect} from 'react';
import {Container,Row, Col, Card, Button} from 'react-bootstrap';
import {useParams, useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';


export default function ProductView(){
	const [productName, setName] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');
	const [quantity, setQuantity] = useState(1);
	const {productId} = useParams();
	const navigate = useNavigate();

	const addQuantity = () => setQuantity(quantity+1);
	const minusQuantity = () => {
		if (quantity > 1) {
			setQuantity(quantity-1)
		}
	}

	useEffect(()=>{
		fetch(`${process.env.REACT_APP_ECOM_API}/product/singleproduct/${productId}`)
		.then(result => result.json())
		.then(data => {
			setName(data.productName);
			setDescription(data.description);
			setPrice(data.price);
		})
	}, [productId])

	

	const order = (id) =>{
		fetch(`${process.env.REACT_APP_ECOM_API}/order/${id}`,{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('token')}`
			},
			body: JSON.stringify({
				quantity: quantity
			})
		}).then(result => result.json())
		.then(data => {
			if (data === false) {
				Swal.fire({
					title: "Order Unsccessfull",
					icon: "error",
					text: "Please try again"
				})
			} else {
				Swal.fire({
					title: "Order Successfull",
					icon: "success",
					text: "Thank you for your purchase"
				})
				navigate("/product")
			}
		})
	}


	return(
			<Container fluid className="mt-5">
			   	<Row>
			        <Col lg={{ span: 6, offset: 3 }}>
			            <Card>
			            <Card.Body className="text-center">
			            	<Card.Title>{productName}</Card.Title>
			            	<Card.Subtitle>Description:</Card.Subtitle>
			            	<Card.Text>{description}</Card.Text>
			            	<Card.Subtitle>Price:</Card.Subtitle>
			           	 	<Card.Text>PhP {price}</Card.Text>
			            	<Card.Subtitle>Quantity</Card.Subtitle>
			            	<Row className=" mt-3 justify-content-center">
			            	<Col md="auto">
			            	<Button variant="dark" onClick = {minusQuantity}>-</Button>
			            	</Col>
			            	<Col md="auto">
			            	<Card.Text>{quantity}</Card.Text>
			            	</Col>
			            	<Col md="auto">
			            	<Button variant="dark" onClick = {addQuantity}>+</Button>
			            	</Col>
			            	<Button className="mt-3" variant="primary" onClick = {()=> order(productId)}>Checkout</Button>		            	
			            	</Row>
			            	
			            </Card.Body>        
			            </Card>
			       	</Col>
			    </Row>
			</Container>

		)
}