import { useNavigate } from 'react-router-dom';
import { ProductType } from '../../service/types/type';
type Props = {
  product: ProductType;
};

export default function ProductCard({
  product,
  product: { image, name, category, price, id },
}: Props) {
  const navigate = useNavigate();

  return (
    <li
      className='rounded-lg shadow-md overflow-hidden cursor-pointer flex flex-col justify-between hover:opacity-80 ease-in duration-200'
      onClick={() => navigate(`/product/${id}`, { state: { product } })}
    >
      <img src={image} alt='Product image' className='w-full h-[85%]' />

      <div>
        <div className='px-2 text-lg font-bold flex justify-between items-center'>
          <h3 className='truncate'>{name}</h3>
          <p>{`$ ${price}`}</p>
        </div>
        <p className='mb-2 px-2 text-gray-600'>{category}</p>
      </div>
    </li>
  );
}
