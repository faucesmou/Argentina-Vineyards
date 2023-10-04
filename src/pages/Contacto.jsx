import React, { useEffect, useState } from "react";
import Footer from "../components/partials/Footer";

import axios from "axios";

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
      validationErrors.telefono = "El Pais es requerido";
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
          "https://gmfp.createch.com.ar/api/submit-contactanos"
          /* "http://localhost:443/api/submit-formulario" */,
          dataFormulario
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
            <form
              onSubmit={(e) => e.preventDefault()}
              className="formContainer"
            >
              <h2 className="tituloContactanos">Contactanos</h2>
              <div className="inputContainer">
                <input
                  type="text"
                  placeholder="Nombre y Apellido"
                  value={formData2.nombreApellido}
                  onChange={(event) =>
                    setFormData2((prevData) => ({
                      ...prevData,
                      nombreApellido: event.target.value,
                    }))
                  }
                />
                {errors.nombreApellido && (
                  <span className="error-message">{errors.nombreApellido}</span>
                )}
              </div>

              <div className="inputContainer">
                <input
                  type="text"
                  placeholder="País"
                  value={formData2.pais}
                  onChange={(event) =>
                    setFormData2((prevData) => ({
                      ...prevData,
                      pais: event.target.value,
                    }))
                  }
                />
                {errors.pais && (
                  <span className="error-message">{errors.pais}</span>
                )}
              </div>

              <div className="inputContainer">
                <input
                  type="text"
                  placeholder="Número de teléfono"
                  value={formData2.telefono}
                  onChange={(event) =>
                    setFormData2((prevData) => ({
                      ...prevData,
                      telefono: event.target.value,
                    }))
                  }
                />
                {errors.telefono && (
                  <span className="error-message">{errors.telefono}</span>
                )}
              </div>

              <div className="inputContainer">
                <input
                  type="email"
                  placeholder="Email"
                  value={formData2.email}
                  onChange={(event) =>
                    setFormData2((prevData) => ({
                      ...prevData,
                      email: event.target.value,
                    }))
                  }
                />
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>

              <div className="inputContainer">
                <select
                  id="preferencia"
                  name="preferencia"
                  value={formData2.preferencia}
                  onChange={(event) =>
                    setFormData2((prevData) => ({
                      ...prevData,
                      preferencia: event.target.value,
                    }))
                  }
                >
                  <option defaultValue="" hidden>
                    Preferencia de contacto
                  </option>
                  <option value="Llamado">Llamado</option>
                  <option value="Whatsapp">Whatsapp</option>
                  <option value="Correo electrónico">Correo electrónico</option>
                </select>
                {errors.preferencia && (
                  <span className="error-message">{errors.preferencia}</span>
                )}
              </div>

              <div className="inputContainer">
                <input
                  type="text"
                  placeholder="En qué horario desea que lo contactemos"
                  value={formData2.horario}
                  onChange={(event) =>
                    setFormData2((prevData) => ({
                      ...prevData,
                      horario: event.target.value,
                    }))
                  }
                />
                {errors.horario && (
                  <span className="error-message">{errors.horario}</span>
                )}
              </div>

              <div className="inputContainer">
                <select
                  id="producto"
                  name="producto"
                  value={formData2.producto}
                  onChange={(event) =>
                    setFormData2((prevData) => ({
                      ...prevData,
                      producto: event.target.value,
                    }))
                  }
                >
                  <option defaultValue="" hidden>
                    Producto de interés
                  </option>
                  <option value="24 vides">24 vides</option>
                  <option value="Hilera">Hilera</option>
                  <option value="Terroir">Terroir</option>
                </select>
                {errors.producto && (
                  <span className="error-message">{errors.producto}</span>
                )}
              </div>
              <button onClick={handleSubmit} type="submit">
                Enviar
              </button>
            </form>
          </section>
          <section className="contenedorOficinas">
            <section className="conocer-mas">
              <article>
                <h5>
                  Conoce más sobre cómo ser dueño o comunícate con un asesor!
                </h5>
                {/*    <iframe
                loading="lazy"
                title="Finca Propia, Ruta Provincial 88, Tupungato, Provincia de Mendoza, Argentina"
                aria-label="Finca Propia, Ruta Provincial 88, Tupungato, Provincia de Mendoza, Argentina"
                data-src="https://maps.google.com/maps?q=Finca%20Propia%2C%20Ruta%20Provincial%2088%2C%20Tupungato%2C%20Provincia%20de%20Mendoza%2C%20Argentina&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
                className=" lazyloaded"
                src="/Images/finca/MapaArboleda.png"
              ></iframe> */}
              </article>
             
              <section className="comparativo">
                <div>
                  <img
                    src="/Images/Finca/fondo-home-01.jpg"
                    alt="fincaMuestra"
                  />
                </div>
              </section>
            </section>
          </section>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Contacto;
