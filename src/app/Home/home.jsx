import React, {useState, useEffect} from 'react';
import './home.css';
import Navbar from '../Components/Navbar/navbar';
import ListaClientes from '../Components/ListaCliente/listacliente';

import firebase from '../Config/firebase';

function Home(){

    const [clientes, setClientes] = useState([]);
    const [busca, setBusca] = useState('');
    const [texto, setTexto] = useState('');
    let listaCli = [];    

    useEffect(function(){
        firebase.firestore().collection('clientes').get().then(async function(resultado){
            await resultado.docs.forEach(function(doc){
                if(doc.data().nome.indexOf(busca) >= 0){
                    listaCli.push({
                        id: doc.id,
                        nome: doc.data().nome,
                        email: doc.data().email,
                        fone: doc.data().fone,
                    });
                }
            })

            setClientes(listaCli);
        })
    }, [busca]);

    return <div>
        <Navbar />
        <div className="container-fluid titulo">
            <h1>Cadastro de clientes</h1>

            <div className="row">
                <div className="col-4">
                    <button className="btn btn-primary" type="button"><i className="fas fa-plus"></i> Cliente</button>
                </div>

                <div className="col-8">
                    <div className="input-group mb-3">
                        <input  onChange={(e) => setTexto(e.target.value)} type="text" className="form-control" placeholder="Pesquisar"/>
                        <button onClick={(e) => setBusca(texto)} className="btn btn-primary" type="button"><i className="fas fa-search"></i> Pesquisar</button>
                    </div>                    
                </div>
            </div>

            <ListaClientes arrayClientes={clientes} />
        </div>
    </div>
}
export default Home;
