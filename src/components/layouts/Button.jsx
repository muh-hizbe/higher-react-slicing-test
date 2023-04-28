export const Button = ({ children, ...props }) => {
    return (
        <button
            {...props}
            className={`!rounded-lg px-4 py-3 ${props?.className}`}
        >
            {children}
        </button>
    )
}