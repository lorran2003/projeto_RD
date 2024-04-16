export function DadosClientes() {
    return (
        <div className="text-zinc-50 flex flex-col justify-center items-center gap-2 sm:gap-4">

            <p>
                Digite as seguintes informacoes:
            </p>

            <input type="text" placeholder="Nome completo" className=" rounded-md text-center shadow w-72 h-7 " />

            <div className="flex items-center justify-center gap-4 w-4/5">

                <p>Data do evento:</p>
                <input type="date" className=" rounded-md text-center shadow h-7 text-zinc-800 p-1" />

            </div>

            <div className="flex items-center justify-center gap-6 w-4/5">

                <p>Data de visita:</p>
                <input type="date" className=" rounded-md text-center shadow h-7 text-zinc-800 p-1" />

            </div>

            <button className="bg-zinc-400/10 p-2 rounded-md shadow-zinc-900 shadow-[0_0_0_1px] hover:shadow-white">
                Enviar
            </button>

        </div>
    )
}