import React, {Component} from "react"
import { NavLink } from 'react-router-dom'

class TopBar extends Component {
	render(){
		return (
			<header className='topbar'>
				<h1>Sample</h1>
				<ul>
					<li>
						<NavLink to='/' exact activeClassName='active'>
							Dashboard
						</NavLink>
					</li>
					<li>
						<NavLink to='/new' exact activeClassName='active'>
							Create Voucher
						</NavLink>
					</li>
				</ul>
			</header>
		)
	}
}

export default TopBar