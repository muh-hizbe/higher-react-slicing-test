import { Link } from "react-router-dom"
import { Button } from "../layouts/Button"
import { Input } from "../layouts/Input"
import { InputPassword } from "../layouts/InputPassword"
import { Apple, FacebookOutlined, Google } from "@mui/icons-material"

export const RegisterForm = () => {
    return (
        <div className="flex flex-col py-5">
            <form className="flex flex-col gap-2">
                <Input
                    label={'email'}
                    placeholder={'Email Address or Phone Number'}
                    type={'email'}
                    className={'!w-full'}
                />
                <InputPassword
                    label={'password'}
                    placeholder={'Password'}
                    className={'!w-full'}
                    iconClassName={'text-gray-800'}
                />
                <InputPassword
                    label={'password'}
                    placeholder={'Confirm Password'}
                    className={'!w-full'}
                    iconClassName={'text-gray-800'}
                />

                <div className="w-full flex flex-col px-5 pt-5">
                    <Button
                        className={'bg-teal-400 w-full mx-auto font-semibold text-sm'}
                        type={'submit'}
                    >
                        Create Account
                    </Button>
                </div>
            </form>

            <div className="w-full text-center px-5 flex flex-col gap-3 py-5">
                <div className="py-3">
                    <p className="text-sm">
                        Or use a social account to create account
                    </p>
                </div>

                <div className="flex items-center justify-between">
                    <div>
                        <Link to={'/auth/redirect/google'}
                            className="bg-black rounded-full p-2 flex items-center justify-center"
                        >
                            <Google />
                        </Link>
                    </div>
                    <div>
                        <Link to={'/auth/redirect/apple'}
                            className="bg-black rounded-full p-2 flex items-center justify-center"
                        >
                            <Apple />
                        </Link>
                    </div>
                    <div>
                        <Link to={'/auth/redirect/facebook'}
                            className="bg-black rounded-full p-2 flex items-center justify-center"
                        >
                            <FacebookOutlined />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}