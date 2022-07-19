import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../Components/Navbar/navbar';
import ListaClientes from '../Components/ListaCliente/listacliente';
import './home.css';

import firebase from '../Config/firebase';
import 'firebase/compat/firestore';

import SweetAlert from 'react-bootstrap-sweetalert';

function Home(){    

    const [clientes, setClientes] = useState([]);
    const [busca, setBusca] = useState('');
    const [texto, setTexto] = useState('');     
    const [excluido, setExcluido] = useState('');     
    const [confirma, setConfirma] = useState(false);     
    const [confirmaId, setConfirmaId] = useState('');     
    
    function deleteUser(id){
        firebase.firestore().collection('clientes').doc(id).delete().then(() => {
            setExcluido(id); 
            setConfirma(false);   
        })
    }

    function confirmDeleteUser(id){
        setConfirmaId(id);
        setConfirma(true);
    }

    useEffect(function(){
        let listaCli = []; 
        
        firebase.firestore().collection('clientes').get().then(async function(resultado){
            await resultado.docs.forEach(function(doc){
                if((doc.data().nome.indexOf(busca) >= 0) || 
                  (doc.data().email.indexOf(busca) >= 0) ||
                   doc.data().fone.indexOf(busca) >= 0){
                    listaCli.push({
                        id: doc.id,
                        nome: doc.data().nome,
                        email: doc.data().email,
                        fone: doc.data().fone
                    });
                }
            })

            setClientes(listaCli);
        })
    }, [busca, excluido]);

    return <div>
        <Navbar />
        <div className="container-fluid titulo">
            <h1>Cadastro de clientes</h1>

            <div className="row">
                <div className="col-4">
                    <Link to='/app/novocliente' className="btn btn-primary" type="button"><i className="fas fa-plus"></i> Cliente</Link>
                </div>

                <div className="col-8">
                    <div className="input-group mb-3">
                        <input onChange={(e) => setTexto(e.target.value)} type="text" className="form-control" placeholder="Pesquisar" />
                        <button onClick={(e) => setBusca(texto)} className="btn btn-primary" type="button"><i className="fas fa-search"></i> Pesquisar</button>
                    </div>                    
                </div>
            </div>

            <ListaClientes arrayClientes={clientes} clickDelete={confirmDeleteUser} />

            {
            confirma ? <SweetAlert
                            warning
                            showCancel
                            showCloseButton
                            confirmBtnText="Sim"
                            confirmBtnBsStyle="danger"
                            cancelBtnText="Não"
                            cancelBtnBsStyle="light"
                            title="Confirma exclusão?"
                            onConfirm={() => deleteUser(confirmaId)}
                            onCancel={() => setConfirma(false)}
                            reverseButtons={true}                
                            >
                            O registro será excluído permanentemente.
                        </SweetAlert> : null 
            }

        </div>
    </div>
}
export default Home;
