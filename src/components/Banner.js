import UserContext from '../UserContext.js'
import {useContext, useEffect} from 'react'
import {Button, Row, Col, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'


export default function Banner(){
	const {user, setUser} = useContext(UserContext);

useEffect(()=>{

  fetch(`${process.env.REACT_APP_ECOM_API}/user/details`, {
    headers:{
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }).then(result => result.json())
  .then(data =>{
    // console.log(data)
    if (localStorage.getItem('token')!==null) {
      setUser({
        id: data._id,
        firstName: data.firstName,
        isAdmin: data.isAdmin
      })
    } else {
      setUser(null)
    }
  })
},[])

	return(

		<Container fluid>
		<Row className="justify-content-center text-center mt-5">
		{
			user ?
			<h1 id="bannertxt">Welcome! to our website {user.firstName}</h1>
			:
			<h1 id="bannertxt">Welcome! to our website</h1>
		}
		
		<Col className="m-2 p-1">
		<Button as = {Link} to = "/product">
		See about our products
		</Button>
		</Col>
		</Row>
		</Container>
		)
}