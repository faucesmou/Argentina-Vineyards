import React, { useEffect, useState } from "react";
import Footer from "../components/partials/Footer";
/* import Galeria2 from "../components/Galery/Galeria2"; */

import axios from "axios";

function ContactoInicial() {
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

  const [formData2, setFormData2] = useState({
    nombreApellido: "",
    pais: "",
    telefono: "",
    email: "",
    preferencia: "",
    horario: "",
    producto: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const validationErrors = {};
    if (formData2.nombreApellido.trim() === "") {
      validationErrors.nombreApellido = "El nombre y Apellido es requerido";
    }
    if (formData2.pais.trim() === "") {
      validationErrors.pais = "El Pais es requerido";
    }
    if (formData2.telefono.trim() === "") {
      validationErrors.telefono = "El Teléfono es requerido";
    }
    if (formData2.email.trim() === "") {
      validationErrors.email = "El email es requerido";
    }
    if (formData2.preferencia.trim() === "") {
      validationErrors.preferencia = "La preferencia es requerida";
    }
    if (formData2.horario.trim() === "") {
      validationErrors.horario = "El horario es requerido";
    }
    if (formData2.producto.trim() === "") {
      validationErrors.producto = "El Producto es requerido";
    }
    setFormSubmitted(false);
    return validationErrors;
  };

  /*  const [selectedMonth, setSelectedMonth] = useState(""); */

  const handleSubmit = async () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const dataFormulario = {
          FormData: formData2,
        };

        setFormData2({
          nombreApellido: "",
          pais: "",
          telefono: "",
          email: "",
          preferencia: "",
          horario: "",
          producto: "",
        });
        setErrors({});

        console.log("este es el dataFormulario--->", dataFormulario);
        const response = await axios.post(
          "https://gmfp.createch.com.ar/api/submit-contactanos",
          /* "http://localhost:443/api/submit-formulario" */ dataFormulario
        );

        console.log(
          "Datos enviados al servidor: dataFormulario--->",
          dataFormulario
        );
        console.log("Respuesta del servidor:", response.data);
        // Redirección al usuario a la página que corresponda:
        /* 
        const respuestaPeticion = response.data.data.url;
        console.log("este es la respuestaPetición--->", respuestaPeticion);
        window.location.href = respuestaPeticion; */

        setFormSubmitted(true);
      } catch (error) {
        console.error("Error al enviar el Form al backend:---> ", error);
      }
    } else {
      setErrors(validationErrors);
      console.log("errores de validación: " + JSON.stringify(validationErrors));
      setFormSubmitted(false);
    }
  };

  return (
    <div id="scroll-animate-main" className="Contacto">
      <div className="wrapper-parallax">
        <div
          className="parallax-container"
          style={{ backgroundImage: `url(${"/Images/contacto/finca.jpg"})` }}
        >
          <h2>Contactanos</h2>
        </div>

        <div className="content">
          <section className="conocer-mas">
            <p className="textoContactoInicial">Nuestras Oficinas</p>
            <img
              src="/Images/icons/logoArgentina.png"
              alt="Logo redondo"
              className="logoContactoInicial"
            />
          </section>
          <section className="contenedorOficinas">
            <section className="conocer-mas">
              <article>
                <h5>
                  Conoce más sobre cómo ser dueño o comunicate con un asesor.
                </h5>
                <div className="button-container-contactoInicial">
                <a
                  href="https://wa.me/5492612759986?text=¡Hola!%20Me%20gustaría%20recibir%20más%20detalles%20acerca%20de%20cómo%20tener%20mi%20propio%20viñedo%20en%20Finca%20Propia.%20¡Muchas%20gracias!%20"
                  class="elementor-button-link elementor-button elementor-size-lg"
                  role="button"
                >
                  <span class="elementor-button-content-wrapper">
                    <span class="elementor-button-icon elementor-align-icon-right">
                      <i aria-hidden="true" class="fab fa-whatsapp"></i>{" "}
                    </span>
                    <span className="elementor-button-text">
                      OFICINAS DE ARGENTINA
                    </span>
                  </span>
                </a>
                </div>
                <iframe
                  loading="lazy"
                  title="Finca Propia, Ruta Provincial 88, Tupungato, Provincia de Mendoza, Argentina"
                  frameborder="0"
                  className="iframe-container"
                  allowFullScreen
                  /* src="https://maps.app.goo.gl/TJQ5PJ6KpS121ArN8" */
                  src="https://maps.google.com/maps?q=Finca%20Propia%2C%20Ruta%20Provincial%2088%2C%20Tupungato%2C%20Provincia%20de%20Mendoza%2C%20Argentina&t=m&z=10&output=embed&iwloc=near"
                ></iframe>
              </article>

              <section className="comparativo">
               {/*  <section className="logoNegro">
                  <img
                    src="/Images/Finca/fondo-home-01.jpg"
                    alt="fincaMuestra"
                  />
                  <div className="imagen-logo">
                    <img
                      src="/Images/footer/logo-blanco-fondo-negro-150x100-04.png"
                      alt="Finca-Propia-Logo"
                    />
                  </div>
                </section> */}
              </section>
            </section>
            {/*  <section className='logoNegro'>
                <Galeria2 images={images} />
                              <div className='imagen-logo'>
                                <img src="/Images/footer/logo-blanco-fondo-negro-150x100-04.png" alt="Finca-Propia-Logo" />
                            </div>
            </section> */}
          </section>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default ContactoInicial;
