import React from 'react';
import {Link} from 'react-router-dom';
import './listacliente.css';

function ListaClientes(props){    

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
                props.arrayClientes.map((cliente, index) => {
                    return (
                        <tr key={index}>
                            <th scope="row">{cliente.id}</th>
                            <td>{cliente.nome}</td>
                            <td>{cliente.email}</td>
                            <td>{cliente.fone}</td>
                            <td>
                                <Link to={`/app/editarcliente/${cliente.id}`}><i className="fas fa-edit icone-acao"></i></Link>
                                <Link to="#" onClick={() => props.clickDelete(cliente.id)}><i className="far fa-trash-alt icone-acao red"></i></Link>
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