import React from "react";
import "./verpubli.css";
import img from "../../assets/Dopi.jpg";


const verpubli = (props) => {
    
  return (
       <div class="seccion-perfil-usuario">
        <img className="img-detras" src={img} alt=""/>  
  <div class="perfil-usuario-header">
      <div class="perfil-usuario-portada">   
              <img src={img} alt="img-avatar"></img>        
      </div>
  </div>
  <div class="perfil-usuario-body">
      <div class="perfil-usuario-bio">
          <h3 class="titulo">ghjg</h3>
          <p class="texto">efgrhj</p>
      </div>
      <div class="perfil-usuario-footer">
          <ul class="lista-datos">
              <li> Direccion:</li>
              <p class="texto">cochabamba</p>
              <li>Veterinaria:</li>
              <p class="texto">juanita</p>
              <li> Telefono:</li>
              <p class="texto">70765163</p>

          </ul>
      </div>
  </div>
</div>
  );
};
export default verpubli;