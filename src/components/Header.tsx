import { useNavigate } from 'react-router-dom';
//import { Link } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Authenticator } from '@aws-amplify/ui-react';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/login');
    const { user, signOut } = useAuthenticator((context) => [context.user]);
  };

  return (
    <div className='w-full'>
      <nav className='flex flex-wrap items-center justify-between p-4 bg-emerald-500'>
        <div className='flex items-center flex-shrink-0 mr-6 text-white'>
          <span className='text-2xl font-semibold tracking-tight'>
            Front-end Blog
          </span>
        </div>
        <Authenticator>
          {({ signOut, user }) => (
            <main>
              {user ? (
                <h1 className='font-bold text-white'>
                  Manager：{user.username}
                </h1>
              ) : (
                <button
                  onClick={signOut}
                  className='inline-block px-4 py-2 mt-4 text-sm leading-none text-white border border-white rounded hover:border-transparent hover:text-emerald-700 hover:bg-white lg:mt-0'
                >
                  LogOut
                </button>
              )}
            </main>
          )}
        </Authenticator>
        {/* <Link to='/login'>
          <button
            onClick={handleClick}
            className='inline-block px-4 py-2 mt-4 text-sm leading-none text-white border border-white rounded hover:border-transparent hover:text-emerald-700 hover:bg-white lg:mt-0'
          >
            LogIn
          </button>
        </Link> */}
      </nav>
    </div>
  );
};

export default Header;
