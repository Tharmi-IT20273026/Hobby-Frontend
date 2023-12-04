
import React, { useEffect, useState } from "react";

import { Link} from 'react-router-dom';
import axios from 'axios';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';

function UsersLogin() {



  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
 const [userLogin, setUserLogin] = useState("");


 


 const handleLogin = (e) => {
  e.preventDefault();
  axios.post("http://localhost:8081/ulogin",{
    user:username,
    password:password,
  }).then((response) => {
  
    console.log("octopus bi")
    window.location.replace("http://localhost:3000/hobbyList")
  })

}


  return (
    
    <MDBContainer fluid>

      <Header/>
      <MDBRow>

        <MDBCol sm='6'>

          <div className='d-flex flex-row ps-5 pt-5'>
            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }}/>
            <span className="h1 fw-bold mb-0">SignIn AS ADMIN</span>
          </div>

          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>

            <MDBInput
            wrapperClass="mb-4 mx-5 w-100"
            label="User Name"
            id="formControlLg"
            type="text"
            size="lg"
            value={username}
            onChange={e => setusername(e.target.value)}
          />
          <MDBInput
            wrapperClass="mb-4 mx-5 w-100"
            label="Password"
            id="formControlLg"
            type="password"
            size="lg"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />


            <MDBBtn className="mb-4 px-5 mx-5 w-100" color='info' size='lg' onClick={handleLogin}>Login</MDBBtn>
            <p className="small mb-5 pb-lg-3 ms-5"><a class="text-muted" href="#!">Forgot password?</a></p>
            <p className='ms-5'>Don't have an account? <a href="#!" class="link-info">Register here</a></p>

          </div>

        </MDBCol>

        <MDBCol sm='6' className='d-none d-sm-block px-0'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
            alt="Login image" className="w-100" style={{objectFit: 'cover', objectPosition: 'left'}} />
        </MDBCol>

      </MDBRow>
      <br/>
      <Footer/>

    </MDBContainer>
  );
}

export default UsersLogin;