import React from 'react'
import ChromaGrid from '../blocks/Components/ChromaGrid/ChromaGrid'
import TrueFocus from '../blocks/TextAnimations/TrueFocus/TrueFocus'

const Members = () => {
  return (
    <section className='w-full min-h-screen overflow-hidden  overflow-y-auto'>
      <div className='mt-5'>
        <TrueFocus/>
      </div>
        <div className='w-full mt-5 min-h-screen'>
        <ChromaGrid/>
        </div>
    </section>
  )
}

export default Members