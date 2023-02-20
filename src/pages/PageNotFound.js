import {Fragment} from 'react';
import {Link} from 'react-router-dom'

export default function PageNotFound() {
	return(
		<Fragment>
		<h1>Page Not Found</h1>
		<p >Go back to the <Link as = {Link} to ="/">homepage</Link></p>
		</Fragment>
		)
}
