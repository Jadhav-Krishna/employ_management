// eslint-disable-next-line no-unused-vars
import React from 'react'
import Header from '../../other/Header'
import CreateTask from '../../other/CreateTask'
import AllTask from '../../other/AllTask'

const AdminDashboard = () => {
  return (
    <div>
      <Header />
      <CreateTask />
      <div className='mt-5'></div>
      <AllTask />
    </div>
  )
}

export default AdminDashboard