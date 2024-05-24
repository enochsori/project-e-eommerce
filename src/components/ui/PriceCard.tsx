type Props = {
  price: number | undefined;
  text: string;
};

export default function PriceCard({ price, text }: Props) {
  return (
    <div className='bg-gray-100 rounded-2xl text-center text-lg md:text-xl p-6 px-8'>
      <p className='font-bold'>{text}</p>
      <p className='font-bold text-brand text-xl md:text-2xl'>${price}</p>
    </div>
  );
}
