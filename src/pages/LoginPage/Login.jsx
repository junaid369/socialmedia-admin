


import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import validation from "./Loginvalidation"
import { login } from "../../Axios"
import Alert from '@mui/material/Alert';
import './Login.css'





const Signup = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",


  });

  const [errors, setErrors] = useState({ error: true, emailErr: "", passwordErr: "" })



  const [alert, setAlert] = useState("")
  const navigate = useNavigate()

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };


  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));

    console.log(errors, "o");


    if (!errors.error) {




      let ab = localStorage.getItem("token")
      console.log(ab, "your token");





      login(values).then((data) => {
        console.log("in fromt");
        navigate('/')


      }).catch((err) => {


        setAlert(err.response.data.message)


      })




    }



  };

  useEffect(() => {

    let ab = localStorage.getItem("token")
    if (ab) {
      navigate('/')
    }
    else {
      navigate('/login')
    }

  }, [navigate]);




  return (







    <div className="container bal_height">

      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto  " style={{ marginTop: '20px' }}>
          <div className="card card-signin my-5 ">
            <div className="card-body">
              <h2 className="text-center sign_heigt"><strong>Admin Login</strong></h2>

              <form className="form-signin padding_form" style={{ marginTop: '25px' }} >


                <div className="form-label-group">
                  <input
                    type="email"
                    id="inputemail"
                    name="email"
                    className="form-control"
                    placeholder="Email Address"
                    value={values.email}
                    onChange={handleChange}
                    autofocus
                  />
                  {errors.email && <p className="error">{errors.email}</p>}

                  <label for='inputemail'>Email Address</label>
                </div>

                <div className="form-label-group">
                  <input
                    type="password"
                    id="inputPassword"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                  />
                  {errors.password && <p className="error">{errors.password}</p>}
                  <label for="inputPassword">Password</label>
                </div>







                <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit" onClick={handleFormSubmit}>Get Started</button>
              </form >
              <br />
           




              {
                alert ? <Alert severity="error">{alert}</Alert> : null
              }



            </div>
          </div>
        </div>
      </div>
    </div>





  )
}

export default Signup;
