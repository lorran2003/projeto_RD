import { useState, useEffect } from 'react';
import { Home } from '../components/Home';
import bg from "../assets/image/bgBuffe.jpg";
import { DesktopView } from '../components/DesktopView';
import { MobileView } from '../components/MobileView';


export function Main() {

    const [innerWidth, setInnerWidth] = useState(false);


    useEffect(() => {

        function handleResize() {
            window.innerWidth > 1020 ? setInnerWidth(true) : setInnerWidth(false)
        }

        handleResize();

        window.addEventListener('resize', handleResize)

        return () => { window.removeEventListener('resize', handleResize) }
    }, [])

    return (

        <main className='flex flex-col text-zinc-50 bg-fixed bg-cover' style={{ backgroundImage: `URL(${bg})` }}>

            <div className="w-full h-full">
                
                <Home />

                {/* condição para mudar os components conforme a responsividade */}
                {innerWidth ? <DesktopView /> : <MobileView /> }

            </div>
        </main>
    );

}

