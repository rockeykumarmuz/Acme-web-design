import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
	return (
		<>
			<header>
				<div className='container'>
					<div id='branding'>
						<h1>
							<span className='highlight'>Acme</span> Web Design
						</h1>
					</div>
					<nav>
						<ul>
							<li>
								{/* <a href='#'>Home</a> */}
								<NavLink to='/'>Home</NavLink>
							</li>
							<li>
								{/* <a href='./about.html'>About</a> */}
								<NavLink to='/about'>About</NavLink>
							</li>
							<li>
								{/* <a href='./services.html'>Services</a> */}
								<NavLink to='/services'>Service</NavLink>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		</>
	)
}

export default Header
