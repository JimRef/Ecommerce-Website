import UserContext from '../UserContext.js'
import {useContext} from 'react'
import {Navigate} from "react-router-dom"

export default function ViewOrder({orderProp}){

	const {user} = useContext(UserContext);

	const {_id, userId,products, productId,quantity, totalAmount, purchasedOn} = orderProp

	return(
		user && user.isAdmin ?

		<tbody>
	      		<tr>
				  <td>{_id}</td>
				  <td>{userId}</td>
		          <td>{products[0].productId}</td>
		          <td>{products[0].quantity}</td>
		          <td>{totalAmount}</td>
		          <td>{purchasedOn}</td>
		        </tr>  
		</tbody>
		:
		<Navigate to = "*"/>
				          
		)
}