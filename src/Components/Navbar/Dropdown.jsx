import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({isOpen, toggle}) => {
    return (
        <div className={isOpen ? "grid w-4/5 pb-3 rounded-b shadow-xl justify-center grid-rows-4 text-center items-center bg-gradient-to-r from-purple-500 to-indigo-600 " : "hidden"}
        onClick={toggle}
        >
            <Link className='p-4 hover:text-white' to='/'>
                Home
            </Link>
            <Link className='p-4 hover:text-white' to='/menu'>
                Menu
            </Link>
            <Link className='p-4 hover:text-white' to='/about'>
                About
            </Link>
            <Link className='p-4 hover:text-white' to='/contact'>
                Contact
            </Link>
            <Link className=' hover:text-white' to='/Cart'>
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
    )
}

export default Dropdown
