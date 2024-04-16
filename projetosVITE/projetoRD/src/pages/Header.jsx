import logo from "../assets/icons/logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

export function Header() {
    return (
        <header className="flex items-center justify-between max-w-full border-t-8 py-6 border-red-800 px-28 bg-zinc-950/85 text-zinc-100/90 shadow-sm shadow-zinc-700">

            <div className="w-5/12 h-36 max-md:hidden md:max-lg:w-2/5">
                <img src={logo} alt="Logo" className="w-36 rounded-full" />
            </div>

            <div className="flex justify-between items-center w-[45.5rem] md:max-lg:w-[26rem] max-md:flex-col max-md:justify-center max-md:w-full max-md:gap-4 ">
                <div className="text-center">
                    <h1 className="text-4xl">
                        RD 
                        <br />
                        Churrasco
                    </h1>
                    <p>
                        churrasco & eventos
                    </p>
                </div>

                <div>
                    <nav className="text-zinc-50/80 flex items-center justify-center md:max-lg:flex-col md:max-lg:gap-5">

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
            </div>
        </header>
    );
}