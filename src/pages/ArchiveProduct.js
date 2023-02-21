import {useState, useEffect,Fragment} from 'react'
import {useParams, useNavigate,Navigate} from 'react-router-dom';
import Swal from 'sweetalert2';
import {Button, Card, Container} from 'react-bootstrap';


export default function ArchiveProduct(){
	// const [productName, setProductName] = useState('');
	// const [description, setDescription] = useState('');
	// const [price, setPrice] = useState('');


	const [archive, setArchive] = useState()
	const {productId, isActive} = useParams();
	const navigate = useNavigate()









	
function archiveProduct(){
	fetch(`http://localhost:4000/product/singleproduct/${productId}`)
		.then(result => result.json())
		.then(data => {			
			if (data.isActive === true) {
				setArchive(false)			
			  
			} else {
				setArchive(true)

			}
		})

		fetch(`http://localhost:4000/product/archive/${productId}`,{
			method: 'PUT',
			headers:{
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('token')}`
			},
			body: JSON.stringify({				
				isActive: archive
			})
		})
}

useEffect(()=>{
	setTimeout(()=> {
		navigate('/admindashboard')
	},3000)
	
},[])

		
		// <Navigate to = "/admindashboard"/>

	

		// event.preventDefault()

		
	

// archiveProduct()

	return(
	// <Container>	
	// <Card className="text-center mt-5">
  //     <Card.Header>Do you want to archive this product</Card.Header>
  //     <Card.Body>
  //       <Card.Title>{productName}</Card.Title>
  //       <Card.Text> {description} </Card.Text>
  //       <Card.Text> PHP {price} </Card.Text>

  //       <Button variant="primary" className="m-2" onClick={()=>archiveProduct(productId)}>Yes</Button>

  //       <Button as = {Link} to = "/admindashboard "variant="primary">No</Button>
  //     </Card.Body>
      
  //   </Card>	
  //   </Container>
		archiveProduct()
		
		
		

		
		)
}