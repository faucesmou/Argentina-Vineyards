import React, { useEffect } from 'react'
import Slider from '../components/Slider/Slider';
import Footer from '../components/partials/Footer';

function Dueño() {

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
            const heightDocument = windowHeight + contentHeight + footerHeight - 0;

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
        <div id="scroll-animate-main">
            <div className="wrapper-parallax">
                <div className='parallax-container' style={{ backgroundImage: `url(${'/Images/dueno/Cosecha-Nocturna-2018-24-02-137-scaled-1.jpg'})` }}>
                    <h1>Ser Dueño</h1>
                </div>
                <div className='content'>
                    <div className="Dueño">
                        <section className='sueño'>
                            <h2>El sueño de la finca propia</h2>
                            <p className='drop-cap'><span className='letraGrande'>N</span>uestra misión es acompañar a todos los amantes del vino en un camino de crecimiento y aprendizaje como productores vitivinícolas.
                                <br />Ser parte de Finca Propia significa ser dueño de un viñedo en el mejor terroir de la Argentina.
                                <br />Agasaja a tus seres queridos con tu producción de <span className='dorado'>vinos</span>. Tu finca, tu legado para toda la vida.</p>
                            <p className='menor'>En el camino te proponemos 3 formas distintas de hacerlo realidad: 24 vides, Hilera y Terroir</p>
                        </section>
                        <section className='vides'>
                            <article className="produccion">
                                <div>
                                    <img src="/Images/dueno/24-vides-real-scaled.jpg" alt="Lineas de produccion" />
                                </div>
                                <h4>24 VIDES</h4>
                                <p>Podés ser dueño de 40mts lineales de vid (100m2), 75kg de uvas por cosecha, equivalente a una producción de 72 botellas de vino La Arboleda personalizadas con tu nombre o firma, junto a la del enólogo Antonio Mas. <span>Cosecha asegurada sin riesgos.</span></p>
                            </article>
                            <article className="produccion">
                                <div>
                                    <img src="/Images/dueno/hilera-scaled.jpg" alt="Lineas de produccion" />
                                </div>
                                <h4>HILERA</h4>
                                <p>Accedé a 80mts lineales (200m2), 48 plantas que producen 150kgs de uva equivalente a 144 botellas de La Arboleda con tu personalización junto a la firma del enólogo Antonio Mas.<span>Cosecha asegurada sin riesgos.</span></p>
                            </article>
                            <article className="produccion">
                                <div>
                                    <img src="/Images/dueno/terroir-scaled.jpg" alt="Lineas de produccion" />
                                </div>
                                <h4>TERROIR</h4>
                                <p>Podés ser dueño de 210mts lineales de vid (500m2), con una producción de 375kgs de uva, equivalente a 360 botellas por cosecha. Esta opción te brinda la posibilidad de crear tu propia marca y etiqueta completa. <span>Cosecha asegurada sin riesgos.</span></p>
                            </article>
                            <div className='boton-finca'>
                                <button className='propia-finca'>Quiero tener mi propia Finca</button>
                            </div>
                        </section>
                        <section className='logoNegro'>
                            <div className='contenedor-slider'>
                                <Slider />
                            </div>
                            <div className='imagen-logo'>
                                <img src="/Images/footer/logo-blanco-fondo-negro-150x100-04.png" alt="Finca-Propia-Logo" />
                            </div>
                        </section>
                        <section className='comparativo'>
                            <div>
                                <img src="/Images/dueno/PRECIOS-WEB-actualizado-2023-1024x699.png" alt="especificaciones" />
                            </div>
                            <button>Descarga el cuadro comparativo</button>
                        </section>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )

}

export default Dueño