import { Link, useNavigate } from 'react-router-dom';

import { GrUserAdmin } from 'react-icons/gr';
import { RiShoppingCartLine } from 'react-icons/ri';

import UserComponent from './UserComponent';
import { useAuthContext } from '../context/AuthContext';
import Modal from './ui/Modal';
import CartStatus from './ui/CartStatus';

export default function Navbar() {
  const { user, login, logout, modal } = useAuthContext();
  return (
    <header className='w-full flex justify-between items-center p-4 mb-4 text-2xl border-b border-gray-300'>
      <Link to='/' className='flex hover:opacity-80'>
        <img src='/favicon.ico' alt='' className='w-16 rounded-lg mr-2' />
        <h1 className='font-bold text-brand text-4xl'>muzik</h1>
      </Link>

      <nav className='flex items-center gap-6 font-semibold'>
        <Link to='/all-products' className='hover:opacity-60'>
          <span className='text-lg'>All Products</span>
        </Link>

        {user && user.isAdmin && (
          <Link to='/new-product' className='hover:opacity-60'>
            <GrUserAdmin />
          </Link>
        )}

        {user && (
          <div className='flex'>
            <UserComponent user={user} />
            <CartStatus />
          </div>
        )}

        <div className='h-10 border-r border-gray-300 '></div>

        <button
          onClick={user ? logout : login}
          className='text-lg hover:opacity-80'
        >
          {user ? 'Log out' : 'Log in'}
        </button>
      </nav>
      {modal.status && <Modal />}
    </header>
  );
}
