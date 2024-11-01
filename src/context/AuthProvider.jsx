// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/LocalStorage';

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

  const [userData, setuserData] = useState(null);

  useEffect(() => {
    const {employees,admin} = getLocalStorage()
    setuserData({employees,admin})
  }, [])
  
  return (
    <div>
      <AuthContext.Provider value={userData}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider