import React, {useState} from 'react';
import { Link, Navigate } from 'react-router-dom';
import './novaconta.css';

import firebase from '../Config/firebase';
import 'firebase/compat/auth';

function NovaConta(){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [sucesso, setSucesso] = useState('');

    function CadastrarUsuario(){
        setMensagem('');

        if(!email || !senha){
            setMensagem('Informe todos os campos');
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(email, senha).then(resultado => {
            setSucesso('S');
        }).catch(error => {
            if(error.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).'){
                setMensagem('A senha deve ter pelo menos 6 caracteres');
            } else if(error.message === 'Firebase: The email address is badly formatted. (auth/invalid-email).'){
                setMensagem('O e-mail não é válido.');
            } else if(error.message === 'Firebase: The email address is already in use by another account. (auth/email-already-in-use).'){
                setMensagem('O e-mail já está sendo usado por outra conta.');
            } else {
                setMensagem('Erro ao criar conta: ' +error.message);
            }                       
        })
    }
    
    return <div className="d-flex align-items-center text-center form-container">
        <div className="form-signin">
            <img className="mb-4" src="/Images/logo-small2.png" alt="" />
            <h1 className="h3 mb-3 fw-normal">Criar Conta</h1>

            <div className="form-floating">
                <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="E-mail" />
                <label htmlFor="floatingInput">E-mail</label>
            </div>

            <div className="form-floating">
                <input onChange={(e) => setSenha(e.target.value)} type="password" className="form-control" id="floatingPassword" placeholder="Senha" />
                <label htmlFor="floatingPassword">Senha</label>
            </div>  

            <button onClick={CadastrarUsuario} className="w-100 btn btn-lg btn-primary" type="submit">Criar Conta</button>

            { mensagem.length > 0 ? <div className="alert alert-danger mt-2" role="alert">{mensagem}</div> : null }
            { sucesso === 'S' ? <Navigate to='/app/home' /> : null }

            <div className="login-links mt-5">                              
                <Link to="/app" className="mx-3">Já tenho uma conta</Link>
            </div>

            <p className="mt-5 mb-3 text-muted">&copy; Desenvolvido por Igor Bonfim</p>
        </div>
    </div>
}
export default NovaConta;
