import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa, faCcMastercard, faPix } from '@fortawesome/free-brands-svg-icons';
import logo from "../../public/logo.jpg"
export function Footer() {


    return (
        <footer className=" bg-zinc-950/85 text-zinc-100/90 border-t-2 border-red-700 roboto-light flex flex-col justify-center items-center gap-2 py-6">
            <img src={logo} alt='logo da empresa' className='rounded-full mt-3 w-32' />

            <div className='flex gap-3'>
                <a href="https://www.instagram.com/rdchurrasco/" target="_blank">Instagram</a>
                <a href='#'>Contato</a>
                <a href="https://www.facebook.com/rdchurrascorj" target="_blank">Facebook</a>
            </div>

            <div className='w-full h-full flex justify-center items-center gap-2 text-xl'>

                <div className='text-center'>
                    <h1>formas de pagamento</h1>
                </div>

                <FontAwesomeIcon icon={faCcVisa} className='size-8' />

                <FontAwesomeIcon icon={faCcMastercard} className='size-8' />

                <FontAwesomeIcon icon={faPix} className='size-8' />

            </div>

            <p>Rio de janeiro - RJ </p>

            <p>&copy; RD Churrasco. Todos os direitos reservados.</p>
        </footer>
    );
}