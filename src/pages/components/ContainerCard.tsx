import React from 'react';
import { Container } from 'react-bootstrap';


interface Iprops {
    children: React.ReactNode;
    title?: string;
    text?: string;
}


export const ContainerCard: React.FC<Iprops> = ({children, title, text}) => {
    return (
        <Container className='d-flex flex-column gap-4 justify-content-center min-vh-100 text-center shadow-effect'>
            <span className='text-light fs-1'>
                {title}
                <br/>
                <span className='fs-3'>
                {text}
                </span>
            </span>
            {children}
        </Container>
    );
}
