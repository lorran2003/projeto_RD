import { useState } from "react"
import { DadosSalao } from "./DadosSalao";
import { CarrosselFotos } from "./CarrosselFotos";
import { VideoSalao } from "./VideoSalao";

export function Salao() {
    const [exibirInfo, setExibirinfo] = useState(false);
    return (
        <>
            <div className="text-center">

                <CarrosselFotos />
                <VideoSalao />

                <div className="sticky bottom-0">

                    <button className="shadow-black shadow-[0_0_2px] w-full bg-zinc-50 text-zinc-900 py-1 text-4xl animate-pulse greatVibesRegular" onClick={() => setExibirinfo(!exibirInfo)}>
                        Sobre salão
                    </button>

                    <div className={"bg-zinc-800 duration-700 overflow-hidden flex flex-col justify-center text-zinc-50 gap-2 " + (exibirInfo ? "h-[800px] sm:h-96" : "h-0")} >

                        <DadosSalao /> 

                    </div>
                </div>
            </div>
        </>
    )
}