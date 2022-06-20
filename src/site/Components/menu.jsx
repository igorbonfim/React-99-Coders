import React from 'react';

function Menu() {
    return <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container-fluid'>

            <a className='navbar-brand' href='#'>
                <img src='Images/logo.png' alt='' height="28" />
            </a>

            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent'>
                <span className='nav-toggler-icon'></span>
            </button>

            <div className='collapse-navbar-collapse' id='navbarSupportedContent'>
                <ul className='navbar-nav ms-auto'>
                    <li className='nav-item'>
                        <a className='nav-link' aria-current='page' href='#'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' aria-current='page' href='#'>Features</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' aria-current='page' href='#'>Clientes</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' aria-current='page' href='#'>Planos e Preços</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' aria-current='page' href='#'>Contato</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}
export default Menu;
