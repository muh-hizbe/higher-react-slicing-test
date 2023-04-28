import { NavLink } from "react-router-dom"

export const Menu = () => {
    return (
        <nav className="w-full flex items-center justify-center gap-4">
            <Item
                to={'/'}
                label={'Sign In'}
            />
            <Item
                to={'/register'}
                label={'Sign Up'}
            />
        </nav>
    )
}

const Item = ({ to, label, activeClass = 'border-b-2 border-white', className = 'px-3 py-2 text-white' }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive, isPending }) => {
                let current = () =>
                    isActive
                        ? activeClass
                        : isPending
                            ? "pending"
                            : ""
                return `${className} ${current()}`
            }
            }
        >
            {label}
        </NavLink>
    );
}