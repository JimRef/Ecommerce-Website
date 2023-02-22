import Carousel from 'react-bootstrap/Carousel';
import {Container, Row, Col} from 'react-bootstrap'

export default function Highlights(){
	return(
	<Container fluid className=" mt-5">
		<Row>
		<Col>	
		<Carousel variant="dark">
			
		      <Carousel.Item>
		        <img
		          className="Item d-block"
		          src="https://i.ibb.co/sJ4qXq1/Cyber-ZONE-3.png"	
		          alt="First slide"
		        />	        
		      </Carousel.Item>
		      
		      <Carousel.Item>
		        <img
		          className="Item d-block"
		          src="https://i.ibb.co/5xH6QxB/Cyber-ZONE-1.png"
		          alt="Second slide"		          
		        />		        
		      </Carousel.Item>

		      <Carousel.Item>
		        <img
		          className="Item d-block"
		          src="https://i.ibb.co/8rc9bKY/Cyber-ZONE-2.png"
		          alt="Third slide"		          	          
		        />		        
		      </Carousel.Item>
		    </Carousel>
		    </Col>
		    </Row>
		</Container>

		)
}