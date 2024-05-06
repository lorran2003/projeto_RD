import { useState } from "react"
import { DadosClientes } from "../../../components/Salao/DadosCliente";
import { DadosSalao } from "../../../components/Salao/DadosSalao";

export function MainSalao() {
    const [exibirContato, setExibirContato] = useState(false);
    const [exibirInfo, setExibirinfo] = useState(false);
    return (
        <>
            <div className="text-center">

                <div className="h-screen w-full bg-zinc-800 flex justify-center items-center">
                    <img src="#" alt="fotos do salao" />
                </div>

                <div className="sticky bottom-0">
                    
                    <button className="shadow-black shadow-[0_0_2px] w-full bg-zinc-50 text-zinc-900 py-1" onClick={() => setExibirinfo(!exibirInfo)}>
                        Sobre salao
                    </button>

                    <div className={"bg-zinc-800 duration-700 overflow-hidden flex flex-col justify-center text-zinc-50 gap-2 " + (exibirInfo ? "h-72 sm:h-96" : "h-0")} >

                        <DadosSalao />

                    </div>

                    <button className="shadow-black shadow-[0_0_2px] w-full bg-red-900 text-zinc-50 py-1" onClick={() => setExibirContato(!exibirContato)}>
                        Contato
                    </button>

                    <div className={"bg-zinc-800 duration-700 overflow-hidden flex flex-col justify-center " + (exibirContato ? "h-[320px]" : "h-0")} >

                        <DadosClientes />

                    </div>
                </div>
            </div>
        </>
    )
}