import { useEffect, useState } from "react";

export function useMinHeight (){

    const [ocultarImage, setOcultarImage] = useState(Boolean);

    useEffect(() => {

        function handleResize() {
            window.innerHeight < 570 ? setOcultarImage(true) : setOcultarImage(false)
        }

        handleResize();

        window.addEventListener('resize', handleResize)

        return () => { window.removeEventListener('resize', handleResize) }
    }, [])

    return ocultarImage;
}