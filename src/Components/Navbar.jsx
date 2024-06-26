import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import auth from "../firebase/firebase.config";

const Navbar = () => {
    const { user, signOut } = useContext(AuthContext);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => console.log("logout successful"))
            .catch(error => console.error(error.messege));
    }
    const Navlinks = <>
        <li><NavLink to='/login'>Sign In</NavLink></li>
        <li><NavLink to='/signUp'>Sign Up</NavLink></li>

    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {Navlinks}

                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Auth Context</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div>
                        <h4>{user.email}</h4>
                        <button onClick={handleSignOut} className="btn">Sign Out</button>
                    </div> : <Link to='/login'>Login now</Link>
                }


            </div>

        </div>
    );
};

export default Navbar;