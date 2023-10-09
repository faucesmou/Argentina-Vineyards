import React, { useEffect } from 'react'
import Footer from '../components/partials/Footer';
import Navegar from '../components/Navegar/Navegar';

function Winemaker() {

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
        <div id="scroll-animate-main" className='Winemaker'>
            <div className="wrapper-parallax">
                <div className='parallax-container' style={{ backgroundImage: `url(${'/Images/winemaker/portada-winemaker4-03-e1586186921902.jpg'})` }}>
                    <h1>Winemaker</h1>
                </div>
                <div className='content'>
                    <section className='datos'>
                        <h2 className='titular-principal'>Pionero de la vitivinicultura Argentina</h2>
                        <article>
                                <div className='vines'>
                                    <div className='innovacion'>
                                        <h3 className='titular-secundario'>Antonio Mas</h3>
                                        <p className='drop-cap'><span className="letraGrande">E</span>n el año 2010 Antonio volvió a innovar con Finca Propia, un proyecto con el que se dio el gusto de tomarse el tiempo para elegir el viñedo de sus sueños, luego de recorrer tanto los terruños conocidos como los más recónditos de su querida provincia, terminó enamorándose de unas tierras enmarcadas por la cordillera, con un importante desnivel entre los dos extremos, y con un suelo que le brindaría un estilo con la intensidad y elegancia que siempre buscó para sus vinos. Allí, en el Paraje Dubois, La Arboleda, a 7 kilómetros del pueblo de Tupungato, rodeado de los viñedos más renombrados de la Argentina, Antonio apostó a hacer algo diferente.</p>
                                        <span className='light'>Este proyecto nace del deseo y de la inquietud de conocer, tratar en forma directa, y compartir momentos con aquellos que toman sus vinos, que hacer un vino no se limite a venderlo a un comercio, sino ir un poco más allá. Con el proyecto de Finca Propia, Antonio no solo se dedica a seguir elaborando vinos memorables, sino que también se da el gusto de compartir experiencias con aquellos que lo acompañan en este proyecto, con aquellos que adquirieron partes de este viñedo sobresaliente y que valoran y disfrutan de hacer un producto de la tierra, de aprender lo que implica hacer un vino de terruño.</span>
                                        <span className='light'>Este proyecto nace del deseo y de la inquietud de conocer, tratar en forma directa, y compartir momentos con aquellos que toman sus vinos, que hacer un vino no se limite a venderlo a un comercio, sino ir un poco más allá. Con el proyecto de Finca Propia, Antonio no solo se dedica a seguir elaborando vinos memorables, sino que también se da el gusto de compartir experiencias con aquellos que lo acompañan en este proyecto, con aquellos que adquirieron partes de este viñedo sobresaliente y que valoran y disfrutan de hacer un producto de la tierra, de aprender lo que implica hacer un vino de terruño.</span>
                                     </div>
                                    <div className='wineMakerImage1'>
                                             <img  src="/Images/winemaker/antonio.jpg" alt="Antonio Mas Nieve" />
                                     </div>
                                </div>
                        </article>
                        
                        <article className='vines-grid-reverse' >
                                <div className='vines-item'>
                                    <div className='wineMakerImage1'>
                                                <img src="/Images/winemaker/antonio-mas-antonio-mas-698x1024-1.jpg" alt="Antonio Mas" />
                                    </div>
                                    <div className='innovacion'>
                                             <h3>Biografía</h3>
                                            <span className='light'>Mendocino de origen y recibido allí mismo de Ing. Agrónomo en el año 1968, comenzó su carrera en Río Negro Fundó las bases de lo que hoy es el terruño de la Patagonia como origen reconocido para la producción de vinos de calidad A inicios de la década de los 90, de vuelta en Mendoza funda Finca La Anita, un hito que marcó el comienzo de las bodegas boutique en Argentina, siendo uno de los primeros en darle a la enología un enfoque que prioriza el terroir de origen y las características que el mismo le da a los vinos A lo largo de su carrera se involucró fuertemente en la investigación y desarrollo, participando de diversos proyectos con el INTA En 2010 funda Finca Propia, un proyecto que comparte con dos de sus hijos En 2016 lanza la línea de vinos Antonio Mas</span>
                                            <span className='light'>Mendocino de origen y recibido allí mismo de Ing. Agrónomo en el año 1968, comenzó su carrera en Río Negro Fundó las bases de lo que hoy es el terruño de la Patagonia como origen reconocido para la producción de vinos de calidad A inicios de la década de los 90, de vuelta en Mendoza funda Finca La Anita, un hito que marcó el comienzo de las bodegas boutique en Argentina, siendo uno de los primeros en darle a la enología un enfoque que prioriza el terroir de origen y las características que el mismo le da a los vinos A lo largo de su carrera se involucró fuertemente en la investigación y desarrollo, participando de diversos proyectos con el INTA En 2010 funda Finca Propia, un proyecto que comparte con dos de sus hijos En 2016 lanza la línea de vinos Antonio Mas</span>
                                            <span className='light'>Mendocino de origen y recibido allí mismo de Ing. Agrónomo en el año 1968, comenzó su carrera en Río Negro Fundó las bases de lo que hoy es el terruño de la Patagonia como origen reconocido para la producción de vinos de calidad A inicios de la década de los 90, de vuelta en Mendoza funda Finca La Anita, un hito que marcó el comienzo de las bodegas boutique en Argentina, siendo uno de los primeros en darle a la enología un enfoque que prioriza el terroir de origen y las características que el mismo le da a los vinos A lo largo de su carrera se involucró fuertemente en la investigación y desarrollo, participando de diversos proyectos con el INTA En 2010 funda Finca Propia, un proyecto que comparte con dos de sus hijos En 2016 lanza la línea de vinos Antonio Mas</span>
                                    </div>
                                </div> 
                                
                            </article>
                            <div className='bottomPage'>
                                <h2 className='foot'>Conocé más sobre nuestros vinos</h2>
                        
                             <Navegar to="/los-vinos" >
                                <button className='dorado'>Los vinos</button>
                            </Navegar>
                            </div>
                    </section>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Winemaker