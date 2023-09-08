import { Outlet } from 'react-router-dom';

import Signin from './Signin';
import Dashboard from '../container/Dashboard';


const Root = () => {
    const customSession = () => {
        const token = localStorage.getItem('token');
        return token;
    }
    
  return (
    <main>
    <div className="main">
      <div className="gradient"></div>
    </div>
    <div className="app">
        <Outlet />
        {!customSession ? <Signin /> : <Dashboard/>}
    </div>
  </main>
  )
}

export default Root