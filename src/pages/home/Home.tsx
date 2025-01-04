import { BaseLayout } from '../../shared/layouts/BaseLayout';
import  { ButtonsInit } from './components/ButtonsInit';
import { ContainerCard } from '../components/ContainerCard';

export const Home = () => {
    return (
        <BaseLayout>
            <ContainerCard 
                title='Bem Vindo ao PostosMervil'
                text='Um sistema desenvolvido para facilitar seu acesso a nossos postos parceiros'>
                <ButtonsInit/>
            </ContainerCard>
        </BaseLayout>
    );
}
