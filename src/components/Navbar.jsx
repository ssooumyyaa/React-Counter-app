import React from 'react';
//stateless function
const Navbar = ({value}) => {
	return (
		<nav className="navbar navbar-light bg-light">
			<a className="navbar-brand" href="#">
				Total {value} items in your cart
			</a>
		</nav>
	);
};

export default Navbar;
