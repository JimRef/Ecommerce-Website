import {Button, Card, Row} from 'react-bootstrap';
import {useContext} from 'react';
import UserContext from '../UserContext.js';
import {Link} from 'react-router-dom';

export default function ProductCatalog({productProp}){
	
	const {_id, productName, description, price} = productProp;	
	const {user} = useContext(UserContext);

	return(
		<Row className="">
			
				<Card className="mt-5 mx-auto col-md-4 col-10 m-1">		      
				      <Card.Body>
				        <Card.Title>{productName}</Card.Title>
				        <Card.Subtitle><strong>Description:</strong></Card.Subtitle>
				        <Card.Text>{description}</Card.Text>
				        <Card.Subtitle><strong>Price:</strong></Card.Subtitle>
				        <Card.Text>{price}</Card.Text>
				        
				        {
				        	user ?
				        	<Button as = {Link} to = {`/singleproduct/${_id}`} variant="primary">See more details</Button>
				        	:
				        	<Button as = {Link} to = "/login" variant="primary">Login</Button>
				        }

				      </Card.Body>
				</Card>
			
		</Row>
		)
}