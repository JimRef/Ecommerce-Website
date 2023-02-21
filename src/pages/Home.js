import Highlights from '../components/Highlights.js'
import Banner from '../components/Banner.js'
import {Fragment, useContext} from 'react'
import {Navigate} from 'react-router-dom'
import UserContext from '../UserContext.js'


export default function Home(){
	const {user} = useContext(UserContext);

	return(
		user && user.isAdmin ?
		<Navigate to = "*"/>
		:
		<Fragment>
		<Highlights/>
		<Banner/>
		</Fragment>
		)
}