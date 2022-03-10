


import React, { useState, useEffect } from 'react';
import { getUsers ,editUser} from '../../Axios'
import { DataGrid } from '@mui/x-data-grid';
import { IconButton, Button,Switch } from '@mui/material';
import { DeleteRounded } from '@mui/icons-material'
import Swal from 'sweetalert2'
import { useNavigate,Link } from 'react-router-dom';


function ViewUsers() {
   
const navigate=useNavigate()
    const columns = [

        { field: 'id', headerName: 'ID', width: 200 },
        { field: 'email', headerName: 'Email', width: 180 },
        { field: 'username', headerName: 'User Name', width: 180 },
        { field: 'isActive', headerName: 'Active Status', width: 180},
        {
            field: 'Block',
            headerName: 'Block / Unblock',
            sortable: false,
            width: 180,
            renderCell: (params) => {
                const onClick = (e) => {
                    e.stopPropagation(); 
                    console.log(params);
    
    
                };

                const onChange=(e)=>{
                  console.log("juujdb");
                  let id=params.row.id

                  console.log(id);
                    editUser({userId:params.row.id,status:!params.row.isActive}).then((data)=>{

                        const rows = data.data.users.map((item) => {
                            return { ...item, id: item._id }
                        })
                        setUsers(rows)

                    }).catch((err)=>{
                        if (err.response.status == 403) {
                            localStorage.removeItem("token");
                            
                            navigate('/login')
                        }

                    })
                }

                
    
                return <Switch checked={!params.row.isActive}  onChange={onChange} name="loading" color="primary" />
            }
    
        },

       
        
        
    ];
    const [users, setUsers] = useState([])
    useEffect(() => {
        getUsers().then((data) => {
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
        <div className="ViewUser card p-4">
            <div className="header">

                <h3>Users</h3>

                <span className=''>
                   <Button variant="contained"onClick={()=>{
                     navigate('/ActiveUsers')
                   }} >Active users</Button>
                </span>
                <span className='' style={{marginLeft:"40px"}}>
                   <Button variant="contained" onClick={()=>{
                     navigate('/BlockedUsers')
                   }}>Blocked users</Button>
                </span>
               
            </div>


            <div style={{ height: 400, width: '100%',marginTop:"40px" }}>
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
    )
}

export default ViewUsers
