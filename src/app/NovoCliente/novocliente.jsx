import React, {useState} from "react";
import {Link, Navigate} from 'react-router-dom';
import Navbar from '../Components/Navbar/navbar';
import "./novocliente.css";
import firebase from '../Config/firebase';

function NovoCliente() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [fone, setFone] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [sucesso, setSucesso] = useState('N');
  const db = firebase.firestore();

  function CadastrarCliente(){

    if(nome.length === 0){
      setMensagem('Informe o nome');
    }
    else if (email.length === 0){
      setMensagem('Informe o email');
    }
    else {
      db.collection('clientes').add({
        nome: nome,
        email: email,
        fone: fone
      }).then(() => {
        setMensagem('');
        setSucesso('S');
      }).catch((erro) => {
        setMensagem(erro);
        setSucesso('N');
      })
    }
  }

  return (
    <div>
      <Navbar />
      <div className="container-fluid titulo">

        <div className="offset-lg-3 col-lg-6">
          <h1>Novo cliente</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Nome</label>
              <input onChange={(e) => setNome(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />            
            </div> 

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">E-mail</label>
              <input onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />            
            </div>   

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Fone</label>
              <input onChange={(e) => setFone(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />            
            </div>  
            
            <div className="text-center">
              <Link to='/app/home' className="btn btn-outline-primary btn-acao">Cancelar</Link>
              <button onClick={CadastrarCliente} type="button" className="btn btn-primary btn-acao">Salvar</button>
            </div>

            { mensagem.length > 0 ? <div className="alert alert-danger mt-2" role="alert">{mensagem}</div> : null }
            { sucesso === 'S' ? <Navigate to='/app/home' /> : null }
          </form>
        </div>
      </div>      
    </div>
  )
}
export default NovoCliente;
