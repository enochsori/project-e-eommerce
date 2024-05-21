import React from 'react';

type Prop = {
  title: string;
  onClick: () => void;
};
export default function Button({ title, onClick }: Prop) {
  return (
    <button
      className='bg-brand py-2 px-4 text-white rounded-sm hover:brightness-110'
      onClick={onClick}
    >
      {title}
    </button>
  );
}
