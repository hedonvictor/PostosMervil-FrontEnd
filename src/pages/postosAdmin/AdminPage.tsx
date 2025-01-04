import { BaseLayout } from '../../shared/layouts/BaseLayout';
import { TabelaListagem } from '../../shared';
import { Button } from 'react-bootstrap';

import { useAuthContext } from '../../shared/contexts';
import { useNavigate } from 'react-router-dom';

export const AdminPage = () => {
    const {logout} = useAuthContext();
    const navigate = useNavigate();

    const handleLogout = () => {   

        logout();
        navigate('/');
        window.location.reload();
    }

    return (
        <BaseLayout>
            <TabelaListagem 
                mostrarBotoes 
                mostrarBotaoNovo
            />
            <Button variant='danger' onClick={handleLogout}>
                Sair
            </Button>
        </BaseLayout>
    );
}

export default AdminPage;