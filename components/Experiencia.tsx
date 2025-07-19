import React from 'react'
import Image from 'next/image'
import WorkExperienceIcon from '../public/WorkExperienceIcon.svg'
import AdaptIcon from '../public/Adapt-logo.png'

const Experiencia = () => {
    return (
        <section id='work-experience' className='z-0 max-w-screen md:ml-80 ml-20'>
            <div className='px-4 sm:px-8 lg:px-32 py-6 text-white'>
                <div className='flex gap-2 mb-14'>
                    <div className='border-b border border-white w-6'></div>
                    <div className='border-b border border-[#393939] w-full'></div>
                </div>
                <div>
                    <div className='flex text-center items-center gap-8'>
                        <Image width={45} height={45} className='select-none blur-lg bg-[#EC407A] relative opacity-30 animate-pulse' src={WorkExperienceIcon} alt='Work Experience Icon Computer' />
                        <Image width={45} height={45} className='absolute select-none' src={WorkExperienceIcon} alt='Work Experience Icon Computer' />
                        <h1 className='text-center items-center text-2xl'>Experiência de Trabalho</h1>
                    </div>
                </div>
                <div className='mt-12 max-w-xl'>
                    <h1 className='text-2xl lg:text-4xl'><span className='text-[#EC407A]'>Junior</span> com <span className='text-[#EC407A]'>1+ ano</span> de experiência de trabalho</h1>
                </div>
                <div className='mt-15 border-l-2 border-l-[#393939] h-[441px]'>
                    <div className='flex ml-9 gap-16'>
                        <div className='flex-col w-80'>
                            <p className='lg:text-center text-left'>nov de 2023 - o momento</p>
                            <div className='my-8 relative w-20 justify-center mx-auto'>
                                <span className='transform-none -top-[2px] -left-[2px] absolute content animate-pulse'><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 12 12"><path fill="currentColor" d="M0 0h1v12H0V0zM1 1.09V0h11v1.09H1z"></path></svg></span>
                                <span className='transform-none -top-[2px] -right-[2px] absolute content animate-pulse'><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 12 12"><path fill="currentColor" d="M12 0v1H0V0h12zM10.91 1H12v11h-1.09V1z"></path></svg></span>
                                <span className='transform-none -bottom-[2px] -left-[2px] absolute content animate-pulse'><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 12 12"><path fill="currentColor" d="M0 12v-1h12v1H0zM1.09 11H0V0h1.09v11z"></path></svg></span>
                                <span className='transform-none -bottom-[2px] -right-[2px] absolute content animate-pulse'><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 12 12"><path fill="currentColor" d="M12 12h-1V0h1v12zM11 10.91V12H0v-1.09h11z"></path></svg></span>
                                <Image className='p-1' width={80} height={80} src={AdaptIcon} alt='Adapt logo work experience' />
                            </div>
                        </div>
                        <div className='w-full'>
                            <h1 className='text-[#EC407A] font-bold'>Adapt Edtech · Freelance</h1>
                            <li className='mt-4 text-gray-300'>Diagramação HTML,JS e CSS para faculdades/universidades.</li>
                            <li className='mt-4 text-gray-300'>Desenvolvimento de design para faculdades/universidades.</li>
                            <div className='flex gap-2 mt-20'>
                                <div className='border-b border border-white w-6'></div>
                                <div className='border-b border border-[#393939] w-full'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experiencia