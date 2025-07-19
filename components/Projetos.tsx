import React from 'react'
import Image from 'next/image'
import ProjectLogo from '../public/ProjectsLogo.svg'
import ProjectImages from '../public/site-da-cueia.png'
import IconesProjetos from '../public/PHPIcone.svg'

const Projetos = () => {
    return (
        <section id='projects' className='z-0 max-w-screen md:ml-80 ml-20 mt-40'>
            <div className='px-4 sm:px-8 lg:px-32 py-6 text-white'>
                <div className='flex gap-2 mb-14'>
                    <div className='border-b border border-white w-6'></div>
                    <div className='border-b border border-[#393939] w-full'></div>
                </div>
                <div>
                    <div className='flex text-center items-center gap-8'>
                        <Image width={45} height={45} className='select-none blur-lg bg-[#EC407A] relative opacity-30 animate-pulse' src={ProjectLogo} alt='Logo Projetos' />
                        <Image width={45} height={45} className='absolute select-none' src={ProjectLogo} alt='Logo Projetos' />
                        <h1 className='text-center items-center text-2xl'>Meus Projetos</h1>
                    </div>
                </div>
                <div className='mt-12 max-w-xl'>
                    <h1 className='text-2xl lg:text-4xl'>Alguns dos meus <span className='text-[#EC407A]'>projetos</span> feitos por fins <span className='text-[#EC407A]'>Acadêmico</span>/<span className='text-[#EC407A]'>Trabalho</span></h1>
                </div>
                <div className='mt-15 border-l-2 border-l-[#393939] h-[441px]'>
                    <div className='flex ml-9 gap-16'>
                        <div className='flex-col w-80 lg:ml-10'>
                            <Image className='drop-shadow-xl drop-shadow-white/15' src={ProjectImages} alt='Logo imagem Projeto' />
                        </div>
                        <div>
                            <h1 className='text-[#EC407A] font-bold text-xl lg:text-2xl'>Chatbot com IA</h1>
                            <p className='text-gray-300 mt-4'>Projeto feito com python em propósito para fins acadêmicos. Esse projeto está sendo hospedado pelo github.</p>
                            <div className='flex justify-between mt-6'>
                                <div className='lg:flex gap-2'>
                                    <Image className='border-1 border-[#EC407A] bg-[#1C1C1C] px-1 rounded-full mb-2 lg:mb-0' width={44} height={44} src={IconesProjetos} alt='Php icone' />
                                    <Image className='border-1 border-[#EC407A] bg-[#1C1C1C] px-1 rounded-full mb-2 lg:mb-0' width={44} height={44} src={IconesProjetos} alt='Php icone' />
                                    <Image className='border-1 border-[#EC407A] bg-[#1C1C1C] px-1 rounded-full' width={44} height={44} src={IconesProjetos} alt='Php icone' />
                                </div>
                                <a target='_blank' href='https://github.com/Pamysz' className='font-bold text-center items-center flex'><p className='border-b-2 border-[#EC407A]'>Veja o Projeto</p></a>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-2 mt-20 pl-20'>
                        <div className='border-b border border-white w-6'></div>
                        <div className='border-b border border-[#393939] w-full'></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projetos