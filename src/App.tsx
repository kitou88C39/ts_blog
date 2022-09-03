import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import AddUser from './features/AddUser';
import EditUser from './features/EditUser';
import UserList from './features/UserList';
//import { Amplify } from "aws-amplify";
// import { withAuthenticator } from "@aws-amplify/ui-react";
// import @aws-amplify/ui-react/style.css;
// import awsExports from "./aws-exports";
// Amplify.configure(awsExports);


function App() {
  return (
    <div className='flex flex-col h-full bg-white shadow-lg max-h-16'>
      <Header />
      <div className='container max-w-5xl px-2 pt-10 mx-auto md:pt-32'>
        <Routes>
          <Route path='/' element={<UserList />} />
          <Route path='/add-user' element={<AddUser />} />
          <Route path='/edit-user/:id' element={<EditUser />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
