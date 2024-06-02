import { useState, useEffect } from 'react';

export function useMobile (){

    const [mobile, setMobile] = useState(window.innerWidth < 640);

    useEffect(() => {

        function handleResize() {
            setMobile(window.innerWidth < 640) 
        }

        window.addEventListener('resize', handleResize)

        return () => { window.removeEventListener('resize', handleResize) }
    }, [])

    return mobile
}