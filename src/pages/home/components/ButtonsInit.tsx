import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const ButtonsInit = () => {

    const navigate = useNavigate();

    const handleClick = (path: string) => {
        navigate(path);
    }

    return (
        <Container className='p-3 gap-3 d-flex flex-column'>
            <Button variant='secondary' onClick={() => handleClick('/postos')}>
                Consultar Postos
            </Button>
            <Button variant='secondary' onClick={() => handleClick('/login')}>
                Gerenciar Postos
            </Button>
        </Container>
    );
}
