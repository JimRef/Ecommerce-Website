import {Fragment, useState, useEffect} from 'react'
import ProductCatalog from '../components/ProductCatalog.js'

export default function Product(){
	const [products, setProducts] = useState([]);

	useEffect(()=> {
		fetch(`${process.env.REACT_APP_ECOM_API}/product/allactiveproduct`)
		.then(result => result.json())
		.then(data =>{
			
			setProducts(data.map(product =>{
				return(
					<ProductCatalog key={product._id} productProp={product}/>
					)
			}))
		})	
		
	},[])





	return(
		<Fragment>
		<h1 className="text-center mt-3">Products</h1>
		{products}
		</Fragment>
		)
}