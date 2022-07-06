import React from 'react';
import './home.css';
import Navbar from '../Components/Navbar/navbar';
import ListaClientes from '../Components/ListaCliente/listacliente';

function Home(){
    return <div>
        <Navbar />
        <div className="container-fluid titulo">
            <h1>Cadastro de clientes</h1>
            <ListaClientes />
        </div>
    </div>
}
export default Home;
