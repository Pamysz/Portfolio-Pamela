'use client';
import React, { useState } from 'react'
import logo from '../public/vscode-svgrepo-com.svg'
import Image from 'next/image'
import Menu from '../public/menu.png'
import { AiOutlineMenu } from 'react-icons/ai'


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className='fixed flex w-full h-12 border-b-2 border-b-[#1E1E1E] bg-[#131313] z-50'>
            <div className='flex justify-between items-center h-full w-full px-4 pl-2 2xl:px-5'>
                <div className='flex sm:gap-10 md:gap-2'>
                    <Image src={logo} width={28} height={28} alt="logo" />
                    <div className='p-1 flex'>
                        <div className='hidden md:hidden sm:hidden lg:flex'>
                            <button className='py-1 px-2 cursor-default text-md hover:bg-[#222222] rounded-lg'>File</button>
                            <button className='py-1 px-2 cursor-default text-md hover:bg-[#222222] rounded-lg'>Edit</button>
                            <button className='py-1 px-2 cursor-default text-md hover:bg-[#222222] rounded-lg'>Selection</button>
                            <button className='py-1 px-2 cursor-default text-md hover:bg-[#222222] rounded-lg'>View</button>
                            <button className='py-1 px-2 cursor-default text-md hover:bg-[#222222] rounded-lg'>Go</button>
                            <button className='py-1 px-2 cursor-default text-md hover:bg-[#222222] rounded-lg'>Run</button>
                            <button className='py-1 px-2 cursor-default text-md hover:bg-[#222222] rounded-lg'>Terminal</button>
                            <button className='py-1 px-2 cursor-default text-md hover:bg-[#222222] rounded-lg'>Help</button>
                        </div>
                    </div>
                    <div onClick={handleNav} className='md:flex lg:hidden cursor-pointer sm:pl-0 md:pl-0 pl-4'>
                        <AiOutlineMenu size={25} />
                    </div>
                    {/* <div className={
                        menuOpen ? "fixed left-0 top-12 w-[55%] sm:flex md:flex lg:hidden flex h-screen bg-[#131313] pl-5 pt-5 border-r-2 border-r-[#1E1E1E]"
                            : "fixed right-[100%] top-0 p-10"
                    }>
                        <div>
                            <a href="#">
                                <Image src={Explorer} width={35} height={39} alt='Explorer icon' />
                            </a>
                        </div>
                    </div> */}
                </div>
                <div className='sm:flex md:flex lg:flex hidden'>Pamela Alves</div>
                <div>
                    <Image src={Menu} width={150} height={100} alt='Menu icon' />
                </div>
            </div>
        </nav>
    ) 
}

export default Navbar