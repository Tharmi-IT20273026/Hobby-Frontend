import React, { useEffect, useState } from "react";
import { Table, Button } from "antd";


import { Link } from "react-router-dom";

import axios from 'axios';
import {
  MDBBtn,
  MDBContainer,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
  MDBIcon,
  MDBTextArea
}from 'mdb-react-ui-kit';


function HobbyInformation(){

    const [hobbyInfo, setHobbyInfo]=useState([]);
   
    const [modalOpen, setModalOpen] = useState(false); // State for modal visibility
    const [selectedHobby, setSelectedHobby] = useState(null); // State to store the selected book

    
  const [hobby, setHobby] = useState("");
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  

    

    useEffect(()=>{
        axios.get('http://localhost:8081/hobbyList')
        .then(res => setHobbyInfo(res.data))
        .catch(err =>console.log(err));
    },[]);

 
   

    const columns = [
        {
          title: 'HOBBY ID',
          dataIndex: 'hobbyId',
          key: 'hobbyId',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'HOBBY',
          dataIndex: 'hobby',
          key: 'hobby',
        },
        {
          title: 'USER NAME',
          dataIndex: 'user',
          key: 'user',
        },
        {
          title: 'USER EMAIL',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'CONTACT NUMBER',
          dataIndex: 'contactNo',
          key: 'contactNo',
        },
      
      
        {
          title: 'UPDATE',
          dataIndex: '',
          key: 'UPDATE',
          render: (text, record) => <MDBBtn color='info' onClick={() => handleUpdate(record)}>
          UPDATE
        </MDBBtn>,
       
        },
        {
          title: 'DELETE',
          dataIndex: '',
          key: 'DELETE',
          render: (text, record) => <MDBBtn color='danger'  onClick={() => handleDelete(record.bookId)}>DELETE</MDBBtn>,
        },
      ];

     

      const handleUpdate = (hobbies) => {
        setSelectedHobby(hobbies); // Store the selected user hobby in state
        setHobby(hobbies.hobby);
        setUser(hobbies.bookAuthor);
        setEmail(hobbies.email);
        setContactNo(hobbies.contactNo);
        setModalOpen(true);
      };

      const handleSaveChanges = async () => {
        if (!selectedHobby) return;
    
        try {
          const updatedHobby = {
            ...selectedHobby,
            hobby: hobby,
            user: user,
            email: email,
            contactNo: contactNo
           
          };
    
          await axios.put(`http://localhost:8081/updatebook/${selectedHobby.hobbyId}`, updatedHobby);
          setModalOpen(false);
          window.location.reload();
        } catch (err) {
          console.log(err);
        }
      };

     

   const handleDelete = async (hobbyId) => {
  try {
    await axios.delete(`http://localhost:8081/Hobby/` + hobbyId);
      window.location.reload();
  } catch (err) {
    console.log(err);
  }
};


    
      return (

        
        <div>
          
          <h1>Hobby Management System</h1>
          <br/>
          <Link to="/create">
    <MDBBtn className='me-1' color='success'>
      Add Hobbies
    </MDBBtn>
  </Link>

          <br/> <br/> <br/>
          <Table columns={columns} dataSource={hobbyInfo} />
          <MDBModal show={modalOpen} setShow={setModalOpen} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Update Hobby Informations</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={() => setModalOpen(false)}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="atlas" size='lg' style={{ padding: '25px' }}/>
              <MDBInput
                label='Hobby'
                id='form1'
                type='text'
                className='w-100'
                onChange={e => setHobby(e.target.value)}
                size='lg'
              />
            </div>
            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="user" size='lg' style={{ padding: '25px' }}/>
              <MDBInput
                label='User Name'
                id='form1'
                type='text'
                className='w-100'
                onChange={e => setUser(e.target.value)}
                size='lg'
              />
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="calendar-alt" size='lg'style={{ padding: '25px' }} />
              <MDBInput
                label='User Email'
                id='form1'
                type='text'
                className='w-100'
                onChange={e => setEmail(e.target.value)}
                size='lg'
              />
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fab icon="microsoft" size='lg'style={{ padding: '25px' }} />
              <MDBInput
                label='Contact Number'
                id='form1'
                type='text'
                className='w-100'
                onChange={e => setContactNo(e.target.value)}
                size='lg'
              />
            </div>


            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="info" onClick={() => setModalOpen(false)}>
                Close
              </MDBBtn>
              <MDBBtn className='me-1' color='warning' onClick={handleSaveChanges}> Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    
          <Footer/>
        </div>
      );
    }
    
    export default HobbyInformation;