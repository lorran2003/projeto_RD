import { useState } from "react";
import { CarrosselEntrada } from "../../../components/buffe/CarrosselEntrada";
import { CarrosselCarnes } from "../../../components/buffe/CarroselCarnes";
import { CarrosselGuarnicao } from "../../../components/buffe/CarroselGuarnicao";
import { CarrosselSobremesa } from "../../../components/buffe/CarrosselSobremesa";
import { CarrosselBebidas } from "../../../components/buffe/CarroselBebidas";

export function Cardapio() {

    const [pacote, setPacote] = useState(0);

    function identificarPacote(pacote) {
        switch (pacote) {
            case 1:
                return "20 a 29";
            case 2:
                return "30 a 49";
            case 3:
                return "50 a 100";
            case 4:
                return "a partir 101";
            default:
                break;
        }
    }

    return (
        <div className="w-full h-full flex justify-center items-center flex-col z-30">

            <div className="text-zinc-50 w-full flex flex-col gap-5">

                <div className="flex flex-col justify-start items-center h-full w-full text-zinc-50">

                    <CarrosselEntrada />
                    <CarrosselCarnes />
                    <CarrosselGuarnicao />
                    <CarrosselSobremesa />
                    <CarrosselBebidas />

                </div>
            </div>

            <div className="relative w-full h-12">
                <button className="absolute bottom-0 w-full h-9 bg-zinc-950 duration-200 hover:duration-200 hover:bg-[#F20505] z-10 text-zinc-50" onClick={identificarPacote(pacote)}>Obtenha seu orçamento personalizado agora!</button>
            </div>
        </div>
    )
}