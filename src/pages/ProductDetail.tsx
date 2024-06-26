import { useLocation } from 'react-router-dom';
import Button from '../components/ui/Button';
import { useAuthContext } from '../context/AuthContext';
import useCart from '../hooks/useCart';
import { useState } from 'react';

export default function ProductDetail() {
  const { user } = useAuthContext();
  const [success, setSuccess] = useState<string>('');

  const {
    state: {
      product: { id, image, price, description, name, category },
    },
  } = useLocation();

  const { addOrUpdateItem } = useCart();

  const handleAddProduct = () => {
    // add the product into the carts
    const product = { id, image, name, price, quantity: 1 };
    if (user)
      addOrUpdateItem.mutate(product, {
        onSuccess: () => {
          setSuccess(`Added "${product.name}" into your cart!`);
          setTimeout(() => {
            setSuccess('');
          }, 3000);
        },
      });
  };

  return (
    <>
      <p className='mx-12 mt-4 text-gray-700 text-lg'>
        {category.toUpperCase()}
      </p>

      <section className='flex flex-col md:flex-row p-4'>
        <img
          src={image}
          alt='Product Image'
          className='w-full md:w-[300px] basis-7/12 rounded-lg'
        />
        <div className='w-full basis-5/12 md:ml-6 flex flex-col p-4'>
          <h2 className='text-3xl font-bold py-2 '>{name}</h2>
          <p className='border-b border-gray-400 text-2xl font-bold py-2'>
            $ {price}
          </p>
          <p className='py-4 text-lg'>{description}</p>
          {success !== '' && (
            <p className='font-bold text-center text-2xl'>{success}</p>
          )}
          <Button
            title='Add to your cart'
            onClick={handleAddProduct}
            disabled={user ? false : true}
          />
        </div>
      </section>
    </>
  );
}
