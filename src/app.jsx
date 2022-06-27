import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Site from './site/site';
import Login from './app/Login/login';

function App(){
    return <BrowserRouter>
    <Routes>   
        <Route exact path='/' element={<Site/>}/>
        <Route exact path='/app' element={<Login/>}/>
    </Routes>     
    </BrowserRouter>
}

export default App;
