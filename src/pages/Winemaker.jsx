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
                        
                        <article className='vines-grid-reverse' >
                                <div className='vines-item'>
                                    <div className='wineMakerImage1'>
                                                <img src="/Images/winemaker/antonio-mas-antonio-mas-698x1024-1.jpg" alt="Antonio Mas" />
                                    </div>
                                    <div className='innovacion'>
                                             <h3>Biografía</h3>
                                            <span className='light'>&bull; 1968 Viajó a la Patagonia y transformó el proceso de vinificación en los años siguientes. Puso los cimientos del actual terroir patagónico, ya que comenzó a estudiar las variedades de vino y vinificar las variedades rojas y blancas por separado.</span>
                                            <span className='light'>&bull; 1992 Fundó la primera bodega boutique argentina: Finca La Anita, donde se inspiró en el concepto de Château francés: viñedos de gran pureza genética y variedad, identificando clones de cada variedad, y cultivando uvas y vinificándolas cerca del mismo lugar donde se plantaron, a partir de parcelas específicas, verdaderos viñedos individuales.</span>
                                            <span className='light'>&bull; 2010 Lanzó al mercado Finca Propia: el primer emprendimiento argentino que permitió al consumidor de vino comprar su propia parcela de viñedo y producir su propio vino liderado por Antonio</span>
                                            <span className='light'>&bull; 2012 Formó en parte de un proyecto de investigación junto con la UNIVERSIDAD JUAN AGUSTÍN MAZA, INTA (Instituto Nacional de Tecnología Agrícola) y FINCA PROPIA sobre «La influencia de las especies aromáticas en Malbec, Cabernet Sauvignon y Chardonnay Aromas».</span>
                                            <span className='light'>Mendocino de origen y recibido allí mismo de Ing. Agrónomo en el año 1968, comenzó su carrera en Río Negro Fundó las bases de lo que hoy es el terruño de la Patagonia como origen reconocido para la producción de vinos de calidad A inicios de la década de los 90, de vuelta en Mendoza funda Finca La Anita, un hito que marcó el comienzo de las bodegas boutique en Argentina, siendo uno de los primeros en darle a la enología un enfoque que prioriza el terroir de origen y las características que el mismo le da a los vinos A lo largo de su carrera se involucró fuertemente en la investigación y desarrollo, participando de diversos proyectos con el INTA En 2010 funda Finca Propia, un proyecto que comparte con dos de sus hijos En 2016 lanza la línea de vinos Antonio Mas.</span>
                                    </div>
                                </div> 
                                
                            </article>
                            <article className='innovacion2'>
                            <div className='vines-item'>
                            <h3>Historia y presente</h3>
                                     <span className='light'>Nacido en Mendoza, es el primero en su dinastía en forjar la pasión por la enología. Estudió Agronomía en la Universidad Nacional de Cuyo, de donde sus egresados se especializan en Enología y pueden ejercer la profesión.</span>
                                     <span className='light'>Egresó de sus estudios en el año 1968 y, ya desde aquel entonces, visualizó a la Patagonia Argentina como uno de los grandes lugares para producir vinos de la Argentina.</span>
                                     <span className='light'>Llegó al Alto Valle de Río Negro a producir su primer vino, un semillón de zonas frías. Esta variedad es con la que había rendido su última materia de la facultad. Se encontró con una vitivinicultura llevada adelante por inmigrantes, con viñedos implantados con variedades de uvas blancas y tintas en el mismo viñedo. Tal es así que hasta se vinificaban juntas, algo que inquietaba mucho a aquel joven agrónomo.</span>
                                     <span className='light'>Su obsesión por la ampelografía y la purificación genética de los viñedos lo llevo a descubrir variedades de vid que habían traído los inmigrantes e implantarlas y vinificarlas por separado. Desde aquel entonces, Antonio dedicó sus días al estudio de los distintos clones de los varietales que cultivaba y vinificaba.</span>
                                     <span className='light'>Buena parte de los años venideros le tocó transformar esa realidad junto con otros hombres de la época, formando parte de la generación que fundó las bases del actual terroir patagónico. Una búsqueda por la expresión genuina de cada región, que no hacía más que comenzar. En aquella región comenzó a trabajar activamente con el INTA (Instituto Nacional de Tecnología Agropecuaria) y realizo un post grado de Programación Agropecuaria en la FAO (Food & Agriculture Organization).</span>
                                     <span className='light'>Unos cuantos años después, en 1992 regresa a Mendoza y su bagaje de conocimientos y especialización vitivinícola lo llevan a fundar la primer bodega boutique de la Argentina: Finca La Anita. Antonio se focaliza en el concepto de Château Francés, todo apuntaba en los viñedos de gran pureza genética y varietal, identificación de clones de las distintas varietales. Producir las uvas y vinificarlas en el mismo lugar en el que se producen, de parcelas específicas, verdaderos single vineyards.</span>
                                     <span className='light'>Fue allí donde encontró su segundo gran desafío: desarrollar una bodega de pequeña escala y profesional, en un contexto en el que reinaban las de tamaño industrial y todo estaba dimensionado para éstas, comenzando por la tecnología. Sin más opciones, Antonio comenzó a desarrollar su propia maquinaria, inventando todo tipo de equipamientos dimensionados a su baja escala y a la alta calidad que perseguía. Incluso tuvo que importar barricas por sus propios medios ya que no se conseguían de otro modo. Todo este proceso debía culminar en un respeto total del equilibrio natural que empezaba en el viñedo y debía continuar en la bodega.</span>
                                     <span className='light'>En ese entonces, Agrelo era una zona olvidada de producción, es más se privilegiaban los cultivos de ajo. Antonio eligió el terroir de Agrelo como uno de los lugares con mayor proyección de la Mendoza de eso años y Tupungato como su otro lugar para producir vinos de altísima calidad. Hoy, ambas zonas vitivinícolas son consideradas de las mejores de Argentina y en ellas se han desarrollado una gran cantidad de proyectos y bodegas.</span>
                                     <span className='light'>En el año 2010 lanza al mercado Finca Propia. El primer emprendimiento Argentino que le permite al consumidor de vinos adquirir una pequeña porción de un viñedo y producir sus vinos de la mano de Antonio. Siempre quiso conocer y estar en contacto con las personas que bebían los vinos que él elaboraba, ese fue su desafío, conocerles las caras y escucharlos. Fue así que con su hijo Santiago Mas, diseñaron un producto para que el consumidor de vinos pudiera disfrutar de todo lo lindo que rodea la vitivinicultura, aprender, participar y poder beber y compartir sus propios vinos.</span>
                                     <span className='light'>Antonio Mas ha tenido una enorme influencia en la vitivinicultura Argentina en los últimos 27 años  años. Se destaca por conocer como pocos los secretos del viñedo. También por la permanente investigación y como consecuencia, innovación constante en todos los factores que influyen en la calidad del vino.</span>
                                     <span className='light'>La innovación, la visión a futuro de la industria, el manejo del terroir y vinos de la más alta calidad son sinónimo de Mas.</span>
                                     <div className='wineMakerImage2'>
                                                <img src="/Images/winemaker/antonio.jpg" alt="Antonio Mas" />
                                    </div>
                                    <div className='wineMakerImage2'>
                                                <img src="/Images/home/procesos-04.jpg" alt="Antonio Mas" />
                                    </div>
                                    <div className='wineMakerImage2'>
                                                <img src="/Images/Finca/procesosuvas-02.jpg" alt="Antonio Mas" />
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
            


{/* <article>
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
                        </article> */}