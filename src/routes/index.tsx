import React from 'react'
import { Route, Routes } from "react-router-dom";
import { ListagemPostos, Home, LoginPage, AdminPage, DetalhePostos } from '../pages';




export const AppRoutes = () => {
    return(
        <Routes>
            <Route path='/inicio' element={<Home/>}/>


            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/adminPage' element={<AdminPage/>}/>

            <Route path='/postos' element={<ListagemPostos/>}/>
            <Route path='/postos/detalhe/:id' element={<DetalhePostos/>}/>

            <Route path='*' element={<Home/>}/>
        </Routes>
    );
}