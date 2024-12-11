import React from 'react';

// import SearchBar from './components/SearchBar';
import { BaseLayout } from '../../shared/layouts/BaseLayout';
import FerramentasDeListagem from '../../shared/components/barraDeFerramentas/FerramentasDeListagem';

export const ListagemPostos = () => {


    return (
        <BaseLayout>
            <FerramentasDeListagem/>
        </BaseLayout>
    );
};