import React, { useState } from 'react'
import { HiMenu, HiX } from "react-icons/hi";
import Logo from '../../assets/images/qrcode.png'

const Navbar = () => {
    const [showMenu,setShowMenu] = useState(false);

    function handleMenu(){
        setShowMenu(!showMenu);
    }

    return (
        <div className='w-full py-4 shadow-lg '>
            <div className='w-11/12 sm:w-3/4 mx-auto flex items-center justify-between'>
                <img src={Logo} alt='logo' className='w-10'/>
                <div className='hidden sm:flex items-center justify-between gap-20 text-blue-900'>
                    <a href="#">Home</a>
                    <a href="#">QR Generator</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>
                <div className='hidden sm:flex items-center justify-between gap-6'>
                    <button className='px-6 py-2 text-blue-900 border border-blue-900 rounded-lg'>Login</button>
                    <button className='px-6 py-2 text-white border bg-blue-900 rounded-lg'>Sign Up</button>
                </div>
                <div className='sm:hidden'>
                    <HiMenu 
                        className='sm:hidden text-2xl text-blue-900 '
                        onClick={handleMenu}
                    />
                    {showMenu && 
                        <div className='text-sm sm:hidden w-3/5 pl-10 py-6 fixed top-0 right-0 bg-white z-10 flex flex-col items-start justify-around gap-10 rounded-2xl shadow-2xl text-blue-900 '>
                            <HiX 
                                className='absolute top-5 right-3 text-2xl'
                                onClick={handleMenu}
                            />
                            <a href="#">Home</a>
                            <a href="#">QR Generator</a>
                            <a href="#">About</a>
                            <a href="#">Contact</a>
                            <button className='px-6 py-2 text-blue-900 border border-blue-900 rounded-lg'>Login</button>
                            <button className='px-6 py-2 text-white border bg-blue-900 rounded-lg'>Sign Up</button>
                        </div>                    
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar