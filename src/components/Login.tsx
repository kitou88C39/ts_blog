import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NavigateFunction } from 'react-router/lib/hooks';

const Login: React.FC = () => {
  const login = (
    email: string,
    password: string,
    navigate: NavigateFunction
  ) => {
    // TODO: 実際のログイン処理
    console.log(email, password, navigate);
  };
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    login(email, password, navigate);
  };

  return (
    <div className='relative flex flex-col justify-center min-h-full overflow-hidden'>
      <div className='w-1/2 p-5 m-auto bg-white rounded-md shadow-lg lg:max-w-xl'>
        <h1 className='text-4xl font-bold text-center underline text-emerald-500'>
          LogIn
        </h1>
        <form className='mt-6' onSubmit={handleSubmit}>
          <div className='mb-2'>
            <label
              typeof='email'
              className='block text-sm font-bold text-gray-800'
            >
              Email
            </label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.currentTarget.value);
              }}
              type='email'
              className='block w-full px-4 py-2 mt-2 bg-white border rounded-md text-emerald-600 focus:border-emerald-400 focus:ring-emerald-300 focus:outline-none focus:ring focus:ring-opacity-40'
            />
          </div>
          <div className='mb-2'>
            <label
              typeof='password'
              className='block text-sm font-bold text-gray-800'
            >
              Password
            </label>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.currentTarget.value);
              }}
              type='password'
              className='block w-full px-4 py-2 mt-2 bg-white border rounded-md text-emerald-700 focus:border-emerald-400 focus:ring-emerald-300 focus:outline-none focus:ring focus:ring-opacity-40'
            />
          </div>
          <div className='mt-6'>
            <Link to='/'>
              <button className='w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform rounded-md bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:bg-emerald-600'>
                LogIn
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
