import { BaseLayout } from '../../shared/layouts/BaseLayout';
import { TabelaListagem } from '../../shared';


export const AdminPage = () => {

    return (
        <BaseLayout>
            <TabelaListagem 
                mostrarBotoes 
                mostrarBotaoNovo
                mostrarBotaoSair
            />
        </BaseLayout>
    );
}

export default AdminPage;