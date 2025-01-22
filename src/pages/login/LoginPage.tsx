import { useAuthContext } from '../../shared/contexts';
import { BaseLayout } from '../../shared/layouts/BaseLayout';
import { ContainerCard } from '../components/ContainerCard';
import { LoginForm } from './components/LoginForm';


interface ILoginPageProps {
    children: React.ReactNode;
}

export const LoginPage: React.FC<ILoginPageProps> = ({children}) => {

    const { isAuthenticated } = useAuthContext();

    if (isAuthenticated) return (
        <>{children}</>
    )

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