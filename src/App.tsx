import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AddUser from './features/AddUser';
import EditUser from './features/EditUser';
import UserList from './features/UserList';
import { Amplify, API, DataStore, graphqlOperation } from 'aws-amplify';
//import { useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
Amplify.configure(awsExports);
//import { createTodo } from './graphql/mutations';
import { listTodos } from './graphql/queries';
import { useEffect, useState } from 'react';

const App = () => {
  // 認証状態を取得
  //const { route } = useAuthenticator((context) => [context.route]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodo();
  }, []);

  const fetchTodo = async () => {
    try {
      const todoData = await API.graphql(graphqlOperation(listTodos));
      const todoList = todoData.data.listTodos.items;
      console.log('todo list', todoList);
      setTodos(todoList);
    } catch (error) {
      console.log('error on fetching todos', error);
    }
  };

  return (
    <>
      <div className='flex flex-col h-full bg-white shadow-lg max-h-16'>
        <Header />
      </div>

      <div className='container max-w-5xl px-2 pt-10 mx-auto md:pt-32'>
        <Routes>
          <Route path='/' element={<UserList />} />
          <Route path='/add-user' element={<AddUser />} />
          <Route path='/edit-user/:id' element={<EditUser />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
