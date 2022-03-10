
import './App.css';

import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

import Login from './pages/LoginPage/Login'
import User from './pages/UserManagment/UserManagement'
import  Dashboard from './pages/Dashboard/Dashboard'
import ActiveUsers from './components/Activeusers/Activeusers';
import BlockedUsers from './components/Blockedusers/Blockedusers';





function App() {


  return (
  

  

    <BrowserRouter>

      <div>


      <Routes>
     
     
     
          <Route path='/login' element={<Login/>} />
          <Route path='/' element={<Dashboard/>} />
          <Route path='/usermanagment' element={<User/>} />
          <Route path='/ActiveUsers' element={<ActiveUsers/>} />
          <Route path='/BlockedUsers' element={<BlockedUsers/>} />
         
        </Routes>

     
     


      </div>
    </BrowserRouter>
  );
}

export default App;
