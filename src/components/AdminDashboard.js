import {Table,Container, Button} from 'react-bootstrap';
import {useContext, useEffect, useState} from 'react'
import {Link, Navigate} from 'react-router-dom'
import UserContext from '../UserContext.js';

export default function AdminDashboard({propProduct}){
	
	const {_id,productName, description, price, isActive} = propProduct;
	// const [productNames, setProductNames] = useState('');
	// const [descriptions, setDescriptions] = useState('');
	// const [prices, setPrices] = useState('');
	const {user, setUser} = useContext(UserContext);
	const [Active, setActive] = useState('');
	// const {productId} = useParams();

	
useEffect(()=> {
		if (isActive === true) {
			setActive("Available")
		} else {
			setActive("Not Available")
		}
	},[])


	

	return(
		
		<Container>
		
		<Table striped bordered hover  className = "mt-3">
		<thead className="bg-dark text-light">
	        <tr>
	          <th>Product Name</th>
	          <th>Description</th>
	          <th>Price</th>
	          <th>Availability</th>
	          <th>Actions</th>
	        </tr>	        
	      </thead>
			<tbody>
	      		<tr>
				  <td>{productName}</td>
		          <td>{description}</td>
		          <td>{price}</td>
		          <td>{Active}</td>
		          <td>
		          <Button as = {Link} to = {`/update/${_id}`}>
		          Update
		          </Button>
		          {

		          isActive ?		          	
		          <Button>
		          Disable
		          </Button>
		          :
		          <Button>
		          Enable
		          </Button>
		          }
		          
		          </td>
	      		</tr>
	       </tbody>
		    </Table>
		</Container>    
		)
}