import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        const hiddeMenu = () => {
            if(window.innerWidth > 648 && isOpen) {
                setIsOpen(false)
            }
        }
        window.addEventListener('resize', hiddeMenu )
        return () => {
            window.removeEventListener('resize', hiddeMenu)
        }
    })

    return (
        <>
        <nav className='flex  justify-between items-center h-16 bg-transparent text-white relative shadow-md font-mono' 
        role='navigation'>
           <Link to='/' className='pl-8'>
            Kawaki
           </Link>
           <form action="">
               <input type="text" />
               <button type='submit'>Buscar</button>
           </form>
           <div className='px-4 cursor-pointer md:hidden'
           onClick={toggle}>
           <svg className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg">
            <path 
               strokeLinecap="round" 
               strokeLinejoin="round" 
               strokeWidth={2} 
               d="M4 6h16M4 12h16M4 18h16" 
            />
            </svg>
            </div>
            <div className='pr-8 md:block hidden'>
                <Link className='p-4' to='/'>
                    Home
                </Link>
                <Link className='p-4' to='/menu'>
                    Menu
                </Link>
                <Link className='p-4' to='/about'>
                    About
                </Link>
                <Link className='p-4' to='/contact'>
                    Contact
                </Link>
            </div>
        </nav>
        <Dropdown isOpen={isOpen} toggle={toggle}/>
        </>
    )
}

export default Navbar
