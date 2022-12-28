import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import logo from '../../../utilities/logo/logo.png'
import { TfiLayoutMediaLeft } from 'react-icons/tfi';
import { HiOutlineChatAlt2 } from 'react-icons/hi';
import { FcAbout } from 'react-icons/fc';
import { FiLogIn } from 'react-icons/fi';
import { FiLogOut } from 'react-icons/fi';
import { ImProfile } from 'react-icons/im';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    const navLinks = <>
        <li><Link to='/'><TfiLayoutMediaLeft/>Media</Link></li>
        <li><Link to='/chat'><HiOutlineChatAlt2/>Chat</Link></li>
        <li><Link to='/about'><FcAbout/>About</Link></li>
        {
            user?.uid ?
                <><li><Link to='/profile'><ImProfile/>Profile</Link></li>
                    <li><button onClick={handleLogout}><FiLogOut/>Logout</button></li></>
                :
                <li><Link to='/login'><FiLogIn/>Login</Link></li>
        }
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <img className='w-10' alt='' src={logo} />
                <Link to='/' className="btn btn-ghost font-bold text-xl sm:text-lg">Postbook</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navLinks}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;