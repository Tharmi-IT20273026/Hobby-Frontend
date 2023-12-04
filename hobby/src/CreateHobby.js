import { Button, Checkbox, Form, Input } from 'antd';
import { useState } from 'react';
import axios from 'axios';
import { useNAvigate } from 'react-router-dom';
import { Link } from "react-router-dom";

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
  MDBTextArea
}from 'mdb-react-ui-kit';



function CreateHobby(){

 
  const [hobby, setHobby] = useState("");
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [prize, setPrize] = useState("");
  const [description, setdescription] = useState("");
  const [listStatus, setListStatus] = useState("");

  const addHobby = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8081/posthobby",{
        hobby:hobby,
        user:user,
        email:email,
        contactNo:contactNo ,
      
    }).then((response) => {
      console.log("success")
      window.location.replace("http://localhost:3000/userHobbyList")
    })

}


 



   
  return (
    <MDBContainer fluid>
  <Header/>
  <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
      <MDBCardBody>
        <MDBRow>
          <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Add Hobby Information</p>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="atlas" size='lg' style={{ padding: '25px' }}/>
              <MDBInput
                label='Book Name'
                id='form1'
                type='text'
                className='w-100'
                required
                onChange={e => setHobby(e.target.value)}
                size='lg'
              />
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="user" size='lg' style={{ padding: '25px' }}/>
              <MDBInput
                label='Author Name'
                id='form1'
                type='text'
                className='w-100'
                onChange={e => setUser(e.target.value)}
                size='lg'
                required
              />
            </div>

          

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fab icon="microsoft" size='lg'style={{ padding: '25px' }} />
              <MDBInput
                label='Book Type'
                id='form1'
                type='text'
                className='w-100'
                required
                onChange={e => setEmail(e.target.value)}
                size='lg'
              />
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="hand-holding-usd" size='lg' style={{ padding: '25px' }}/>
              <MDBInput
                label='Prize'
                id='typeNumber'
                type='number'
                onChange={e => setPrize(e.target.value)}
                size='lg'
                required
                style={{ width: '100%' }} // Increase input field length
              />
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="comment" size='lg' style={{ padding: '25px' }}/>
              <MDBTextArea
                label='Description'
                id='textAreaExample'
                rows={4}
                onChange={e => setContactNo(e.target.value)}
                size='lg'
                required
              />
            </div>
      
            <MDBBtn className='me-1' color='success' size='lg' onClick={addHobby}>Add Hobby</MDBBtn>
            <br/>
           
            <Link to="/userHobbyList">
    <MDBBtn className='me-1' color='dark'>
      Back
    </MDBBtn>
  </Link>
          </MDBCol>
         

          <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
            <MDBCardImage src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWmDg0bLe4Xgo69qxYgkNl2lUahM7Dtlz5zw&usqp=CAU' fluid />
          </MDBCol>

        </MDBRow>
      </MDBCardBody>
    </MDBCard>
        <Footer/>
    </MDBContainer>
  );

}

export default CreateHobby;