import React from 'react'
import Portada from "../../assets/img/portada.png"; //ACA VA LA FOTO DE portada,(la larga)
import {Link} from "react-router-dom";

const Home = ()=> {
    return (
        <div className="inicio">   
           <Link to="/">
            <h1 > Inicio</h1>
           </Link>
           <Link to="/shows">
            <h1 >Productos</h1>
           </Link>
           <img src={ Portada} alt="inicio">

           </img>
        </div>
    )
}

export default Home;