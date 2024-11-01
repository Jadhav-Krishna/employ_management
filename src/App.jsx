// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployDashboard from './components/Dashboard/EmployDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage, getLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const authData = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem('employees') || !localStorage.getItem('admin')) {
      setLocalStorage();
    }

    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser) {
      setUser(storedUser.role);
      setLoggedInUserData(storedUser);
    }
  }, []);

  const loginHandler = (email, password) => {
    const { employees, admin } = getLocalStorage();

    if (email === admin[0].email && password === admin[0].password) {
      const adminData = { role: 'admin',...admin[0]};
      setUser('admin');
      setLoggedInUserData(adminData);
      localStorage.setItem('loggedInUser', JSON.stringify(adminData));
    } else {
      const employee = employees.find(e => e.email === email && e.password === password);
      if (employee) {
        const employeeData = { role: 'employee', ...employee };
        setUser('employee');
        setLoggedInUserData(employeeData);
        localStorage.setItem('loggedInUser', JSON.stringify(employeeData));
      } else {
        alert("Invalid credentials");
      }
    }
  };

  return (
    <>
      {!user ? <Login loginHandler={loginHandler} /> : null}
      {user === 'admin' ? (
        <AdminDashboard />
      ) : user === 'employee' ? (
        <EmployDashboard data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;
