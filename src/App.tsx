import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { AuthProvider } from './shared/contexts';
import { LoginPage } from './pages';



export const App = () => {
  return (
    <AuthProvider>
      <LoginPage>
        <BrowserRouter>
          <AppRoutes/>
        </BrowserRouter>
      </LoginPage>
    </AuthProvider>
  );
}

