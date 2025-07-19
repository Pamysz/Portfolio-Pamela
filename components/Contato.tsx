import React from 'react'
import Image from 'next/image'
import ContatoIcon from '../public/Contatoicone.svg'
import FooterGrid from '../public/footer-grid.svg'
import { HoverBorderGradient } from './ui/hover-border-gradient'

const Contato = () => {
    return (
        <section id='projects' className='z-0 max-w-screen md:ml-80 ml-20 mt-40'>
            <div className='px-4 sm:px-8 lg:px-32 py-6 text-white'>
                <div className='flex gap-2 mb-14'>
                    <div className='border-b border border-white w-6'></div>
                    <div className='border-b border border-[#393939] w-full'></div>
                </div>
                <div>
                    <div className='flex text-center items-center gap-8'>
                        <Image width={45} height={45} className='select-none blur-lg bg-[#EC407A] relative opacity-30 animate-pulse' src={ContatoIcon} alt='Work Experience Icon Computer' />
                        <Image width={45} height={45} className='absolute select-none fill-white' src={ContatoIcon} alt='Work Experience Icon Computer' />
                        <h1 className='text-center items-center text-2xl'>Contato</h1>
                    </div>
                </div>
                <div className='w-full pt-20'>
                    <div className='absolute w-full left-30 -bottom-[45rem] -z-10'>
                        <Image src={FooterGrid} alt="grid" className='w-full h-full opacity-50' />
                    </div>
                    <div className='flex flex-col items-center z-50 relative py-48 '>
                        <h1 className='heading lg:max-w-[45vw] text-2xl lg:text-5xl text-center font-bold'>Tem uma <span className='text-[#EC407A]'>pergunta</span> ou <span className='text-[#EC407A]'>proposta</span>, ou apenas deseja dizer oi? Vá em frente.</h1>
                        <p className='py-6 text-xs lg:text-lg'>Entre em contato comigo hoje e vamos discutir como posso ajudá-lo a atingir seus objetivos.</p>
                        <HoverBorderGradient containerClassName='rounded-full' as='button' className='dark:bg-[#131313] text-white flex items-center space-x-2 cursor-pointer'>
                            <a href="mailto:contatopamelaalves@hotmail.com">Contact me</a>
                        </HoverBorderGradient>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contato