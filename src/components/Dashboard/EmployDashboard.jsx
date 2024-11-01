// eslint-disable-next-line no-unused-vars
import React from 'react'
import Header from '../../other/Header'
import TaskListCounter from '../../other/TaskListCounter'
import TaskList from '../../TaskList/TaskList'

// eslint-disable-next-line react/prop-types,
const EmployDashboard = ({data}) => {
  return (
    <div className='h-screen w-full bg-slate-950'>
        <Header data={data}/>
        <TaskListCounter data={data}/>
        <TaskList data={data}/>
    </div>
  )
}

export default EmployDashboard