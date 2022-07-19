import React, { useState, useEffect, useRef } from "react";
import {Link, Navigate, useParams} from 'react-router-dom';
import Navbar from '../Components/Navbar/navbar';
import "./editarcliente.css";
import firebase from '../Config/firebase';
import 'firebase/compat/firestore';
import validator from "validator";

function EditarCliente() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [fone, setFone] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [sucesso, setSucesso] = useState('N');
  const db = firebase.firestore();
  const params = useParams(); 
  const inputNome = useRef();
  const inputEmail = useRef();

  useEffect(() => {
    firebase.firestore().collection('clientes').doc(params.id).get().then((resultado) => {
        setNome(resultado.data().nome);
        setEmail(resultado.data().email);
        setFone(resultado.data().fone);
    })    
  }, [])

  function AlterarCliente(){

    if(nome.length === 0){
      setMensagem('Informe o nome');
      inputNome.current.focus();
    }
    else if ((email.length === 0) || (!validator.isEmail(email))){
      setMensagem('Informe um e-mail válido');
      inputEmail.current.focus();      
    }
    else {
      db.collection('clientes').doc(params.id).update({
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
          <h1>Editar cliente</h1>
          <form>

            <div className="mb-3">
              <label className="form-label">Código</label>
              <input type="text" value={params.id} className="form-control" id="codigo"  disabled/>            
            </div>

            <div className="mb-3">
              <label className="form-label">Nome</label>
              <input onChange={(e) => setNome(e.target.value)} ref={inputNome} value={nome} type="text" className="form-control" id="nomeedit" />            
            </div> 

            <div className="mb-3">
              <label className="form-label">E-mail</label>
              <input onChange={(e) => setEmail(e.target.value)} ref={inputEmail} value={email} type="text" className="form-control" id="emailedit" />            
            </div>   

            <div className="mb-3">
              <label className="form-label">Fone</label>
              <input onChange={(e) => setFone(e.target.value)} value={fone} type="text" className="form-control" id="foneedit" />            
            </div>  
            
            <div className="text-center">
              <Link to='/app/home' className="btn btn-outline-primary btn-acao">Cancelar</Link>
              <button onClick={AlterarCliente} type="button" className="btn btn-primary btn-acao">Salvar</button>
            </div>

            { mensagem.length > 0 ? <div className="alert alert-danger mt-2" role="alert">{mensagem}</div> : null }
            { sucesso === 'S' ? <Navigate to='/app/home' /> : null }

          </form>
        </div>
      </div>      
    </div>
  )
}
export default EditarCliente;
