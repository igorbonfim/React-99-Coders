import React, {useState, useRef} from "react";
import {Link, Navigate} from 'react-router-dom';
import Navbar from '../Components/Navbar/navbar';
import "./novocliente.css";
import firebase from '../Config/firebase';
import validator from "validator";
import { IMaskInput } from "react-imask";

function NovoCliente() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [fone, setFone] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [sucesso, setSucesso] = useState('N');
  const db = firebase.firestore();
  const inputNome = useRef();
  const inputEmail = useRef();

  function CadastrarCliente(){

    if(nome.length === 0){
      setMensagem('Informe o nome');
      inputNome.current.focus();
    }
    else if ((email.length === 0) || (!validator.isEmail(email))){
      setMensagem('Informe um e-mail válido');
      inputEmail.current.focus();
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
              <label className="form-label">Nome</label>
              <input onChange={(e) => setNome(e.target.value)} ref={inputNome} type="text" className="form-control" id="nome" placeholder="Digite o nome do cliente"/>            
            </div> 

            <div className="mb-3">
              <label className="form-label">E-mail</label>
              <input onChange={(e) => setEmail(e.target.value)} ref={inputEmail} type="email" className="form-control" id="email" placeholder="email@email.com" />            
            </div>   

            <div className="mb-3">
              <label className="form-label">Fone</label>
              <IMaskInput mask="(00) 0000-0000" onChange={(e) => setFone(e.target.value)} className="form-control" id="fone" placeholder="(00) 0000-0000" />            
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
