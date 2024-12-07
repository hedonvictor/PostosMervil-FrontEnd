import React from 'react'
import { Route, Routes } from "react-router-dom";
import { ListagemPostos } from '../pages';
//import { Home } from '../pages/Home/Home';




export const AppRoutes = () => {
    return(
        <Routes>
            <Route path='/Inicio' element={<ListagemPostos/>}/>
            <Route path='*' element={<ListagemPostos/>}/>
        </Routes>
    );
}