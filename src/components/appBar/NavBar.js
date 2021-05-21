import * as React from 'react';
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import { Router, withRouter } from 'react-router-dom';
import {routes} from '../../router/RoutesConstants'

import './NavBar.css';
const NavBar =(props)=>{
    return (
      <div role="navigation" className='navbar container-fluid'>
        <div id="menuToggle">          
          <input className="check" type="checkbox" />   
          <span></span>
          <span></span>     
          <span></span>
          <ul id="menu">
            <Nav.Link onClick={()=>props.history.push(routes.home)}><li>Inicio</li></Nav.Link>
            <hr />
            <Nav.Link onClick={()=>props.history.push(routes.publications)}><li>Publicaciones</li></Nav.Link>
            <hr />
            <Nav.Link onClick={()=>props.history.push(routes.registerPublication)}><li>Registrar publicacion</li></Nav.Link>
            <hr />
            <Nav.Link onClick={()=>props.history.push(routes.registerVeterinary)}><li>Registrar veterinaria</li></Nav.Link>
            <hr />
            <Nav.Link onClick={()=>props.history.push(routes.login)}><li>Salir</li></Nav.Link>
            <hr />
            <Nav.Link onClick={()=>props.history.push(routes.login)}><li>Iniciar sesión</li></Nav.Link>
          </ul>
        </div>
        <div className="title">
            <h3 className="title-nav">Mi Veterinaria</h3>
        </div>
    </div>
  );
}

export default withRouter(NavBar);