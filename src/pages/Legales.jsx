import React, { useEffect } from "react";
import Footer from "../components/partials/Footer";
import Navegar from "../components/Navegar/Navegar";

function Legales() {
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
    <div id="scroll-animate-main" className="Winemaker">
      <div className="wrapper-parallax">
        <div
          className="parallax-container"
          style={{
            backgroundImage: `url(${"/Images/winemaker/portada-winemaker4-03-e1586186921902.jpg"})`,
          }}
        >
          <h1>Legales</h1>
        </div>
        <div className="content">
          <section className="datos">
            <h2 className="titular-principal">Políticas de Privacidad</h2>
            <article>
              <div className="contenedor-legales-texto-imagen">
                <div>
                  <div className="legales-textos">
                    <h3 className="titular-secundario">
                      Políticas de Privacidad
                    </h3>
                    <p className="drop-cap">
                      <span className="letraGrande">L</span>EA ESTO CON
                      DETENIMIENTO. ESTE DOCUMENTO INDICA CÓMO FINCA PROPIA
                      UTILIZARÁ Y PROTEGERÁ SUS DATOS PERSONALES. MIENTRAS
                      NAVEGA EN ESTE SITIO WEB, USTED AUTOMÁTICAMENTE ACEPTA LAS
                      NORMAS DE USO, PROTECCIÓN Y SEGURIDAD AQUÍ ESTABLECIDAS.
                    </p>
                   
                    <span >
                      <strong>
                        Seguridad y Protección de sus Datos Personales
                      </strong>
                    </span>
                    <span className="textoLegales">
                      La seguridad de los datos personales es una prioridad para
                      FINCA PROPIA. Este sitio web se esfuerza por ofrecer el
                      más alto nivel de seguridad para lo cual se utiliza
                      tecnología de avanzada. Adherimos a los requerimientos de
                      la Ley Nacional de Protección de Datos Personales, N°
                      25.326 y sus normas complementarias.
                    </span>

                    <span className="textoLegales">
                      <strong>Su privacidad</strong>
                    </span>
                    <span className="textoLegales">
                      FINCA PROPIA respeta su privacidad. Toda la información
                      que usted nos proporcione se tratará con sumo cuidado y
                      con la mayor seguridad posible, y sólo se utilizará de
                      acuerdo con los límites establecidos en este documento.
                    </span>
                    <span className="textoLegales">
                      <strong>Cómo se reúne la información</strong>
                    </span>
                    <span className="textoLegales">
                      FINCA PROPIA solamente reúne sus datos personales cuando
                      usted los proporciona en forma directa y con su
                      consentimiento expreso e informado.
                    </span>
                    <span className="textoLegales">
                      <strong>Cómo Finca Propia utiliza su información</strong>
                    </span>
                    <span className="textoLegales">
                      FINCA PROPIA utiliza la información que usted proporciona
                      para: expandir ofertas de comercialización y para publicar
                      productos y servicios que podrían ser de su interés, para
                      personalizar y mejorar nuestros servicios y para fines
                      estadísticos de FINCA PROPIA.
                    </span>
                    <span className="textoLegales">
                      <strong>¿Quién tiene acceso a la Información?</strong>
                    </span>
                    <span className="textoLegales">
                      FINCA PROPIA siempre está comprometido a presentar nuevas
                      soluciones que mejoren el valor de sus productos y
                      servicios. La información no identificable y estadística
                      también podrá ser compartida con socios comerciales.
                    </span>
                    <span className="textoLegales">
                      <strong>
                        Seguridad y Protección de sus Datos Personales
                      </strong>
                    </span>
                    <span className="textoLegales">
                      La seguridad de los datos personales es una prioridad para
                      FINCA PROPIA. Este sitio web se esfuerza por ofrecer el
                      más alto nivel de seguridad para lo cual se utiliza
                      tecnología de avanzada. Adherimos a los requerimientos de
                      la Ley Nacional de Protección de Datos Personales, N°
                      25.326 y sus normas complementarias.
                    </span>
                  </div>
                </div>
                <div className="legales-imagenes">
                  <img
                    src="/Images/legales/imageLegales.jpg"
                    alt="Antonio Mas Nieve"
                  />
                </div>
              </div>
            </article>

            <div className="bottomPage">
              <h2 className="foot">Conocé más sobre nuestros vinos</h2>

              <Navegar to="/los-vinos">
                <button className="dorado">Los vinos</button>
              </Navegar>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Legales;
