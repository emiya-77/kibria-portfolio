import { NavLink } from "react-router-dom"


const Navbar = () => {
    return (
        <header className="header flex flex-wrap gap-4">
            <NavLink to='/' className="w-20 h-10 rounded-lg bg-gray-100 flex items-center justify-center font-bold shadow-md">
                <p className="brown-gradient_text">KIBRIA</p>
            </NavLink>
            <nav className="flex text-lg gap-7 font-medium">
                <NavLink to='/about' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                    About
                </NavLink>
                <NavLink to='/projects' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                    Projects
                </NavLink>
                <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                    Contact
                </NavLink>
            </nav>
        </header>
    )
}

export default Navbar