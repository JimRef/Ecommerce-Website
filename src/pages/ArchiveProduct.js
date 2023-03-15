import {useEffect} from 'react'
import {useParams,Navigate} from 'react-router-dom';




export default function ArchiveProduct(){


	
	
	const {productId} = useParams();
	useEffect(()=>{
		fetch(`${process.env.REACT_APP_ECOM_API}/product/archive/${productId}`,{
			method: 'PUT',
			headers:{
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
			
		})

	},[])
	
	
		
		

	return(

		<Navigate to = "/admindashboard"/>

		)
}