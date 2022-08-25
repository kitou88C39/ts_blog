import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/user-auth');
  };

  return (
    <div className='w-full'>
      <nav className='flex flex-wrap items-center justify-between p-4 bg-emerald-500'>
        <div className='flex items-center flex-shrink-0 mr-6 text-white'>
          <span className='text-2xl font-semibold tracking-tight'>
            Front-end Blog
          </span>
        </div>
        <Link to='/user-auth'>
          <button
            onClick={handleClick}
            className='inline-block px-4 py-2 mt-4 text-sm leading-none text-white border border-white rounded hover:border-transparent hover:text-emerald-700 hover:bg-white lg:mt-0'
          >
            Login to admin
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
