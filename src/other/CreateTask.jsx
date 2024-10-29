// eslint-disable-next-line no-unused-vars
import React from 'react'

const CreateTask = () => {
  return (
    
        <div className='w-[95%] mx-auto p-10 max-sm:p-5 rounded-2xl border-2 border-slate-900'>
        <form>
          <div className='flex max-sm:flex-col max-sm:w-full items-center justify-between'>
            <div className='flex flex-col gap-10 max-sm:gap-5'>
              <div>
                <h5 className='text-xl'>Task Title</h5>
                <input className='w-[30vw] max-sm:w-[80vw] border-2 px-3 py-1 outline-none mt-1 rounded-lg border-slate-600' type="text" placeholder='Make a UI design' />
              </div>
              <div>
                <h5 className='text-xl'>Date</h5>
                <input className='w-[30vw] max-sm:w-[80vw] border-2 px-3 py-1 outline-none mt-1 rounded-lg border-slate-600' type="date" />
              </div>
              <div>
                <h5 className='text-xl'>Assign to</h5>
                <input className='w-[30vw] max-sm:w-[80vw] border-2 px-3 py-1 outline-none mt-1 rounded-lg border-slate-600' type="text" placeholder='Employee Name' />
              </div>
              <div>
                <h5 className='text-xl'>Category</h5>
                <input className='w-[30vw] max-sm:w-[80vw] border-2 px-3 py-1 outline-none mt-1 rounded-lg border-slate-600' type="text" placeholder='Design, dev, etc' />
              </div>
            </div>
            <div className='flex flex-col w-[40vw] max-sm:w-[80vw] mt-3'>
              <h5 className='text-xl'>Description</h5>
              <textarea className='w-full h-64 max-sm:h-48 max-sm:mt-3 outline-none p-3 resize-none border-2 border-slate-600'></textarea>
              <button className='bg-red-800 rounded-lg text-xl mt-10 py-3'>Create Task</button>
            </div>
          </div>
        </form>
      </div>
  )
}

export default CreateTask