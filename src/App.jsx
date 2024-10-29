/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployDashboard from './components/Dashboard/EmployDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'

const App = () => {
  // useEffect(()=>{
  //   setLocalStorage();
  //   getLocalStorage();
  // })

  const loginHandler = (email,password)=>{
    if(email == "admin@me.com" && password == "12345678"){
      setuser('admin')
    }else if(email == "user@me.com" && password == '12345678'){
      setuser('employee') 
    }else{
      alert("invalid credentials")
    }
  }

  const [user, setuser] = useState(null)

  return (
    <>
      {!user ? <Login loginHandler={loginHandler}/> : "" }
      {user == 'admin' ? <AdminDashboard/> : <EmployDashboard/>}
    </>
  )
}

export default App