import React, { useEffect } from "react";
import Footer from "../components/partials/Footer";
/* import Galeria from "../components/Galery/Galeria"; */
import Galeria2 from "../components/Galery/Galeria2";
import Navegar from "../components/Navegar/Navegar";

function Finca() {
  const images = [
    /* "/Images/Finca/MapaArboleda.png", */
    "/Images/Finca/acceso-propietarios-fondo-01.jpg",
    /* "/Images/Finca/FincaPropiaMar20-198-scaled.jpg", */
    "/Images/Finca/FincaPropiaMar20-488-scaled.jpg",
    "/Images/Finca/fondo-home-01.jpg",
    /* "/Images/Finca/procesosuvas-02.jpg" */
  ];
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
    <div id="scroll-animate-main" className="Finca">
      <div className="wrapper-parallax">
        <div
          className="parallax-container"
          style={{
            backgroundImage: `url(${"/Images/Finca/fondo-finca-2-01.jpg"})`,
          }}
        >
          <h1>La Finca</h1>
        </div>
        <div className="content">
          <section className="legado">
            <article>
              <h2>Nuestro Legado</h2>
              <p className="drop-cap">
                <span className="letraGrande">A</span>76 km de la Ciudad de
                Mendoza, nuestros viñedos se encuentran ubicados en Valle de
                Uco, departamento de Tupungato, región reconocida por sus
                inigualables condiciones para producir los vinos más finos. El
                clima de la región aporta la amplitud térmica que demandan los
                vinos de alta gama, donde destacadas bodegas vecinas como Catena
                Zapata, Rutini, Salentein, entre otras, también han elegido la
                zona y el terruño como el espacio ideal para desarrollar sus
                producciones.
              </p>
              <p className="arboleda">
                Finca La Arboleda cuenta con un terreno de{" "}
                <strong>56 hectáreas</strong>, de más de 40 plantadas por partes
                iguales con cepas de{" "}
                <strong>Malbec, Cabernet Sauvignon y Chardonnay</strong>, a una
                altura promedio de{" "}
                <strong>950 metros sobre el nivel del mar</strong>, custodiada
                por la magnífica <strong>Cordillera de los Andes</strong>.
              </p>
            </article>

            {/*   <Galeria images={images} /> */}

            <Galeria2 images={images} />

            <article>
              <p className="drop-cap">
                Porque entendemos que los vinos nacen en el viñedo y que
                nuestros vinos deben estar a la altura de nuestro sueño, la
                finca está equipada con todos los elementos necesarios para
                desarrollar una actividad en excelencia: malla antigranizo en su
                totalidad, riego por goteo, cosecha, poda, raleo manual, los
                atentos sentidos y las manos maestras de Antonio Mas. En este
                magnífico lugar nuestros propietarios disfrutan de ser dueños y
                brindar con un vino tan suyo como el imponente paisaje a su
                alrededor.
              </p>
            </article>
          </section>
          <section className="video-completo">
           {/*  <video autoPlay loop muted playsInline>
              <source
                src="/Images/Finca/WhatsApp-Video-2020-07-02-at-18.50.00.mp4"
                type="video/mp4"
              />
            </video> */}

            <video
              src="/Images/Finca/WhatsApp-Video-2020-07-02-at-18.50.00.mp4"
              autoPlay={true}
              loop={true}
              muted="muted"
            ></video>
          </section>
          <section className="conocer-mas">
            <h2>
              Conoce más sobre cómo ser dueño o comunícate con un asesor
              comercial.
            </h2>
            <div className="botones">
              <Navegar to="/ser-dueno">
                <button className="black">Ser Dueño</button>
              </Navegar>
              <Navegar to="/contacto">
                <button className="gold">Contactar un asesor comercial</button>
              </Navegar>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Finca;
