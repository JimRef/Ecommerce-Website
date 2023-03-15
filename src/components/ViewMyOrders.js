import { useContext } from "react"
import UserContext from "../UserContext.js"

export default function ViewMyOrders ({myOrderProp}){
    const {user} = useContext(UserContext);

    const {_id,products, totalAmount, purchasedOn} = myOrderProp
    
    return (
        user ?
        
        <tbody>
            <tr>
				  <td>{_id}</td>				 
		          <td>{products[0].productId}</td>
		          <td>{products[0].quantity}</td>
		          <td>{totalAmount}</td>
		          <td>{purchasedOn}</td>
		        </tr> 
        </tbody>        
        :
        null
    )
}