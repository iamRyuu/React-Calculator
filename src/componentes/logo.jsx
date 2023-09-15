import React from "react";
import logo from '../imagenes/Logo.png'

function Logo() {
    return(
        <div className='logo-contenedor'>
        <img
          src={logo}
          className='logo'
          alt='Calculator-logo'
        />
        </div>
    );
}

export default Logo;