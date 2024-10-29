// eslint-disable-next-line no-unused-vars
import React from 'react'
import Header from '../../other/Header'
import TaskListCounter from '../../other/TaskListCounter'
import TaskList from '../../TaskList/TaskList'

const EmployDashboard = () => {
  return (
    <div className='h-screen w-full bg-slate-950'>
        <Header/>
        <TaskListCounter/>
        <TaskList/>
    </div>
  )
}

export default EmployDashboard