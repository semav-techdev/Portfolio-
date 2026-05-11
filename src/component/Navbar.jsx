import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from '@tanstack/react-router';


export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <nav className="flex justify-between top-0 
            left-0 right-0 bg-primary z-[1002] text-textColor 
            border-2 rounded-lg text-lg font-thin shadow p-4 md:p-8 mx-4 md:mx-24
                my-4 md:my-7 uppercase fixed">
                <div>
                    <h1 className="">Semav Adnan MH</h1>
                </div>
                <div className="hidden md:flex gap-6">
                    <Link className="hover:text-hoverColor" to="/" hash="hero" >Home</Link>
                    <Link className="hover:text-hoverColor" to="/" hash="projects">My Projects</Link>
                    <Link className="hover:text-hoverColor" to="/" hash="about">About Me</Link>
                    <Link className="hover:text-hoverColor" to="/" hash="contact">Contact</Link>
                </div>
                <div className="md:hidden ">
                    <FontAwesomeIcon icon={faBars}
                        className="text-2xl cursor-pointer"
                        onClick={() => setMenuOpen(!menuOpen)} />
                </div>
                <div className={`md:hidden absolute flex flex-col items-center gap-4 z-[1002] top-[100%]
                        text-textColor bg-blureBackground shadow-md 
                        mx-4 rounded-lg transition-all duration-500 overflow-hidden  w-[93%] left-[-1%] 
                        ${menuOpen ? 'max-h-96 py-4  border-2 ' : 'max-h-0 py-0'
                        }`}>
                        <Link onClick={() => setMenuOpen(false)} className="hover:text-hoverColor" to="/" hash="hero">Home</Link>
                        <Link onClick={() => setMenuOpen(false)} className="hover:text-hoverColor" to="/" hash="about">About Me</Link>
                        <Link onClick={() => setMenuOpen(false)} className="hover:text-hoverColor" to="/" hash="projects">My Projects</Link>
                        <Link onClick={() => setMenuOpen(false)} className="hover:text-hoverColor" to="/" hash="contact">Contact</Link>
                </div>
            </nav>
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[1001] md:hidden"
                    onClick={() => setMenuOpen(false)}
                />
            )}
           
        </>
    )
}