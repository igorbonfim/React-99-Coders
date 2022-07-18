import React from 'react';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import { AuthContext } from './app/Context/auth';

/* Páginas */
import Site from './site/site';
import Login from './app/Login/login';
import NovaConta from './app/NovaConta/novaconta';
import ResetSenha from './app/ResetSenha/resetsenha';
import Home from './app/Home/home';
import NovoCliente from './app/NovoCliente/novocliente';
import EditarCliente from './app/EditarCliente/editarcliente';
import ListaClientes from './app/Components/ListaCliente/listacliente'
import { useContext } from 'react';

function App(){

    const { logado } = useContext(AuthContext);

    function SecureRoute({...params}){
        if(!logado) {
            return <Navigate to="/app" />
        }
        else {
            return <Route {...params} />
        }
    }

    return (
    <BrowserRouter>        
        <Routes>   
            <Route exact path='/' element={<Site/>}/>
            <Route exact path='/app' element={<Login/>}/>
            <Route exact path='/app/novaconta' element={<NovaConta/>}/>
            <Route exact path='/app/resetsenha' element={<ResetSenha/>}/>                       

            <Route exact path='/' element={<SecureRoute/>} >
                <Route exact path='/app/home' element={<Home/>}/>
                <Route exact path='/app/novocliente' element={<NovoCliente/>}/>                
                <Route exact path='/app/editarcliente/:id' element={<EditarCliente/>}/>
            </Route>
        </Routes>           
    </BrowserRouter>    
    )
}

export default App;

//<Route exact path='/app/clientes' element={<ListaClientes/>}/>