// create a responsive navbar with a logo and a hamburger menu
// to be used in the header of the website

import Link from 'next/link'

export default function Navbar() {
    return (
        <nav>
            <div className="navbar bg-neutral text-white bg-transparent">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 bg-transparent">
                            <li><a>About me</a></li>
                            <li><a>Projects</a></li>
                            <li><a>Contact me</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Home</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>About me</a></li>
                        <li><a>Projects</a></li>
                        <li><a>Contact me</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href="https://github.com/SananMaarouf" className="btn text-white" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/sanan-maarouf/" className="btn text-white ml-1" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
        </nav>

    )
}


