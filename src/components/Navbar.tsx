import { Link, useNavigate } from 'react-router-dom';

import { IoIosLogIn } from 'react-icons/io';
import { IoIosLogOut } from 'react-icons/io';
import { GrUserAdmin } from 'react-icons/gr';
import { RiShoppingCartLine } from 'react-icons/ri';

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <header className='w-full flex justify-between items-center p-4 mb-4 text-2xl border-b border-gray-300'>
      <Link to='/' className='flex hover:opacity-80'>
        <img src='/favicon.ico' alt='' className='w-16 rounded-lg mr-2' />
        <h1 className='font-bold text-brand text-4xl'>muzik</h1>
      </Link>

      <nav className='flex items-center gap-6 font-semibold'>
        <Link to='/all-items' className='hover:opacity-60'>
          <span>All Products</span>
        </Link>

        {/* {user && user.isAdmin && (
          <Link to='/new-product' className='hover:opacity-60'>
            <GrUserAdmin />
          </Link>
        )} */}

        {/* {user && (
          <div className='relative mr-4 flex justify-center items-center'>
            <p className='bg-red-500 h-5 w-5 rounded-full text-center text-sm font-bold absolute -top-1.5 left-3 opacity-80'>
              1
            </p>
            <RiShoppingCartLine
              className='text-2xl hover:opacity-80 hover:cursor-pointer'
              onClick={() => navigate('/cart')}
            />
          </div>
        )}       
\
        {user && <User user={user} />} */}

        <div className='relative mr-4 flex justify-center items-center'>
          <p className='bg-red-500 h-5 w-5 rounded-full text-center text-sm font-bold absolute -top-1.5 left-3 opacity-80'>
            1
          </p>
          <RiShoppingCartLine
            className='text-2xl hover:opacity-80 hover:cursor-pointer'
            onClick={() => navigate('/cart')}
          />
        </div>
        <button
          //   onClick={user ? () => logout() : () => login()}
          className='hover:opacity-60'
        >
          <IoIosLogOut />
          {/* {user ? <IoIosLogOut /> : <IoIosLogIn />} */}
        </button>
      </nav>
    </header>
  );
}
