import ProductCard from '../components/ui/ProductCard';
import { ProductType } from '../service/types/type';
import useProducts from '../hooks/useProduct';

export default function Product() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {products &&
          products.map((product: ProductType) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </>
  );
}
