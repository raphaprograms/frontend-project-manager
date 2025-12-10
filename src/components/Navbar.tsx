import { NavLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";


function Navbar() {
    const { user, logOut } = useAuth();

    return (
        <nav className ='text-white flex justify-between tiems-cent w-full h-10'>
            <div className="flex gap 4">
                <NavLink to='/'>Home</NavLink>
                {user && <NavLink to='/projects'>Projects</NavLink>}
            </div>
            <div className=" flex gap-4 items-center">
                {user ? (
                    <>
                        <span className="text-gray-400">{user.username}</span>
                        <button onClick={logOut} className="text-red-400 hover:text-red-300">
                            Logout
                        </button>
                    </>
                ) : (
                    <NavLink to='/auth'>SignIn</NavLink>
                )}
            </div>
            <NavLink to="/auth">Signin/Signup</NavLink>
        </nav>
    )
}

export default Navbar;