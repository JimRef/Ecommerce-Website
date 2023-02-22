
import './App.css';
import AppNavBar from './components/AppNavBar.js'
import Home from './pages/Home.js'
import {useEffect, useState} from 'react'
import Register from './pages/Register.js'
import PageNotFound from './pages/PageNotFound.js'
import Login from './pages/Login.js';
import Logout from './pages/Logout.js';
import Products from './pages/Products.js';
import ProductView from './components/ProductView.js';
import Dashboard from './pages/Dashboard.js';
import AddProduct from './pages/AddProduct.js'
import UpdateProduct from './pages/Updateproduct.js'
import ArchiveProduct from './pages/ArchiveProduct.js'
import ViewAllOrder from './pages/ViewAllOrder.js'


import {UserProvider} from './UserContext.js'
import { BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';


function App() {

const [user, setUser] = useState();


const unSetUser = ()=> {
    localStorage.clear();
    
  }



/*useEffect(()=>{
  console.log(user)
}, [user])*/

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
        isAdmin: data.isAdmin
      })
    } else {
      setUser(null)
    }
  })
},[])




  return (
    <UserProvider value = {{user, setUser, unSetUser}}>
    <Router>    
      <AppNavBar/>    
        <Routes>

            <Route path="*" element ={<PageNotFound/>}/>
            <Route path="/" element ={<Home/>}/>
            <Route path="/register" element ={<Register/>}/>
            <Route path="/login" element ={<Login/>}/>
            <Route path="/logout" element ={<Logout/>}/>
            <Route path="/product" element ={<Products/>}/>
            <Route path="/admindashboard" element ={<Dashboard/>}/>
            <Route path="/addproduct" element ={<AddProduct/>}/>
            <Route path="/viewallorder" element ={<ViewAllOrder/>}/>

            <Route path="/singleproduct/:productId" element ={<ProductView/>}/>
            <Route path="/update/:productId" element ={<UpdateProduct/>}/>
            <Route path="/archive/:productId" element ={<ArchiveProduct/>}/>

        </Routes>
    </Router>
    </UserProvider>
  );
}

export default App;
