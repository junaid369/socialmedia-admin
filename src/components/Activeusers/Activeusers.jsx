


import React, { useState, useEffect } from 'react';
import { getActiveUsers} from '../../Axios'
import { DataGrid } from '@mui/x-data-grid';
import { IconButton, Button,Switch } from '@mui/material';
import { DeleteRounded } from '@mui/icons-material'
import Swal from 'sweetalert2'
import { useNavigate,Link } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';



// import { useHistory } fro










function ActiveUsers() {
    // const history=useHistory()
const navigate=useNavigate()
    const columns = [

        { field: 'id', headerName: 'ID', width: 200 },
        { field: 'email', headerName: 'Email', width: 180 },
        { field: 'username', headerName: 'User Name', width: 180 },
        { field: 'isActive', headerName: 'Active Status', width: 180},
     

            
        
    ];
    const [users, setUsers] = useState([])
    useEffect(() => {
        getActiveUsers().then((data) => {
            const rows = data.data.users.map((item) => {
                return { ...item, id: item._id }
            })
            console.log(rows);
            setUsers(rows)
        }).catch((err) => {
            if (err.response.status == 403) {
                localStorage.removeItem("token");
                
                navigate('/login')
            }

        })

    }, [])


    return (
      
<div>


            <Sidebar/>
        
        <div className="ViewUser card p-4" style={{marginLeft:"230px"}}>
            <div className="header">

                <h3>Active Users</h3>
             
            </div>


            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={users}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}

                    pagination
                    dense
                />
            </div>
        </div>
        </div>
    )
}

export default ActiveUsers
