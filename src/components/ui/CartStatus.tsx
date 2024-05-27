import { RiShoppingCartLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { useEffect } from 'react';

export default function CartStatus() {
  const navigate = useNavigate();

  const {
    cartQuery: { data: products },
  } = useCart();

  useEffect(() => console.log(products), [products]);

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
