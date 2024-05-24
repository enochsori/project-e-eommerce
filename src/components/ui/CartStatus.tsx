import { useQuery } from '@tanstack/react-query';
import { RiShoppingCartLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { getCart } from '../../apis/firebase';
import { useAuthContext } from '../../context/AuthContext';

export default function CartStatus() {
  const navigate = useNavigate();
  const {
    user: { uid },
  } = useAuthContext();

  const { data: products } = useQuery({
    queryKey: ['carts'],
    queryFn: () => getCart(uid),
  });

  return (
    <div className='mx-2 relative'>
      <RiShoppingCartLine
        className='text-4xl hover:opacity-80 hover:cursor-pointer '
        onClick={() => navigate('/cart')}
      />
      {products && (
        <p className='h-6 w-6 bg-brand text-center text-white text-sm font-bold rounded-full absolute -top-1 -right-2'>
          {products.length}
        </p>
      )}
    </div>
  );
}
