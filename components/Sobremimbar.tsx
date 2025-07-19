import React from 'react'
import LaravelIcon from '../public/LaravelIcon.svg'
import Image from 'next/image'

const Sobremimbar = () => {
    return (
        <div id='#about-me' className='flex w-full flex-col overflow-hidden mt-12 md:ml-[322px] ml-16 fixed bg-[#131313] z-50'>
            <div className='border-b-2 border-b-[#1E1E1E] flex top-0 sticky flex-none'>
                <div className='w-max border-b-[#E621AF] border-b-1 relative p-2 border-r border-r-[#1E1E1E] cursor-pointer'>
                    <div className='flex items-center gap-3'>
                        <Image className='ml-3' src={LaravelIcon} width={17} height={17} alt='Arrow icon' />
                        <p className='whitespace-nowrap select-none text-white'>Sobre mim</p>
                        <div className='py-1 px-1 text-md hover:bg-[#222222] rounded-lg'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="currentColor" d="M7.116 8l-4.558 4.558.884.884L8 8.884l4.558 4.558.884-.884L8.884 8l4.558-4.558-.884-.884L8 7.116 3.442 2.558l-.884.884L7.116 8z"></path></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sobremimbar