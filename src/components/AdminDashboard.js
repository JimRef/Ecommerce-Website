import {Row,Col, Button} from 'react-bootstrap';
import {useContext, useEffect, useState, Fragment} from 'react'
import {Link, Navigate,useParams} from 'react-router-dom'
import UserContext from '../UserContext.js';
import Swal from 'sweetalert2';

export default function AdminDashboard({propProduct}){
	
	const {_id,productName, description, price, isActive} = propProduct;
	// const [productNames, setProductNames] = useState('');
	// const [descriptions, setDescriptions] = useState('');
	// const [prices, setPrices] = useState('');
	const {user, setUser} = useContext(UserContext);
	const [Active, setActive] = useState('');
	// const [archive, setArchive] = useState('');
	// const {productId} = useParams();

	
useEffect(()=> {
		if (isActive === true) {
			setActive("Available")
		} else {
			setActive("Not Available")
		}
},[isActive])



	


	

	return(
		
		
		
			<tbody>
	      		<tr>
				  <td>{productName}</td>
		          <td>{description}</td>
		          <td>{price}</td>
		          <td>{Active}</td>
		          
		          <td>
		          <Row>
		          
		          <Button as = {Link} to = {`/update/${_id}`} className="m-1">
		          Update
		          </Button>
		          {

		          isActive ?
		          		          	
		          <Button as = {Link} to = {`/archive/${_id}`} className="m-1">
		          Disable
		          </Button>		          
		          
		          :
		          <Button as = {Link} to = {`/archive/${_id}`} className="m-1">
		          Enable
		          </Button>
		          }

		          </Row>
		          </td>

	      		</tr>
	       </tbody>
		        
		)
}