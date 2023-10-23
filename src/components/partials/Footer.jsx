import React, { useEffect, useState } from "react";
import Navegar from "../Navegar/Navegar";
import { NavLink } from "react-router-dom";

function Footer() {
   
  return (
    <footer>
        <section className='logo contenedor'>
            <img src="/Images/footer/logo-blanco-fondo-negro-150x100-04.png" alt="Finca Propia logo" />
        </section>
        <section className='contacto contenedor'>
            <ul>
                <li>
                    <h5>Finca Propia</h5>
                    <a href="tel:5492613300621">Cel: +54 9 2613 30-0621</a>
                    <p>Email:</p>
                    <a href="mailto:propietariosfinca@fincapropia.com">propietariosfinca@fincapropia.com</a>
                </li>
                <li>
                    <h5>Viña La Arboleda</h5>
                    <a href='https://maps.app.goo.gl/GooCpQH2o94gGFq87'>Ruta 88 Intersección calle Campañaro.</a>
                    <p>Tupungato, Valle de Uco, Argentina</p>
                    <a href="mailto:propietariosfinca@fincapropia.com">contacto@fincapropia.com</a>
                </li>
            </ul>
        </section>
        <section className='direccion contenedor'>
            <ul>
                <li>
                    <h5>Finca Propia Paraguay</h5>
                    <p>DANIEL CORONEL</p>
                    <p>TERARE PARAGUAY</p>
                    <p>Asunción: WTC torre 2 piso 10</p>
                    <p>Ciudad del Este: Avenida 11 de Setiembre 512, piso 1 casi Carlos A. López</p>
                    <a href="tel:595992925106">Tel: +595 992 925 106</a>
                    <a href="mailto:atencion.paraguay@fincapropia.com">atencion.paraguay@fincapropia.com</a>
                </li>
            </ul>
        </section>
        <section className='brasil contenedor'>
            <ul>
                <li h5>
                    <h5>Finca Propia Brasil</h5>
                    <a href="tel:(011) 93022-7013">Tel: (011) 93022-7013</a>
                    {/* <a href="tel:(011) 93022-7013">Tel: +55 11 2338-5510</a> */}
                    <p>Endereço</p>
                    <p>Av. Miruna 1569 - São Paulo - Brasil</p>
                    <p>Cep 04084-006</p>
                    <a href="mailto:contacto.br@fincapropia.com">contacto.br@fincapropia.com</a>
                    <a href="mailto:propietarios.br@fincapropia.com">propietarios.br@fincapropia.com</a>
                </li>
                <li>
                    <h5>Los vinos de</h5>
                    <img src="/Images/home/antoniomaslogo.png" alt="Antonio Mas Wines" />
                </li>
            </ul>
        </section>
        <section className='legales'>
            <article className='derechos'>
                <p>© 2020 Finca Propia. All Rights Reserved.</p>
            </article>
            <article>
            <NavLink to="/legales" >
                <li>Legales</li>
              </NavLink>
            </article>
        </section>
    </footer>
  )
}

export default Footer