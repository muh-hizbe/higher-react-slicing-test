import { InputBase } from "@mui/material"

export const Input = (props) => {
    return (
        <InputBase
            type={'text'}
            {...props}
            placeholder={props?.placeholder}
            className={`placeholder:!text-gray-800 !text-gray-800 !text-xs px-4 py-3 !rounded-lg !bg-white !font-sans ${props?.className}`}
        />
    )
}