import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
import { UpdateCartProduct } from '../../service/types/type';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { addOrUpdateCart, removeFromCart } from '../../apis/firebase';

type Prop = {
  product: UpdateCartProduct;
  uid: string;
};

const ICON_CLASS =
  'transition-all cursor-pointer hover:text-brand hover:scale-105 mx-1';

export default function CartItem({
  product,
  product: { id, image, name, quantity, price },
  uid,
}: Prop) {
  const handleMinus = () => {
    if (quantity < 2)
      addOrUpdateCart(uid, { ...product, quantity: quantity - 1 });
  };

  const handlePlus = () =>
    addOrUpdateCart(uid, { ...product, quantity: quantity + 1 });

  const handleDelete = () => removeFromCart(uid, id);

  return (
    <li className='flex justify-between my-2 items-center mb-6'>
      <img src={image} alt='' className='w-24 md:w-48 rounded-lg' />
      <div className='flex-1 flex justify-between ml-4'>
        <div className='basis3/5'>
          <p className='text-lg font-bold'>{name}</p>
          <p className='text-brand font-bold'>${price}</p>
        </div>

        <div className='flex items-center text-2xl'>
          <AiOutlineMinusSquare className={ICON_CLASS} onClick={handleMinus} />
          <span>{quantity}</span>
          <AiOutlinePlusSquare onClick={handlePlus} className={ICON_CLASS} />
          <RiDeleteBin5Fill onClick={handleDelete} className={ICON_CLASS} />
        </div>
      </div>
    </li>
  );
}
