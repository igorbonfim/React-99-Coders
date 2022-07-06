import React from 'react';
import './listacliente.css';
import clientes from '../../Dados/clientes';

function ListaClientes(){
    return (
        <table className="table table-hover table-bordered">
            <thead>
                <tr className="table-secondary">
                    <th scope="colSpan">Código</th>
                    <th scope="colSpan">Nome</th>
                    <th scope="colSpan">E-mail</th>
                    <th scope="colSpan">Telefone</th>
                </tr>
            </thead>
            <tbody>

                {
                    clientes.map(cliente => {
                        return (
                            <tr key={cliente.id}>
                                <th scope="row">{cliente.id}</th>
                                <td>{cliente.nome}</td>
                                <td>{cliente.email}</td>
                                <td>{cliente.fone}</td>
                            </tr>
                        )
                    })
                }
                                            
            </tbody>
        </table>
    );
}

export default ListaClientes;