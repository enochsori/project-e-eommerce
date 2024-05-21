import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../apis/firebase';
import ProductCard from '../components/ui/ProductCard';
import { ProductType } from '../service/types/type';

export default function Product() {
  const {
    isLoading,
    data: products,
    error,
  } = useQuery({ queryKey: ['products'], queryFn: getProducts });

  // useEffect(() => {
  //   getProducts();
  // }, []);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2'>
        {products &&
          products.map((product: ProductType) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </>
  );
}
