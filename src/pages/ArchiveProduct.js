import {useState, useEffect} from 'react'
import {useParams,Navigate} from 'react-router-dom';
import Swal from 'sweetalert2';



export default function ArchiveProduct(){


	
	const [archive, setArchive] = useState()
	const {productId, isActive} = useParams();

		fetch(`${process.env.REACT_APP_ECOM_API}/product/archive/${productId}`,{
			method: 'PUT',
			headers:{
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
			
		})
		

	return(

		<Navigate to = "/admindashboard"/>

		)
}