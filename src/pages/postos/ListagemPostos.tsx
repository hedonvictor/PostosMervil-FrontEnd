import React from 'react';
import { HeaderCustom } from '../../shared';
import SearchBar from './components/SearchBar';
import { BaseLayout } from '../../shared/layouts/BaseLayout';

export const ListagemPostos = () => {
    const handleSearch = (query: string) => {
        console.log(`Procurando por: ${query}`);
        // Implemente a lógica de busca aqui
      };
    return (
        <>
        <HeaderCustom/>
        <BaseLayout>
            <SearchBar placeholder="Digite sua busca..." onSearch={handleSearch}/>
        </BaseLayout>
        </>
    );
};