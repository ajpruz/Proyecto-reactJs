import React from 'react'
import { Link } from 'react-router-dom'
import Cart from '../cart/Cart'

const Dropdown = ({isOpen, toggle}) => {
    return (
        <div className={isOpen ? "grid w-4/5 pb-3 shadow-xl justify-center grid-rows-4 text-center items-center bg-gradient-to-r from-purple-500 to-indigo-600 " : "hidden"}
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
            <Cart />
        </div>
    )
}

export default Dropdown
