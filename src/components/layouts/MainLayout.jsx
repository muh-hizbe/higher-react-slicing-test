import { Image } from "./Image"
import HigherLogo from '../../assets/logo-tp.png';
import { Menu } from "./Menu";

export const MainLayout = ({ children }) => {
    return (
        <div className={`h-screen w-full justify-center bg-[url('/image/bg.png')] md:bg-none bg-no-repeat bg-cover bg-center overflow-hidden p-12 md:p-0`}>
            <div className='flex md:hidden flex-col items-center justify-center'>
                <Image
                    src={HigherLogo}
                    className='!h-28 !w-28'
                    alt='logo higher'
                    loading='lazy'
                />

                <div className='text-white text-sm'>
                    Higher
                </div>
            </div>

            <div className="mt-6 flex md:hidden">
                <Menu />
            </div>
            {children}
        </div>
    )
}