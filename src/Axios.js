
import axios from 'axios'



export const login = (formdata) => {
 
    return new Promise(async (resolve, reject) => {
        console.log(formdata,"pp");
        axios.post('http://localhost:3000/api/admin/login', formdata).then((data) => {
            console.log("junaid")
            console.log(data.data);
            localStorage.setItem("token", data.data.token)
            localStorage.setItem("token", JSON.stringify(data.data.token))
       let ab= localStorage.getItem("user")
       console.log(ab,"888888");
         

            resolve(data.data)

        }).catch((err) => {
            console.log("junadi");
            console.log('err', err);
            reject(err)
        })
    })

}
export const getUsers =()=>{
    console.log("in get users");
    return new Promise(async(resolve,reject)=>{
        const token = localStorage.getItem("token")
        console.log(token,"your token");


        axios.get('http://localhost:3000/api/admin/getAllUsers',{ headers: { Authorization: token } }).then((data)=>{
    
            resolve(data)

        }).catch((err)=>{
            reject(err)

        })
    })

}



export const deleteUser =(userId)=>{
    
    return new Promise(async(resolve,reject)=>{
        const token = localStorage.getItem("token")

        axios.patch('http://localhost:3000/api/admin/deleteUser',{userId},{ headers: { Authorization: token } }).then((data)=>{
            console.log(data.data.users);
            resolve(data)

        }).catch((err)=>{
            reject(err)

        })
    })

}

export const editUser =(formdata)=>{
    console.log("user in edit");
    console.log(formdata);
    return new Promise(async(resolve,reject)=>{
        const token = localStorage.getItem("token")

        axios.patch('http://localhost:3000/api/admin/editUser',formdata,{ headers: { Authorization: token } }).then((data)=>{
            console.log(data.data.users);
            resolve(data)

        }).catch((err)=>{
            reject(err)

        })
    })

}
export const getActiveUsers =()=>{
    console.log("user in edit");
  
    return new Promise(async(resolve,reject)=>{
        const token = localStorage.getItem("token")

        axios.get('http://localhost:3000/api/admin/Activeuser',{ headers: { Authorization: token } }).then((data)=>{
            console.log(data.data.users);
            resolve(data)

        }).catch((err)=>{
            reject(err)

        })
    })

}
export const getBlockedUsers =()=>{
    console.log("user in block");
  
    return new Promise(async(resolve,reject)=>{
        const token = localStorage.getItem("token")

        axios.get('http://localhost:3000/api/admin/Blockedusers',{ headers: { Authorization: token } }).then((data)=>{
            console.log(data.data.users);
            resolve(data)

        }).catch((err)=>{
            reject(err)

        })
    })

}

