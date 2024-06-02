import { Home } from '../components/Home';
import bg from "../assets/image/bgBuffe.jpg";
import { DesktopView } from '../components/DesktopView';
import { MobileView } from '../components/MobileView';
import { useMobile } from '../components/useMobile';


export function Main() {

    const mobile = useMobile();

    return (

        <main className='flex flex-col text-zinc-50 bg-fixed bg-cover' style={{ backgroundImage: `URL(${bg})` }}>

            <div className="w-full h-full">
                
                <Home />

                {/* condição para mudar os components conforme a responsividade */}
                {mobile ?  <MobileView /> : <DesktopView /> }

            </div>
        </main>
    );

}

