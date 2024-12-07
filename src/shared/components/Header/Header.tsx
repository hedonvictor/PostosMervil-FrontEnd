import React from 'react';
import { Button, Container, Nav, Navbar, NavItem } from 'react-bootstrap';


export const HeaderCustom = () => {
    return(
        <header>
            <Navbar expand="lg" className='text-center bg-dark'>
                <Container>
                    <Navbar.Brand>
                        teste
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='init-navbar' className=''/>
                    <Navbar.Collapse id='init-navbar'>
                        <Nav>
                            <ul>
                                <li>
                                <Button>
                                    login
                                </Button>
                                </li>
                            </ul>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};