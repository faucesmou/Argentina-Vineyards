import React, { useEffect } from "react";
import Footer from "../components/partials/Footer";

function Contacto() {
    
  useEffect(() => {
    const scrollFooter = (scrollY, heightFooter) => {
      if (scrollY >= heightFooter) {
        document.querySelector("footer").style.bottom = "0px";
      } else {
        document.querySelector("footer").style.bottom =
          "-" + heightFooter + "px";
      }
    };

    const handleScroll = () => {
      const scroll = window.scrollY;
      const windowHeight = window.innerHeight;
      const footerHeight = document.querySelector("footer").offsetHeight;
      const contentHeight = document.querySelector(".content").offsetHeight;
      const heightDocument = windowHeight + contentHeight + footerHeight - 20;

      document.getElementById("scroll-animate").style.height =
        heightDocument + "px";
      document.getElementById("scroll-animate-main").style.height =
        heightDocument + "px";
      document.querySelector(".parallax-container").style.height =
        windowHeight + "px";
      document.querySelector(".parallax-container").style.lineHeight =
        windowHeight + "px";
      document.querySelector(".wrapper-parallax").style.marginTop =
        windowHeight + "px";
      document.getElementById("scroll-animate-main").style.top =
        "-" + scroll + "px";
      document.querySelector(".parallax-container").style.backgroundPositionY =
        50 - (scroll * 100) / heightDocument + "%";

      scrollFooter(scroll, footerHeight);
    };
    // Agrega un event listener al evento de desplazamiento
    window.addEventListener("scroll", handleScroll);

    // Configuración inicial al cargar el componente
    handleScroll();

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div id="scroll-animate-main" className="Contacto">
      <div className="wrapper-parallax">
        <div
          className="parallax-container"
          style={{ backgroundImage: `url(${"/Images/contacto/finca.jpg"})` }}>

          <form>
            <h2>Contactanos</h2>
            <div className="formData">
              <label htmlFor="nombre">Nombre y apellido</label>
              <input type="text" name="nombre" id="nombre" />
            </div>
            <div className="formData">
              <label htmlFor="pais">Pais</label>
              <input type="text" name="pais" id="pais" />
            </div>
            <div className="formData">
              <label htmlFor="numero">Número de teléfono</label>
              <input type="text" name="numero" id="numero" />
            </div>
            <div className="formData">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="formData">
              <label htmlFor="preferencia">Preferencia de contacto</label>
              <input
                type="radio"
                name="preferencia"
                id="preferencia"
                value={"Llamado"}
              />
              <input
                type="radio"
                name="preferencia"
                id="preferencia"
                value={"Whatsapp"}
              />
              <input
                type="radio"
                name="preferencia"
                id="preferencia"
                value={"Correo electrónico"}
              />
            </div>
            <div className="formData">
              <label htmlFor="horario">
                En qué horario desea que lo contactemos
              </label>
              <input type="text" name="horario" id="horario" />
            </div>
            <div className="formData">
              <label htmlFor="producto">Producto de interés</label>
              <select name="producto" id="producto">
                <option defaultValue="" hidden>
                  Seleccione una opción
                </option>
                <option value="24 vides">24 vides</option>
                <option value="Hilera">Hilera</option>
                <option value="Terroir">Terroir</option>
              </select>
            </div>
            <button>Enviar</button>
          </form>
        </div>
        
        <div className="content">
          
          
          
          <section></section>

          <section className="conocer-mas">
          <article>
              <div>
                <img
                  src=""
                  alt=""
                  style={{
                    backgroundImage: `url(${"/Images/contacto/finca.jpg"})`,
                  }}
                />
              </div>
              <button>Oficinas De Argentina</button>
            </article>
            <iframe
              loading="lazy"
              title="Finca Propia, Ruta Provincial 88, Tupungato, Provincia de Mendoza, Argentina"
              aria-label="Finca Propia, Ruta Provincial 88, Tupungato, Provincia de Mendoza, Argentina"
              data-src="https://maps.google.com/maps?q=Finca%20Propia%2C%20Ruta%20Provincial%2088%2C%20Tupungato%2C%20Provincia%20de%20Mendoza%2C%20Argentina&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
              className=" lazyloaded"
              src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            ></iframe>
                 <h2>
              Más info sobre las oficinas
                </h2>
           </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Contacto;
