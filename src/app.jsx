import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Site from './site/site';
import Login from './app/Login/login';
import NovaConta from './app/NovaConta/novaconta';
import ResetSenha from './app/ResetSenha/resetsenha';
import Home from './app/Home/home';
import NovoCliente from './app/NovoCliente/novocliente';
import EditarCliente from './app/EditarCliente/editarcliente';
import ListaClientes from './app/Components/ListaCliente/listacliente'

function App(){
    return <BrowserRouter>
    <Routes>   
        <Route exact path='/' element={<Site/>}/>
        <Route exact path='/app' element={<Login/>}/>
        <Route exact path='/app/novaconta' element={<NovaConta/>}/>
        <Route exact path='/app/resetsenha' element={<ResetSenha/>}/>
        <Route exact path='/app/home' element={<Home/>}/>
        <Route exact path='/app/novocliente' element={<NovoCliente/>}/>
        <Route exact path='/app/clientes' element={<ListaClientes/>}/>
        <Route exact path='/app/editarcliente/:id' element={<EditarCliente/>}/>
    </Routes>     
    </BrowserRouter>
}

export default App;
