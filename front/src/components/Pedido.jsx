import { DadosClientes } from "./DadosCliente";

export function Pedido() {
    return (
        <div className="h-screen w-full flex flex-col justify-center items-center">
            <div className="bg-zinc-800 lg:w-1/3 rounded-lg w-11/12 h-auto roboto-light">
                <DadosClientes />
            </div>
        </div>

    )
}