import { useLocation } from 'react-router-dom';

export default function Products() {
  const {
    state: {
      category: { item, imageSrc },
    },
  } = useLocation();

  return (
    <div className='px-6'>
      <section className='flex items-end gap-2'>
        <img
          src={imageSrc}
          alt={`${item} image`}
          className='rounded-full h-10 w-10 object-cover'
        />
        <h1 className='text-2xl font-bold'>
          {item ? item : 'Comming soom..'}
          {/* <span className='text-brand'> Muzik</span> */}
        </h1>
      </section>
    </div>
  );
}
