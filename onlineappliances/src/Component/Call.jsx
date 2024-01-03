import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "../Home";
import App from "../App";
import App1 from "../App1";
import Privacy from "../privacy";
function Call()
{
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/Login' element={<App/>}/>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/Signup' element={<App1/>}/>
            <Route path='/Privacy' element={<Privacy/>}/>

        </Routes>
        </BrowserRouter>
    );
}
export default Call;