import { useQuery } from '@tanstack/react-query';
import { getCart } from '../apis/firebase';
import { useAuthContext } from '../context/AuthContext';
import CartItem from '../components/ui/CartItem';
import PriceCard from '../components/ui/PriceCard';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { SHIPPING } from '../service/types/type';
import { FaEquals } from 'react-icons/fa';
import Button from '../components/ui/Button';

export default function MyCart() {
  const {
    user: { uid },
  } = useAuthContext();

  const { data: products, isLoading } = useQuery({
    queryKey: ['carts'],
    queryFn: () => getCart(uid),
  });

  console.log(products);

  if (isLoading) return <p>Loading...</p>;

  const hasProducts = products && products.length > 0;

  const totalPrice = products?.reduce(
    (prev, current) => prev + current.price * current.quantity,
    0
  );

  const handleOrder = () => {
    console.log('Thank You');
  };

  return (
    <section className='p-8 flex flex-col'>
      <p className='text-2xl text-center font-bold border-b border-gray-300 pb-4 mb-8'>
        My cart
      </p>
      {!hasProducts && <p>Your cart is empty now</p>}
      {hasProducts && (
        <>
          <ul className='border-b border-gray-300 pb-4 mb-8 p-4 px-8'>
            {products &&
              products.map((product) => (
                <CartItem key={product.id} product={product} uid={uid} />
              ))}
          </ul>
          <div className='flex justify-between items-center p-2 md:px-8 mb-16'>
            <PriceCard
              text='Total cost of items'
              price={totalPrice as number}
            />
            <BsFillPlusCircleFill className='shrink-0' />
            <PriceCard text='Delivery fee' price={SHIPPING} />
            <FaEquals />
            <PriceCard
              text='Total cost'
              price={totalPrice && ((totalPrice + SHIPPING) as number)}
            />
          </div>
          <Button title='Order' onClick={handleOrder} disabled={false} />
        </>
      )}
    </section>
  );
}
