import {Button, Card, Row, Container, Col} from 'react-bootstrap';
import {useContext} from 'react';
import UserContext from '../UserContext.js';
import {Link, Navigate} from 'react-router-dom';

export default function ProductCatalog({productProp}){
	
	const {_id, productName, description, price} = productProp;	
	const {user} = useContext(UserContext);

	return(
		user && user.isAdmin ?
		<Navigate to = "*"/>
		:
		<Container fluid>
		<Row className="justify-content-center mx-auto">
			
				<Card className="mt-5 mx-auto col-md-4 col-10 m-1">		      
				      <Card.Body>
				        <Card.Title id="cardtitle">{productName}</Card.Title>
				        <Card.Subtitle id="cardsubtitle"><strong>Description:</strong></Card.Subtitle>
				        <Card.Text>{description}</Card.Text>
				        <Card.Subtitle id="cardsubtitle"><strong>Price:</strong></Card.Subtitle>
				        <Card.Text>{price}</Card.Text>
				        
				        {
				        	user ?
				        	<Button as = {Link} to = {`/singleproduct/${_id}`} id="Cardbutton">See more details</Button>
				        	:
				        	<Button as = {Link} to = "/login" id="Cardbutton">Login</Button>
				        }

				      </Card.Body>
				</Card>
			
		</Row>
		</Container>
		)
}