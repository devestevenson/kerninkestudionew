import portfolio from "../db/Portfolio";
import services from "../db/Services"
import { ArrowUpRight } from "@phosphor-icons/react";
const Hero = () => {
  return (
    <div>
        <nav className="w-full py-4 px-4 sm:px-10 border-b border-gray-100">
            <ul className="flex justify-between items-center">
                <a href="" className="text-sm font-normal">KERNINK ESTUDIO</a>
                <a href="" className="hoverLink text-sm font-light hidden sm:block">Servicios</a>
                <a href="" className="hoverLink text-sm font-light hidden sm:block">Trabajos</a>
                <a href="" className="hoverLink text-sm font-light">Contacto</a>
            </ul>
        </nav>

        <header className="my-[140px] sm:my-[200px] px-4 sm:px-10 animate-fade-in-down animate-duration-600">
            <h1 className="text-lg mb-4 sm:mb-0">Trasmitimos ideas a través del diseño, logrando que los espectadores capten el mensaje que las marcas quieren comunicar.</h1>
            <h2 className="text-lg">Somos un equipo con experiencia en diferentes áreas del diseño grafico.</h2>
        </header>

        <section className="mb-[140px] sm:mb-[200px]">
            <h3 className="mb-6 ml-4 sm:ml-10 font-semibold animate-fade-in-down animate-duration-700">Servicios</h3>
            <div className="grid grid-cols-1 animate-fade-in-down animate-duration-800">
                {services.map(service => (
                    <a href={service.urlWapp} key={service.id} className="grid grid-cols-1 sm:grid-cols-3 place-content-center h-[220px] sm:h-40 border border-gray-100 px-4 sm:px-10 transition text-[#505050] hover:text-[#161616]">
                        <h4 className="mb-4 sm:mb-0">{service.name}</h4>
                        <p className="w-full max-w-[634px]">{service.description}</p>
                        <div className="hidden sm:flex justify-end items-center"><ArrowUpRight size={20} className="ml-auto"/></div>
                    </a>
                ))}
            </div>
        </section>

        <section className="mb-[140px] sm:mb-[200px]">
            <article className="flex flex-col sm:flex-row justify-between items-start">
                <h3 className="mb-6 ml-4 sm:ml-10 font-semibold animate-fade-in-down animate-duration-900">Trabajos</h3>
                <div className="grid grid-cols-1 gap-10 animate-fade-in-down animate-duration-1000">
                    {portfolio.map(portfolio => (
                        <a href={portfolio.link} key={portfolio.id}>
                            <picture className="block ml-auto w-full max-w-[96%] sm:max-w-[1024px] h-[600px] sm:h-[800px] bg-slate-500 overflow-hidden">
                                <img src={portfolio.imgURL} alt={portfolio.name} className="w-full h-full object-cover transition hover:scale-105"/>
                            </picture>
                        </a>
                    ))}
                </div>
            </article>
        </section>

        <footer className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0 items-start px-4 py-10 sm:px-10 border-t border-gray-100">
            <h4 className="text-sm font-medium">KERNINK ESTUDIO <span>&copy;{new Date().getFullYear()}</span></h4>
            <ul>
                <li><a href="mailto:elcorreoquequieres@correo.com?Subject=Aquí%20el%20asunto%20del%20mail" target="_blank" className="hoverLink text-sm">Correo electrónico</a></li>
                <li><a href="tel:+" target="_blank" className="hoverLink text-sm">Whatsapp</a></li>
            </ul>
            <ul>
                <li><a href="" target="_blank" className="hoverLink text-sm">Behance</a></li>
                <li><a href="" target="_blank" className="hoverLink text-sm">Instagram</a></li>
            </ul>
        </footer>
    </div>
  )
}

export default Hero