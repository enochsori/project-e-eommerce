import { useNavigate } from 'react-router-dom';
import { Item } from '../../service/types/type';

type Props = {
  category: Item;
};

export default function CategoryCard({ category }: Props) {
  const navigate = useNavigate();

  return (
    <li
      className=' rounded-lg shadow-lg flex justify-center cursor-pointer'
      onClick={() => navigate(`/${category.item}`, { state: { category } })}
    >
      <img
        src={category.imageSrc}
        alt=''
        className='w-70 h-98 rounded-lg hover:opacity-60 ease-in duration-200 object-cover '
      />
    </li>
  );
}
