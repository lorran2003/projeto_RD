import { useState, useEffect } from 'react';
import { Home } from '../components/Home';
import capaSalao from '../assets/image/salao/capaSalaoDesktop.jpeg';
import capaBuffet from '../assets/image/buffet/capaBuffetDesktop.jpeg';
import { Salao } from './MainPags/Salao/Salao';
import { Cardapio } from './MainPags/Buffet/Cardapio';
import bg from "../assets/image/bgBuffe.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faUtensils, faX } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';

export function Main() {

    const [cardapio, setCardapio] = useState(false);
    const [salao, setSalao] = useState(false);

    useEffect(() => {
        cardapio ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';

        return () => {
            document.body.style.overflow = 'auto';
        }
    },[cardapio]);

    return (
        <>
            <main className='flex flex-col text-zinc-50 bg-fixed bg-cover' style={{ backgroundImage: `URL(${bg})` }}>

                <div className="w-full h-full">
                    <Home />

                    <div className='flex flex-col sm:flex-row items-center justify-center'>

                        <div className='relative w-full sm:w-8/12'>

                            <img src={capaBuffet} alt='foto de picanha' className='w-full' />

                            <button id='cardapio' className='absolute flex justify-center items-center top-0 bg-zinc-50 text-zinc-800 w-full text-lg py-1' onClick={() => setCardapio(!cardapio)}>

                                <div>
                                    <FontAwesomeIcon icon={faUtensils} className={cardapio ? "animate-pulse" : "animate-bounce "} />
                                </div>

                                <span>
                                    Cardápio
                                </span>
                            </button>

                        </div>
                        <div className='sm:w-4/12 '>
                            <p className='text-justify px-1'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio saepe veniam tenetur repudiandae quisquam, fuga eaque earum harum, adipisci ratione nisi voluptates numquam, inventore est accusamus debitis non dolorem rerum.
                            </p>
                        </div>
                    </div>


                    <Modal 
                    isOpen={cardapio} 
                    onRequestClose={!cardapio} 
                    className={"object-cover inset-0 z-50"}>

                        <div className='relative w-full bg-fixed bg-cover'>
                        {/* style={{ backgroundImage: `URL(${bg})` }} */}
                            
                            <Cardapio />

                            <button className='absolute top-0 right-0 bg-[#F20505] w-10 h-10 rounded-lg' onClick={() => setCardapio(!cardapio)}>
                                <FontAwesomeIcon icon={faX} style={{color:"white"}} />
                            </button>
                        </div>
                    </Modal>


                    <div className='relative w-full flex flex-wrap items-center justify-center'>

                        <div className='w-full sm:object-left sm:w-full'>
                            <img src={capaSalao} alt='foto de picanha' className='sm:w-8/12' />

                            <button id='cardapio' className='absolute flex justify-center items-center top-0 bg-zinc-50 text-zinc-800 w-full text-lg py-1' onClick={() => setSalao(!salao)}>

                                <FontAwesomeIcon icon={faImage} className={salao ? "animate-pulse" : "animate-bounce"} />

                                <span>Fotos</span>

                            </button>
                        </div>

                        <div className='sm:absolute sm:w-4/12 sm:right-0'>
                            <p className='text-justify px-1'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio saepe veniam tenetur repudiandae quisquam, fuga eaque earum harum, adipisci ratione nisi voluptates numquam, inventore est accusamus debitis non dolorem rerum.
                            </p>
                        </div>
                    </div>

                    <div className={'duration-1000 overflow-hidden ' + (salao ? "h-[970px]" : "h-0")}>
                        <Salao />
                    </div>
                </div>
            </main>
        </>
    );

}

