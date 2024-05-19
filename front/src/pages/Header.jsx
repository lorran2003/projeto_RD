import logo from "../assets/icons/logo-removebg-preview.png";
import video from "../assets/video.mp4"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

export function Header() {
    return (
        <header className="relative -z-10 border-red-800 px-28 text-zinc-100/90 shadow-sm shadow-zinc-700 h-screen">

            <div className="absolute w-full h-screen inset-0">
                <video autoPlay muted loop className="object-cover w-full h-screen">
                    <source src={video} type="video/mp4" />
                </video>
            </div>


            <div className="flex flex-col items-center justify-start gap-9 absolute z-10 w-full h-screen bg-zinc-950/40 inset-0 overflow-hidden">

                <div className="flex flex-col w-4/5 justify-center items-center sm:flex-row sm:justify-between">

                    <div className="w-48 h-48">
                        <img src={logo} alt="Logo" className="w-full h-full" />
                    </div>

                    <nav className="text-zinc-50/80 flex items-center justify-center">
                        <div className="border-red-800 border-r-4 px-2 flex items-center justify-center gap-2 hover:text-zinc-50 transition delay-75 w-32">
                            <a>
                                <FontAwesomeIcon icon={faSquareFacebook} className="size-5" />
                            </a>
                            <a href="#">Facebook</a>
                        </div>
                        <div className="border-red-800 border-r-4 px-2 flex items-center justify-center gap-2 hover:text-zinc-50 transition delay-75 w-32   ">
                            <a>
                                <FontAwesomeIcon icon={faInstagram} className="size-5" />
                            </a>
                            <a href="https://www.instagram.com/rdchurrasco/" target="_blank">Instagram</a>
                        </div>
                    </nav>
                </div>


                <div className="text-justify flex flex-col gap-8 w-full h-4/5">

                    <div className="flex w-full justify-center items-center text-5xl sm:text-6xl text-zinc-50 after:content-[''] after:bg-[#8F1620] after:h-0.5 after:w-1/4 sm:after:w-2/5 after:block before:h-0.5 before:w-1/4 sm:before:w-2/5 before:block before:bg-[#8F1620]">

                        <h1 className="w-56 sm:w-80 text-5xl text-center dacingScript">
                            <strong>Seja bem vindo!</strong>
                        </h1>

                    </div>

                    <div className="text-center">
                        <h1 className="text-5xl w-full text-center">
                            RD
                            <br />
                            Churrasco
                        </h1>
                        <p className="text-xl">
                            Churrasco & Eventos
                        </p>
                    </div>

                    <div className="relative w-full sm:w-4/5 h-48 sm:h-[30%] flex flex-col justify-center items-center text-zinc-50 sm:rounded bg-zinc-950/20 sm:m-auto

                        after:content-[''] after:bg-[#8F1620] after:opacity-50 after:h-0.5 after:w-full after:block after:absolute after:bottom-0
                        before:h-0.5 before:w-full before:block before:bg-[#8F1620] before:opacity-50 before:absolute before:top-0">


                        <p className="text-2xl sm:text-4xl px-1 sm:px-2 greatVibesRegular">Transformando eventos há mais de [anos] em uma celebração inesquecível da vida, do amor e da boa companhia. Junte-se a nós para uma festa que alimenta a alma com sabores que ficam na memória.</p>
                    </div>
                </div>
            </div>
        </header>
    );
}