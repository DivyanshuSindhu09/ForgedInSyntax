import React from 'react'
import { benefits } from '../constants'
import Spline from '@splinetool/react-spline'

const Features = () => {
  return (
    <section className='w-full flex flex-col gap-4 items-center relative h-screen overflow-hidden bg-transparent '>
     <Spline className='absolute z-99 top-[20%] scale-[2.1]' scene="https://prod.spline.design/1XsHIQMmgXJ7q6V7/scene.splinecode" />

    <h2 className='text-6xl mt-4 text-white font-[acma-black]'>Reasons to Join Us! </h2>
    <div className='container pb-4  relative z-9999'>
        <div className='flex justify-center flex-wrap w-full gap-6 mb-10'>
            {benefits.map((item)=>(
                <div
                className='block relative p-0.5  w-[27%] bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]'
                style={{backgroundImage : `url(${item.backgroundUrl})`,
            overflow : 'hidden'}}
                key={item.id}>
                    <div className='relative  glass h-full  z-2 flex flex-col  p-[2.4rem] pointer-events-none'>
                        <h5 className=' font-[acma-black] text-white text-2xl'>
                            {item.title}
                        </h5>
                        <p className='text-white text-xl font-[absans]'>
                            {item.text}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
    </section>
  )
}

export default Features