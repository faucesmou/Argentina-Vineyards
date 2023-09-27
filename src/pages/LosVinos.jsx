import React, { useEffect } from 'react'
import Footer from '../components/partials/Footer'

function LosVinos() {

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
                    <div className='elementos'>
                        <section className='vinos'>
                            <article className='signature'>
                                <h3>Finca Propia Signature</h3>
                                <p className='drop-cap'><span span className='letraGrande'>T</span>al como lo hizo con aquel Syrah de Finca La Anita, Antonio Mas continúa sorprendiéndonos con un estilo de vinos que, reflejando las características del terroir de La Arboleda, tienen un perfil aromático intenso y fresco por el equilibrio de la acidez.</p>
                                <span>Al adquirir tu hilera en Viña La Arboleda, podés recibir tu producción en vinos personalizados con tu nombre y firma. Los propietarios de Terroir además, contarán con el beneficio de diseñar su propia etiqueta, proceso que implica el registro de la marca en el INPI y aprobación por el Instituto Nacional de Vitivinicultura {`(INV)`}.</span>
                            </article>
                            <article>
                                <img src="" alt="Seleccion de vinos" />
                            </article>
                        </section>
                        <section>
                            <img src="" alt="Analisis sensorial" />
                            <button>Descargar el análisis sensorial</button>
                        </section>
                        <section>
                            <h1>Conoce más sobre cómo ser dueño o comunicate con un asesor comercial.</h1>
                            <div className='buttons'>
                                <button className='black'>Ser Dueño</button>
                                <button className='gold'>Contactar un asesor comercial</button>
                            </div>
                        </section>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default LosVinos