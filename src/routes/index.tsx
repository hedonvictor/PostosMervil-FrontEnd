import React from 'react'
import { Route, Routes } from "react-router-dom";
import { ListagemPostos, Home, LoginPage, AdminPage, DetalhePostos } from '../pages';
import { useAuthContext } from '../shared/contexts';


type IPrivateProps = {
    Item: React.ComponentType;
} 


const Private: React.FC<IPrivateProps> = ({Item}) => {
    const {isAuthenticated} = useAuthContext();

   // console.log("Estado de autenticação no Private:", isAuthenticated);

    return isAuthenticated ? <Item/> : <LoginPage/>
}


export const AppRoutes = () => {
    return(
        <Routes>
            <Route path='/adminPage' element={<Private Item={AdminPage}/>}/>
            <Route path='/adminPage/detalhe/:id' element={<Private Item={DetalhePostos}/>}/>


            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/postos' element={<ListagemPostos/>}/>

            <Route path='*' element={<Home/>}/>
        </Routes>
    );
}