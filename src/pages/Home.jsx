import React, { useEffect } from 'react'
import Footer from '../components/partials/Footer'
import videoHome from '../assets/home/Finca-propia-sin-sonido-arreglo-1.mp4'

function Home({setIsMenuOpen}) {
console.log('VIDEO HOME--->', videoHome);
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
			const windowWidth = window.innerWidth;
			let valorAlto = 0
			if(windowWidth < 500){
				const element = document.querySelector('#megavideofinca');
				element.style.setProperty('min-width', '500px');
				valorAlto = 500
			}
			const windowHeight = window.innerHeight - valorAlto;

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

	const toggleMenu = () => {
        setIsMenuOpen(false);
    };

	return (
		<div className='Home' id="scroll-animate-main" onClick={toggleMenu}>
			<div className="wrapper-parallax">
				<div className='parallax-container'>
					
				<video src="/Images/home/Finca-propia-sin-sonido-arreglo-1.mp4"  autoPlay={true} loop={true} muted="muted" id='megavideofinca'></video>

            {/* <video autoPlay loop muted playsInline>
              <source
                src="/Images/home/Finca-propia-sin-sonido-arreglo-1.mp4"
                type="video/mp4"
              />
            </video> */}
				</div>
				
				<div className='Home content'>
					<section className='cards container'>
						<article className='experiencia'>
							<div>
								<img src="/Images/home/Vendimia-Uvas-Blancas-163-scaled-e1679414395201.jpg" alt="Experiencia" />
							</div>
							<div className='descripcion'>
								<p><span>Viví</span> la Experiencia</p>
								<small>Disfrutá ser dueño de tu propio vino.</small>
							</div>
						</article>
						<article className='expresion'>
							<div>
								<img src="/Images/home/procesos-04.jpg" alt="expresión" />
							</div>
							<div className='descripcion'>
								<p><span>La expresión</span> de tu Terroir</p>
								<small>Vinos intensos que nacen en el mejor viñedo.</small>
							</div>
						</article>
						<article className='amigos'>
							<div>
								<img src="/Images/home/IMG_4568-scaled-e1680126418462.jpg" alt="amigos" />
							</div>
							<div className='descripcion'>
								<p><span>Compartir con</span> Amigos</p>
								<small>El fruto de tu producción.</small>
							</div>
						</article>
						<article className='dueño'>
							<div>
								<img src="/Images/home/MG_0160-scaled-e1680126635925.jpg" alt="dueño" />
							</div>
							<div className='descripcion'>
								<p><span>Sé</span> Dueño</p>
								<small>De la tierra.</small>
							</div>
						</article>
					</section>
				</div>
				<Footer />
			</div>
		</div>
	)
}

export default Home