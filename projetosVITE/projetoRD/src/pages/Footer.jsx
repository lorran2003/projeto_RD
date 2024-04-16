import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa, faCcMastercard, faPix } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

export function Footer() {

        const [activateSobreNos, setActivateSobreNos] = useState(false);
        const [activatePagamento, setPagamento] = useState(false);


    return (
        <footer className=" bg-zinc-950/85 text-zinc-100/90 border-t-2 border-red-700">
            <div className='w-full h-full flex justify-center items-start gap-6 py-9 max-md:flex-col max-md:justify-center max-md:items-center'>

                <div className={'w-60 flex flex-col text-justify justify-start items-center shadow-zinc-900/70 shadow-[0_0_2px_1px] rounded-2xl bg-zinc-500/10 h-8 overflow-hidden duration-1000 hover:duration-1000 cursor-pointer hover:shadow-sm hover:shadow-red-900 ' + (activateSobreNos ? 'h-80' : '')} onClick={() => setActivateSobreNos(! activateSobreNos)} >   
                    

                    <div className=' w-full shadow-zinc-950 shadow-[0_0_2px] text-center bg-zinc-800 py-1' >
                        <h1>Sobre nos</h1>
                    </div>

                    <div className='w-4/5 p-1'>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>

                </div>

                <div className={'w-60 flex flex-col text-justify justify-start items-center shadow-zinc-900/70 shadow-[0_0_2px_1px] rounded-2xl bg-zinc-500/10 h-8 overflow-hidden duration-1000 hover:duration-1000 cursor-pointer hover:shadow-sm hover:shadow-red-900 ' + (activatePagamento ? 'h-80' : '')} onClick={() => setPagamento(! activatePagamento)} >

                    <div className=' w-full shadow-zinc-950 shadow-[0_0_2px] text-center bg-zinc-800 py-1'>
                        <h1>formas de pagamento</h1>
                    </div>

                    <div className="w-4/5 p-1 flex flex-col gap-4 items-center justify-center">
                        <FontAwesomeIcon icon={faCcVisa} className='size-16' />
                        <FontAwesomeIcon icon={faCcMastercard} className='size-16' />
                        <FontAwesomeIcon icon={faPix} className='size-16'    />
                        <p>PIX</p>
                    </div>
                </div>
            </div>

            <div className='w-full flex items-center justify-center py-5'>
                <img src="" alt="Foto com cliente" className='w-80 h-80 bg-zinc-500 rounded-xl' />
            </div>
        </footer>
    );
}