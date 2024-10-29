// eslint-disable-next-line no-unused-vars
import React from 'react'

const TaskListCounter = () => {
    return (
        <div className='px-16 max-sm:px-8 flex gap-10 max-sm:gap-5 w-screen items-center justify-between max-sm:flex-col'>
            <div className='relative flex justify-between w-1/2 max-sm:w-full gap-10 max-sm:gap-5'>
                <div className='px-5 py-10 max-sm:py-5 bg-red-400 rounded-xl w-1/2 max-sm:1/2'>
                    <h2 className='text-5xl font-semibold bg-transparent'>0</h2>
                    <h3 className='text-xl font-medium bg-transparent'>New Task</h3>
                </div>
                <div className='px-5 py-10 max-sm:py-5 bg-green-400 rounded-xl w-1/2 max-sm:1/2'>
                    <h2 className='text-5xl font-semibold bg-transparent'>0</h2>
                    <h3 className='text-xl font-medium bg-transparent'>New Task</h3>
                </div>
            </div>
            <div className='relative flex justify-between w-1/2 max-sm:w-full gap-10 max-sm:gap-5'>
                <div className='px-5 py-10 max-sm:py-5 bg-blue-400 rounded-xl w-1/2 max-sm:1/2'>
                    <h2 className='text-5xl font-semibold bg-transparent'>0</h2>
                    <h3 className='text-xl font-medium bg-transparent'>New Task</h3>
                </div>
                <div className='px-5 py-10 max-sm:py-5 bg-yellow-400 rounded-xl w-1/2 max-sm:1/2'>
                    <h2 className='text-5xl font-semibold bg-transparent'>0</h2>
                    <h3 className='text-xl font-medium bg-transparent'>New Task</h3>
                </div>
            </div>
        </div>
    )
}

export default TaskListCounter