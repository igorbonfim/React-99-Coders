import React from 'react';
import {Link} from 'react-router-dom';
import './listacliente.css';

function ListaClientes(props){   
    
    function deleteUser(id){
        alert('Excluir usuario: ' + id);
    }

    return (
        <table className="table table-hover table-bordered">
            <thead>
                <tr className="table-secondary">
                    <th scope="colSpan">Código</th>
                    <th scope="colSpan">Nome</th>
                    <th scope="colSpan">E-mail</th>
                    <th scope="colSpan">Telefone</th>
                    <th className="col-acao" scope="colSpan"></th>
                </tr>
            </thead>
            <tbody>

                {
                    props.arrayClientes.map(cliente => {
                        return (
                            <tr key={cliente.id}>
                                <th scope="row">{cliente.id}</th>
                                <td>{cliente.nome}</td>
                                <td>{cliente.email}</td>
                                <td>{cliente.fone}</td>
                                <td>
                                    <Link to="#"><i className="fas fa-edit icone-acao"></i></Link>
                                    <Link to="#" onClick={() => deleteUser(cliente.id)}><i className="far fa-trash-alt icone-acao red"></i></Link>
                                </td>
                            </tr>
                        )
                    })
                }
                                            
            </tbody>
        </table>
    );
}

export default ListaClientes;