'use client';
import React, { useState } from 'react'
import Image from 'next/image'
import Explorer from '../public/Search.svg'
import Search from '../public/lupa.svg'
import SourceControl from '../public/Source-control.svg'
import RunandDebug from '../public/Run-and-debug.svg'
import Extension from '../public/Extensions.svg'
import Account from '../public/profile.svg'
import Config from '../public/config.svg'
import Arrow from '../public/arrow.svg'
import AppIcon from '../public/appIcon.svg'
import PublicIcon from '../public/publicIcon.svg'
import LaravelIcon from '../public/LaravelIcon.svg'
import SobreMimIcon from '../public/SobremimIcon.svg'
import WorkExperienceIcon from '../public/ExperienceWork.svg'
import ProjectsIcon from '../public/MyProjects.svg'
import ContactIcon from '../public/ContactME.svg'
import Sobremim from './Sobremim';

const Main = () => {
    const [pasteOpen, setPasteOpen] = useState(false)

    const pasteItem = () => {
        setPasteOpen(!pasteOpen);
    }

    const [pasteOpen2, setPasteOpen2] = useState(false)

    const pasteItem2 = () => {
        setPasteOpen2(!pasteOpen2);
    }

    const [pasteOpen3, setPasteOpen3] = useState(false)

    const pasteItem3 = () => {
        setPasteOpen3(!pasteOpen3);
    }

    return (
        <div className='flex-1 flex overflow-hidden mt-12 bg-[#131313] z-50 fixed'>
            <div className='relative md:flex z-30'>
                <div className='max-w-screen text-[#727272] flex flex-col justify-between h-screen pb-15 gap-y-80 lg:gap-y-108'>
                    <div className='cursor-pointer'>
                        <div className='relative'>
                            <button className='p-3 relative border-l-2 border-[#E621AF]'>
                                <Image src={Explorer} width={35} height={39} alt='Explorer icon' />
                            </button>
                        </div>
                        <div className='relative'>
                            <button className='p-3 relative hover:border-l-2 opacity-50 hover:opacity-100'>
                                <Image src={Search} width={35} height={39} alt='Search icon' />
                            </button>
                        </div>
                        <div className='relative'>
                            <button className='p-3 relative hover:border-l-2 opacity-50 hover:opacity-100'>
                                <Image src={SourceControl} width={35} height={39} alt='Source Control icon' />
                            </button>
                        </div>
                        <div className='relative'>
                            <button className='p-3 relative hover:border-l-2 opacity-50 hover:opacity-100'>
                                <Image src={RunandDebug} width={35} height={39} alt='Run and Debug icon' />
                            </button>
                        </div>
                        <div className='relative'>
                            <button className='p-3 relative hover:border-l-2 opacity-50 hover:opacity-100'>
                                <Image src={Extension} width={35} height={39} alt='Extension icon' />
                            </button>
                        </div>
                    </div>
                    <div className='cursor-pointer'>
                        <div className='relative'>
                            <button className='opacity-50 hover:opacity-100 p-3 relative'>
                                <Image src={Account} width={35} height={39} alt='Account icon' />
                            </button>
                        </div>
                        <div className='relative'>
                            <button className='opacity-50 hover:opacity-100 p-3 relative'>
                                <Image src={Config} width={35} height={39} alt='Config icon' />
                            </button>
                        </div>
                    </div>
                </div>
                <div className='z-10 absolute md:static left-full top-0 bottom-0 flex flex-col border-r-2 border-r-[#1E1E1E] min-w-[262px] max-w-[262px]'>
                    <div className='flex uppercase w-full text-xs select-none items-center justify-between border-b-2 border-b-[#1E1E1E]'>
                        <h1 className='ml-5 mr-3 my-3'>EXPLORER</h1>
                        <div className='flex mr-6'>
                            <button className='py-1 px-2 font-bold cursor-default hover:bg-[#222222] rounded-lg'>...</button>
                        </div>
                    </div>
                    <div className='divide-[#222222] divide-y-2 flex flex-col mx-[1px] flex-1 select-none mt-3'>
                        <div>
                            <div className='relative'>
                                <button onClick={pasteItem} className='flex w-full focus:ring-[.5px] active:ring-0 ring-gray-500 py-1 justify-between transition-all'>
                                    <div className='flex'>
                                        <Image src={Arrow} width={10} height={5} alt='Arrow icon' className={`rotate-0 ${pasteOpen && 'rotate-270'}`} />
                                        <span className='text-xs font-extrabold ml-2'>PROJETO</span>
                                    </div>
                                </button>
                                <div className={pasteOpen ? "hidden" : ""}>
                                    <div className='flex focus:ring-[.5px] active:ring-0 ring-gray-500 select-none'>
                                        <div className='transition-all w-full max-h-[674px] h-[674px]'>
                                            <div className='relative'>
                                                <button onClick={pasteItem2} className='flex w-full pl-3 hover:bg-[#1b1b1b] items-center py-[2px] cursor-pointer transition-all duration-200'>
                                                    <Image src={Arrow} width={10} height={5} alt='Arrow icon' className={`rotate-0 ${pasteOpen2 && 'rotate-270'}`} />
                                                    <Image src={AppIcon} width={18} height={17} alt='Arrow icon' className='ml-[5px]' />
                                                    <p className='ml-[5px]'>app</p>
                                                </button>
                                            </div>
                                            <div className={pasteOpen2 ? "hidden" : ""}>
                                                <div className='flex focus:ring-[.5px] active:ring-0 ring-gray-500 select-none'>
                                                    <div className='transition-all w-full max-h-[674px] h-[674px]'>
                                                        <div className='relative'>
                                                            <button onClick={pasteItem3} className='flex w-full pl-6 hover:bg-[#1b1b1b] items-center py-[2px] cursor-pointer transition-all duration-200'>
                                                                <Image src={Arrow} width={10} height={5} alt='Arrow icon' className={`rotate-0 ${pasteOpen3 && 'rotate-270'}`} />
                                                                <Image src={PublicIcon} width={18} height={17} alt='Arrow icon' className='ml-[5px]' />
                                                                <p className='ml-[5px]'>public</p>
                                                            </button>
                                                        </div>
                                                        <div className={pasteOpen3 ? "hidden" : ""}>
                                                            <div className='overflow-hidden relative '>
                                                                <a href="/#about-me" className='flex w-full hover:bg-[#202020] items-center py-[2px] cursor-pointer transition-all duration-200 bg-[#222222] pl-5'>
                                                                    <div className='ml-6 mr-1 relative'>
                                                                        <Image src={LaravelIcon} width={17} height={17} alt='Arrow icon' />
                                                                    </div>
                                                                    <p className='ml-1'>sobre_mim.php</p>
                                                                </a>
                                                                <div className='flex flex-col ml-1 py-1 pl-[38px]'>
                                                                    <div className='w-max'>
                                                                        <div className='self-center'>
                                                                            <div className='my-2 relative'>
                                                                                <span className='transform-none -top-[2px] -left-[2px] absolute content'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="none" viewBox="0 0 12 12"><path fill="currentColor" d="M0 0h1v12H0V0zM1 1.09V0h11v1.09H1z"></path></svg></span>
                                                                                <span className='transform-none -top-[2px] -right-[2px] absolute content'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="none" viewBox="0 0 12 12"><path fill="currentColor" d="M12 0v1H0V0h12zM10.91 1H12v11h-1.09V1z"></path></svg></span>
                                                                                <span className='transform-none -bottom-[2px] -left-[2px] absolute content'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="none" viewBox="0 0 12 12"><path fill="currentColor" d="M0 12v-1h12v1H0zM1.09 11H0V0h1.09v11z"></path></svg></span>
                                                                                <span className='transform-none -bottom-[2px] -right-[2px] absolute content'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="none" viewBox="0 0 12 12"><path fill="currentColor" d="M12 12h-1V0h1v12zM11 10.91V12H0v-1.09h11z"></path></svg></span>
                                                                                <a className='flex items-center hover:text-pink-300 px-[4px] transition-colors duration-300 text-white' href="/#about-me">
                                                                                    <div className='mr-2'><Image src={SobreMimIcon} width={18} height={17} alt='Arrow icon' /></div>
                                                                                    <p className='leading-5'>Sobre mim</p>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div className='my-2 self-center'>
                                                                            <a className='flex items-center hover:text-pink-300 px-[4px] transition-colors duration-300 text-white' href="/#work-experience">
                                                                                <div className='mr-2'><Image src={WorkExperienceIcon} width={18} height={17} alt='Arrow icon' /></div>
                                                                                <p className='leading-5'>Experiência de Trabalho</p>
                                                                            </a>
                                                                        </div>
                                                                        <div className='my-2 self-center'>
                                                                            <a className='flex items-center hover:text-pink-300 px-[4px] transition-colors duration-300 text-white' href="/#projects">
                                                                                <div className='mr-2'><Image src={ProjectsIcon} width={18} height={17} alt='Arrow icon' /></div>
                                                                                <p className='leading-5'>Meus Projetos</p>
                                                                            </a>
                                                                        </div>
                                                                        <div className='my-2 self-center'>
                                                                            <a className='flex items-center hover:text-pink-300 px-[4px] transition-colors duration-300 text-white' href="/#contact">
                                                                                <div className='mr-2'><Image src={ContactIcon} width={18} height={17} alt='Arrow icon' /></div>
                                                                                <p className='leading-5'>Contato</p>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main