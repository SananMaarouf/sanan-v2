// create a responsive navbar with a logo and a hamburger menu
// to be used in the header of the website

import Link from 'next/link'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    return (
        <nav>
            <div className="navbar bg-neutral text-white bg-transparent">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn border-0 bg-transparent text-white hover:bg-white hover:text-black lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-lg dropdown-content backdrop-filter backdrop-blur-md mt-3 z-[1] p-2 shadow bg-grey-400 rounded-box w-52">
                            <li><a className='hover:text-black hover:bg-white' href='/#about'>About me</a></li>
                            <li><a className='hover:text-black hover:bg-white' href="/#projects">Projects</a></li>
                            <li><a className='hover:text-black hover:bg-white' href="#footer">Contact me</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost hover:bg-white hover:text-black normal-case text-xl" href='/'>Home</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg">
                        <li><a className='hover:text-black hover:bg-white' href='/#about'>About me</a></li>
                        <li><a className='hover:text-black hover:bg-white' href='/#projects'>Projects</a></li>
                        <li><a className='hover:text-black hover:bg-white' href='#footer'>Contact me</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href="/files/CV-Sanan.pdf" download className='btn btn-ghost bg-white  text-black hover:bg-white'>Resume
                        <FontAwesomeIcon icon={faDownload} style={{color: 'black', fontSize: '2rem'}}/>
                    </a>                </div>
            </div>
        </nav>

    )
}


