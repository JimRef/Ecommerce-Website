import {Navigate} from 'react-router-dom';
import {useEffect, useContext} from 'react';
import UserContext from '../UserContext.js';

export default function Logout(){
	const {unSetUser, setUser} = useContext(UserContext)

	useEffect(()=>{
		unSetUser();
		setUser(null)
	},[])

	return(
		<Navigate to = "/login"/>
		)
}