import React from 'react';

import { Navbar, Nav, NavItem, Stack } from 'react-bootstrap';
import CandyLogoSpinner from '../spinners/CandyLogoSpinner';
import CandyShoppingCartButton from '../shoppingcart/CandyShoppingCartButton';

const CandyNavbar: React.FC = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" fixed='top' className='mb-3'>
                <Navbar.Brand href="/" className='navbar-brand'><CandyLogoSpinner /></Navbar.Brand>
                <Nav className='me-auto'>
                    <NavItem>
                        <Nav.Link href="/produkter">GODIS</Nav.Link>
                    </NavItem>
                    <NavItem>
                        <Nav.Link href="#features">TAGGAR</Nav.Link>
                    </NavItem>
                    <NavItem>
                        <Nav.Link href="#pricing">OM OSS</Nav.Link>
                    </NavItem>
                </Nav>
                <CandyShoppingCartButton />
            </Navbar>
            <Navbar bg="dark" variant="dark" fixed='bottom'>
                <Stack className='text-light d-flex align-items-center'>
                    ALL YOUR CANDY ARE BELONG TO US!
                </Stack>
            </Navbar>
        </div>
    );
};

export default CandyNavbar;