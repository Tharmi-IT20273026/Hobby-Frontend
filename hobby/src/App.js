import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import UsersLogin from './UsersLogin';
import HobbyInformation from './HobbyInformation'
import CreateHobby from './CreateHobby'





import {useTable}from 'react-table'

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path ="/" element={<UsersLogin />}> </Route>
            <Route path ="/userHobbyList" element={<HobbyInformation />}> </Route>
            <Route path ="/create" element={<CreateHobby />}> </Route>
            

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
