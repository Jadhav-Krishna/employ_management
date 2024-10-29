// eslint-disable-next-line no-unused-vars
import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between px-16 max-sm:px-8 max-sm:py-7 py-10 bg-transparent'>
        <div className='text-white flex gap-3 bg-transparent items-center'>
            <h1 className='text-2xl bg-transparent'>Hi , <br /><span className='text-4xl bg-transparent font-medium'>Shna 👋</span></h1>
        </div>
        <button className='bg-red-800 rounded-full px-4 text-lg font-semibold py-1.5 text-white'>Log Out</button>
        
    </div>
  )
}

export default Header