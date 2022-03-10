

import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ResponsiveDrawer from "../../components/sidebar/Sidebar";

function Dashboard() {
    const navigate=useNavigate()
    useEffect(() => {

        let ab= localStorage.getItem("token")
        if(ab)
        {
          navigate('/')
        }
        else{
          navigate('/login')
        }
    
      }, [navigate]);
  
    return (
  
   
  
        <div>
        <ResponsiveDrawer/>
  
        </div>
     
    );
  }
  export default Dashboard;