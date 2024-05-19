import { MapPage } from "../MapPage";

export function DadosSalao() {
    return (
        <>
            <div className="w-full h-96">
                <MapPage />
            </div>

            <div className="py-3">
                <div className="flex justify-center items-center gap-3">
                    <h1>Rua Ramiro Barcelos</h1>
                    <p>Numero: 80</p>
                </div>
                <p>Para x pessoas</p>
                <p>Piscina (medida)</p>
            </div>

        </>
    )
} 