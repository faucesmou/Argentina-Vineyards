import React, { useEffect } from 'react'
import Footer from '../components/partials/Footer'
import Slider from '../components/Slider/Slider';
import Galeria2 from "../components/Galery/Galeria2";
import Navegar from "../components/Navegar/Navegar";

function LosVinos() {
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
                document.querySelector('footer').style.bottom = '0px';
            } else {
                document.querySelector('footer').style.bottom = '-' + heightFooter + 'px';
            }
        };

        const handleScroll = () => {
            const scroll = window.scrollY;
            const windowHeight = window.innerHeight;
            const footerHeight = document.querySelector('footer').offsetHeight;
            const contentHeight = document.querySelector('.content').offsetHeight;
            const heightDocument = windowHeight + contentHeight + footerHeight - 20;

            document.getElementById('scroll-animate').style.height = heightDocument + 'px';
            document.getElementById('scroll-animate-main').style.height = heightDocument + 'px';

            document.querySelector('.parallax-container').style.height = windowHeight + 'px';
            document.querySelector('.parallax-container').style.lineHeight = windowHeight + 'px';

            document.querySelector('.wrapper-parallax').style.marginTop = windowHeight + 'px';

            document.getElementById('scroll-animate-main').style.top = '-' + scroll + 'px';
            document.querySelector('.parallax-container').style.backgroundPositionY = 50 - (scroll * 100 / heightDocument) + '%';

            scrollFooter(scroll, footerHeight);
        };

        // Agrega un event listener al evento de desplazamiento
        window.addEventListener('scroll', handleScroll);

        // Configuración inicial al cargar el componente
        handleScroll();

        // Limpia el event listener cuando el componente se desmonta
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div id="scroll-animate-main" className='LosVinos'>
            <div className="wrapper-parallax">
                <div className='parallax-container' style={{ backgroundImage: `url(${'/Images/losvinos/FincaPropiaMar20-484-scaled.jpg'})` }}>
                    <h1>Los vinos</h1>
                </div>
                <div className='content'>
                    <div className='datos'>
                        <section className='vinos'>
                            <article className='signature'>
                                <h3>Finca Propia Signature</h3>
                                <p className='drop-cap'><span span className='letraGrande'>T</span>al como lo hizo con aquel Syrah de Finca La Anita, Antonio Mas continúa sorprendiéndonos con un estilo de vinos que, reflejando las características del terroir de La Arboleda, tienen un perfil aromático intenso y fresco por el equilibrio de la acidez.</p>
                                <span className='light'>Al adquirir tu hilera en Viña La Arboleda, podés recibir tu producción en vinos personalizados con tu nombre y firma. Los propietarios de Terroir además, contarán con el beneficio de diseñar su propia etiqueta, proceso que implica el registro de la marca en el INPI y aprobación por el Instituto Nacional de Vitivinicultura {`(INV)`}.</span>
                                <span className='light'>Al adquirir tu hilera en Viña La Arboleda, podés recibir tu producción en vinos personalizados con tu nombre y firma. Los propietarios de Terroir además, contarán con el beneficio de diseñar su propia etiqueta, proceso que implica el registro de la marca en el INPI y aprobación por el Instituto Nacional de Vitivinicultura {`(INV)`}.</span>
                                <span className='light'>Al adquirir tu hilera en Viña La Arboleda, podés recibir tu producción en vinos personalizados con tu nombre y firma. Los propietarios de Terroir además, contarán con el beneficio de diseñar su propia etiqueta, proceso que implica el registro de la marca en el INPI y aprobación por el Instituto Nacional de Vitivinicultura {`(INV)`}.</span>
                                </article>
                            
                             <section className='logoNegro'>
                                     <Galeria2 images={images} />
                              <div className='imagen-logo'>
                                <img src="/Images/footer/logo-blanco-fondo-negro-150x100-04.png" alt="Finca-Propia-Logo" />
                                </div>
                                </section>
                           
                                    </section>
                                                           
                                <h2 className='foot' >Conoce más sobre cómo ser dueño o comunicate con un asesor comercial.</h2>
                                <section className="conocer-mas">
                                <section className='buttons'>
                                <Navegar to="/ser-dueno">
                                <button className='dorado'>Descargar el análisis sensorial</button>
                                <Navegar to="/ser-dueno">
                                <button className='dorado'>Ser Dueño</button>
                                </Navegar>
                                </Navegar>
                                <Navegar to="/ser-dueno">
                                <button className='dorado'>Contactar un asesor comercial</button>
                                </Navegar>
                        </section>
                        </section>
                        
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default LosVinos