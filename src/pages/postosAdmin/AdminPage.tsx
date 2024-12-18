import React from 'react';
import { BaseLayout } from '../../shared/layouts/BaseLayout';
import { FerramentasDeDetalhe, TabelaListagem } from '../../shared';


export const AdminPage = () => {
    return (
        <BaseLayout>
            <FerramentasDeDetalhe/>
            <TabelaListagem mostrarBotoes/>
        </BaseLayout>
    );
}

export default AdminPage;