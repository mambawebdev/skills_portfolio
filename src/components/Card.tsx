import grainImage from '@/assets/images/grain.jpg'
import { twMerge } from 'tailwind-merge'
import { PropsWithChildren } from 'react';

export const Card = ({className, children}: PropsWithChildren<{
    className?: string; 
}>) => {
    return (
        <div className={twMerge("bg-gray-800 rounded-3xl relative overflow-hidden z-0 after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 md:px-10 pt-8 md:pt-12 lg:pt-16 lg:px-20 after:pointer-events-none", className)}>         
        <div className="inset-0 absolute -z-10 opacity-5" style={{
          backgroundImage: `url(${grainImage.src})`
        }}></div>
        {children}
        </div>
    )
}