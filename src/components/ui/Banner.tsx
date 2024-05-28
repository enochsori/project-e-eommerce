export default function Banner() {
  return (
    <section className='h-96 bg-yellow-900 relative rounded-lg'>
      <div className='w-full h-full bg-cover bg-banner opacity-40 rounded-lg'></div>
      <div className=' absolute w-full top-36 text-center text-gray-50 drop-shadow-2xl'>
        <h2 className='text-6xl '>Muzik with US</h2>
        <p className='text-2xl'>Best people, best muzik</p>
      </div>
    </section>
  );
}
