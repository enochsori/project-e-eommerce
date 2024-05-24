import { useAuthContext } from '../../context/AuthContext';

type Prop = {
  title: string;
  onClick: () => void;
  disabled: boolean;
};

export default function Button({ title, onClick, disabled }: Prop) {
  const { user, setModal } = useAuthContext();

  const handleOnClick = () => {
    if (user) {
      onClick();
    } else {
      setModal({
        message:
          '"Please log in so that we can know who our valued customers are."',
        status: true,
      });
    }
  };

  return (
    <button
      className={`bg-brand py-2 px-4 text-white rounded-lg ${
        disabled ? ' cursor-not-allowed' : 'hover:brightness-110'
      } `}
      onClick={handleOnClick}
    >
      {title}
    </button>
  );
}
