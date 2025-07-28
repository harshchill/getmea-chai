import React from 'react'
import ShinyText from './ShinyText'

const Nav = () => {
  return (
    <nav className='w-full md:w-4/5 flex justify-between items-center  mx-auto mt-4 px-5 p-4 bg-slate-900/60 rounded-lg text-white'>
        <div>
            <span className='text-lg font-bold mx-2'>Get Me a Chai</span>
        </div>
        <div className='flex items-center gap-5'>
            <span className='cursor-pointer hover:text-slate-400'>Home</span>
            <span className='cursor-pointer hover:text-slate-400'>Projects</span>
            <span className='cursor-pointer hover:text-slate-400'>About</span>
            <span className='cursor-pointer font-bold bg-slate-900 px-4 mx-2 py-2 ring-1 ring-slate-200 rounded-full'><ShinyText text="Log In" disabled={false} speed={3} className='custom-class' /></span>
        </div>
    </nav>
  )
}
 
export default Nav
