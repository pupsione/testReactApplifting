import { Link, Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <div className='bg-zinc-100 py-2'>
      <nav className='container mx-auto'>
        <ul id='nav-mobile' className='flex items-center text-gray-500'>
          <li className='flex-none pr-[40px] '>
            <Link to='/'>
              <img src='./images/icons/logo.svg' alt='icons logo' />
            </Link>
          </li>
          <li className='flex-none pr-[40px] hover:text-black active:text-black-'>
            <Link to='/'>Recent Articles</Link>
          </li>
          <li className='flex-1 w-64 hover:text-black active:text-black'>
            <Link to='/about'>About</Link>
          </li>
          <li className='flex-1 w-64 text-right text-blue-500 hover:text-black active:text-blue-300'>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Header;
