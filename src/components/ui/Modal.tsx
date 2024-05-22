import { useAuthContext } from '../../context/AuthContext';

export default function Modal() {
  const { modal, setModal } = useAuthContext();

  const handleClose = () => {
    setModal({ message: '', status: false });
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-white p-10 rounded-lg shadow-lg relative'>
        <button
          className='absolute top-2 right-2 h-8 w-8 text-white hover:text-gray-700 bg-brand flex justify-center items-center rounded-md'
          onClick={handleClose}
        >
          <span className='font-bold'>&times;</span>
        </button>
        <p className='mt-4'>{modal.message}</p>
      </div>
    </div>
  );
}
