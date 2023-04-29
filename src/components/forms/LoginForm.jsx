import { Link } from "react-router-dom"
import { Button } from "../layouts/Button"
import { Input } from "../layouts/Input"
import { InputPassword } from "../layouts/InputPassword"
import { Apple, FacebookOutlined, Google, Close } from "@mui/icons-material"
import { Image } from "../layouts/Image"
import HigherLogo from '../../../src/assets/logo-tp.png';

export const LoginForm = () => {
    return (
        <div className="flex flex-col py-5 md:p-10 md:max-w-[450px] mx-auto">
            <a href='https://flyhigher.id' className='hidden md:flex absolute top-5 right-5'>
                <Close
                    className='hover:cursor-pointer text-white'
                />
            </a>

            <div className='w-full flex flex-col gap-5'>
                <div className='hidden md:flex flex-col items-center justify-center'>
                    <Image
                        src={HigherLogo}
                        className='!h-24 !w-24'
                        alt='logo higher'
                        loading='lazy'
                    />

                    <div className='text-white text-2xl font-semibold'>
                        Higher
                    </div>
                </div>

                <div className='flex flex-col gap-5'>
                    <div className='hidden md:flex px-3'>
                        <Button
                            className={'bg-white text-sm flex gap-1 items-center justify-center whitespace-nowrap !rounded-full !py-1 !px-2 w-full'}
                            onClick={() => {
                                window.location.href = 'https://flyhigher.id/auth/redirect'
                            }}
                        >
                            <Google className="!w-5 !h-5" />
                            <span>
                                Continue With Google
                            </span>
                        </Button>
                    </div>

                    <div className='hidden md:flex text-white my-2'>
                        Or Signin With
                    </div>

                    <form className="flex flex-col gap-2">
                        <Input
                            label={'email'}
                            placeholder={'Email Address or Phone Number'}
                            type={'email'}
                            className={'!w-full md:placeholder:!text-gray-300 md:!text-gray-300 md:!text-sm md:!px-3 md:!py-2 md:!rounded-full md:!bg-gray-900/50'}
                        />
                        <InputPassword
                            label={'password'}
                            placeholder={'Password'}
                            className={'!w-full md:placeholder:!text-gray-300 md:!text-gray-300 md:!text-sm md:!px-3 md:!py-2 md:!rounded-full md:!bg-gray-900/50'}
                            iconClassName={'text-gray-800 md:text-white'}
                        />

                        <div className="w-full flex flex-col px-5 pt-5">
                            <Button
                                className={'bg-teal-400 text-white w-full mx-auto font-semibold text-sm md:!rounded-full md:px-5 md:py-2'}
                                type={'submit'}
                            >
                                Login
                            </Button>
                        </div>
                    </form>

                    <div>
                        <div className='text-gray-400 text-sm font-semibold text-center tracking-wide'>
                            Create an account? <a href='https://flyhigher.id/register' className='text-teal-500'>Sign Up</a>
                        </div>
                    </div>
                </div>

                <div className="md:hidden text-center py-5">
                    <Link to={'/forgot-password'}
                        className="text-white font-semibold text-sm text-center"
                    >
                        Forgot Password?
                    </Link>
                </div>

                <div className="w-full text-center px-5 flex flex-col gap-3">
                    <div className="md:hidden">
                        <p className="text-sm text-white text-center">
                            Or use a social account to login
                        </p>
                    </div>

                    <div className="flex md:hidden items-center justify-between text-white">
                        <div>
                            <Link to={'https://flyhigher.id/auth/redirect'}
                                className="bg-black rounded-full p-2 flex items-center justify-center"
                            >
                                <Google />
                            </Link>
                        </div>
                        <div>
                            <Link to={'https://flyhigher.id/auth/redirect'}
                                className="bg-black rounded-full p-2 flex items-center justify-center"
                            >
                                <Apple />
                            </Link>
                        </div>
                        <div>
                            <Link to={'https://flyhigher.id/auth/redirect'}
                                className="bg-black rounded-full p-2 flex items-center justify-center"
                            >
                                <FacebookOutlined />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}