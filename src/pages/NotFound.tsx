import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

export default function NotFound() {
  return (
<div className='w-full flex justify-center p-20'>
      <Link to='/'>
        <img
          src='/images/not-found.jpg'
          alt='not found image'
          className='rounded-3xl'
        />
        <div className='w-full flex items-center justify-center text-2xl font-bold mt-2 '>
          <p className='mr-2'>Click to Home</p>
          <FaHome className=' text-red-600' />
        </div>
      </Link>
    </div>
  );
}
