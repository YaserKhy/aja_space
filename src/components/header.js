import React, { useEffect, useState } from 'react'
import { Navbar, Nav, Image } from 'react-bootstrap';

function Header() {

	const [navColor, setNavColor] = useState(false);

	useEffect(() => { window.addEventListener('scroll', () => window.scrollY === 0 ? setNavColor(false) : setNavColor(true)) });

	return (
		<Navbar sticky='top' className={`${navColor ? 'py-2' : 'py-4'} justify-content-around`} style={{padding:'24px 150px', transition: '0.3s ease-in-out', scrollBehavior: 'smooth', backgroundImage: navColor ? 'linear-gradient(to right,#0C0829,#0A0050)' : null }}>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
			<Nav className='d-flex flex-row-reverse justify-content-center'>
				<Nav.Link className='navlink px-3' href='#home'>الرئيسية</Nav.Link>
				<Nav.Link className='navlink px-3' href='#about'>من نحن</Nav.Link>
				<Nav.Link className='navlink px-3' href='#serv'>خدماتنا</Nav.Link>
				<Nav.Link className='navlink px-3' href='#ev'>فعالياتنا</Nav.Link>
				<Nav.Link className='navlink px-3' href='#com'>مجتمعنا</Nav.Link>
				<Nav.Link className='navlink px-3' href='#cli'>عملاءنا</Nav.Link>
				<Nav.Link className='navlink px-3' href='#contact'>تواصل معنا</Nav.Link>
			</Nav>
			</Navbar.Collapse>
			<Navbar.Brand className='d-flex px-3'><Image src={`${process.env.PUBLIC_URL}/images/rect_logo.png`} width={280} /></Navbar.Brand>
		</Navbar>
	)
}

export default Header