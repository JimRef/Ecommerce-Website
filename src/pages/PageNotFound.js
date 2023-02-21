import {Fragment} from 'react';
import {Container, Row,Col} from 'react-bootstrap';
import {Link} from 'react-router-dom'

export default function PageNotFound() {
	return(
		<Container fluid>
		<Row className="justify-content-center align-items-center">
		<Col className="text-center">
		<h1>Page Not Found</h1>
		<img  src="https://i.ibb.co/qyrDDhb/patiently-waiting.gif"/>
		<p >Go back to the <Link as = {Link} to ="/">homepage</Link></p>
		</Col>
		</Row>
		</Container>
		)
}
