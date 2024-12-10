import React from 'react';

import { BaseLayout } from '../../shared/layouts/BaseLayout';
import { ContainerCard } from '../components/ContainerCard';
import { LoginForm } from './components/LoginForm';


export const LoginPage = () => {
    return (
        <BaseLayout>
            <ContainerCard 
                title='Essa área requer autenticação!'
                text='Insira a baixo suas credenciais ↴'>
                <LoginForm/>
            </ContainerCard>
        </BaseLayout>
    );
}