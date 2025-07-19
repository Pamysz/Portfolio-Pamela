"use client"
import React from 'react'
import Image from "next/image";
import { motion } from "motion/react";
import { cn } from '@/util/cn'
import { Spotlight } from "./ui/spotlight-new";
import { HoverBorderGradient } from './ui/hover-border-gradient'
import Linkedin from '../public/linkedin.svg'
import Github from '../public/git.svg'
import MouseIcon from '../public/mouse-icon.svg'

const Sobremim = () => {
    return (
        <>
            <section id='about-me' className='z-0 max-w-screen md:ml-80 ml-20'>
                <div className='px-4 sm:px-8 lg:px-32 py-6 text-white'>
                    <div className='min-h-screen relative'>
                        <div className='max-w-5xl pt-40 md:pt-[20vh] 2xl:pt-[30vh] z-0'>
                            {/* <Spotlight className='left-1/2 top-2/4 rotate-90 h-[501px]' fill='gray' /> */}
                            <div className='opacity-90 -z-10'>
                                <Spotlight gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(330, 100%, 50%, 0.08) 0%, hsla(330, 100%, 65%, 0.02) 50%, hsla(330, 100%, 60%, 0) 80%)"/>
                            </div>
                            <h1 className='text-5xl tracking-tighter text-wrap lg:text-6xl font-bold'>Oi, sou <span className='text-[#EC407A]'>Pamela</span></h1>
                            <div className='flex mt-3 mb-1 italic tracking-widest lg:text-2xl text-xl'>
                                Desenvolvedora BackEnd
                            </div>
                            <p className='max-w-3xl mt-3 mb-5 font-extralight lg:w-[575px] lg:text-[20px] text-xs'>Sou programadora back-end especializada em <span className='text-[#EC407A] font-bold'>PHP</span>, com 1+ ano de experiência, atualmente estou focada em me especializar nas novas tecnologias do mercado.</p>
                            <div className='flex'>
                                <HoverBorderGradient containerClassName='rounded-full' as='button' className='dark:bg-[#131313] text-white flex items-center space-x-2 cursor-pointer'>
                                    <a href="mailto:contatopamelaalves@hotmail.com">Contact me</a>
                                </HoverBorderGradient>
                                <div className='flex ml-4 items-center gap-3'>
                                    <a target='_blank' href="https://www.linkedin.com/in/pamela-brito-alves/"><Image width={24} height={24} src={Linkedin} alt="Linkedin icon" /></a>
                                    <a target='_blank' href="https://github.com/Pamysz"><Image width={24} height={24} src={Github} alt="Github icon" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='items-center justify-center m-auto lg:flex hidden bottom-32 relative'>
                <motion.span className='animate-bounce'>
                    <Image width={80} height={80} src={MouseIcon} alt='Mouse icon' />
                </motion.span>
            </div>
        </>
    )
}

export default Sobremim