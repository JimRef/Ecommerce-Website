

export default function ViewOrder({orderProp}){
	const {_id, userId,products, productId,quantity, totalAmount, purchaseOn} = orderProp

	return(
		<tbody>
	      		<tr>
				  <td>{_id}</td>
				  <td>{userId}</td>
		          <td>{products[0].productId}</td>
		          <td>{products[0].quantity}</td>
		          <td>{totalAmount}</td>
		          <td>{purchaseOn[0]}</td>
		        </tr>  
		</tbody>		          
		)
}