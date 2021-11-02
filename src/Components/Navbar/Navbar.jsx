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
        <div className='my-2 sticky top-2 z-10'>
        <nav className='flex rounded-xl mx-2 justify-between items-center h-16 bg-gradient-to-r from-purple-500 to-indigo-600 text-white relative shadow-xl font-mono' 
        role='navigation'>
           <Link to='/' className='pl-8 hover:text-black'>
            Kawaki
           </Link>

           <div className='px-4 cursor-pointer hover:text-black md:hidden'
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
            <div className='md:inline-flex items-center pr-9 hidden '>
                <Link className='p-4 hover:text-black' to='/'>
                    Home
                </Link>
                <Link className='p-4 hover:text-black' to='/menu'>
                    Menu
                </Link>
                <Link className='p-4 hover:text-black' to='/about'>
                    About
                </Link>
                <Link className='p-4 hover:text-black' to='/contact'>
                    Contact
                </Link>
                <Link className=' hover:text-black' to='/Cart'>
                <svg 
                    className="w-6 h-6 justify-self" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg">
                    
                    <path strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
                    />  
                </svg>
                </Link>
            </div>
        </nav>
        <div className='flex justify-center'>
            <Dropdown isOpen={isOpen} toggle={toggle}/>
        </div>
        </div>
    )
}

export default Navbar
