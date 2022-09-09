import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { getToken } from '../API';

const Header = () => {
  const [token, setToken] = useState(getToken());

  return (
    <div className='bg-zinc-100 py-2 mb-[60px]'>
      <nav className='container mx-auto'>
        <ul
          id='nav-mobile'
          className='flex items-center text-gray-500 justify-between'
        >
          <li className='flex-none pr-[40px]'>
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

          {!token ? (
            <li className='text-right text-blue-500 hover:text-black active:text-blue-300'>
              <Link to='/login'>Log in</Link>
            </li>
          ) : (
            <div className='flex justify-between items-center'>
              <li className='hover:text-black active:text-black pr-[40px]'>
                <Link to='/myarticles'>My Articles</Link>
              </li>
              <li className='text-right text-blue-500 hover:text-black active:text-blue-300 pr-[40px]'>
                <Link to='/createArticle'>Create Article</Link>
              </li>
              <li className='text-right text-blue-500 hover:text-black active:text-blue-300 max-w-[32px]'>
                <Link to='/login'>
                  <img
                    src='./images/icons/userIcon.svg'
                    alt='icons user'
                    className='rounded-full '
                  />
                </Link>
              </li>
            </div>
          )}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Header;
