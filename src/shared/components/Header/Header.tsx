import React from 'react';
import { Container,  Navbar } from 'react-bootstrap';

import Logo from '../Logo';



export const HeaderCustom = () => {
    return(
        <header>
            <Navbar expand="lg" className='bg-dark'>
                <Container className='d-flex justify-content-center'>
                    <Navbar.Brand>
                        <Logo/>
                    </Navbar.Brand>
                    {/* <Navbar.Toggle aria-controls='init-navbar' className=''/> */}
                    {/* <Navbar.Collapse id='init-navbar'> */}
                    {/* </Navbar.Collapse> */}
                </Container>
            </Navbar>
        </header>
    );
};