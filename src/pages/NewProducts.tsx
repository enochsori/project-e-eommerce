import { ChangeEvent, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { uploadImage } from '../apis/uploader';
import { NewProductFormData, ProductType } from '../service/types/type';
import useProducts from '../hooks/useProduct';

export default function NewProduct() {
  const { register, handleSubmit, reset } = useForm<NewProductFormData>();
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [success, setSuccess] = useState<string | null>(null);

  const { addProduct } = useProducts();

  const categoryOptions = [
    'acoustic-guitar',
    'elec-guitar',
    'bass-guitar',
    'piano',
    'drum',
    'microphone',
  ];

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files && event.target.files[0]);
  };

  const onSubmit: SubmitHandler<NewProductFormData> = async (
    data: NewProductFormData | ProductType
  ) => {
    // 1. image - upload into cloud and get url where the image saved in

    setIsUploading(true);
    file &&
      uploadImage(file) //
        .then((url) => {
          addProduct.mutate(
            { data, url },
            {
              onSuccess: () => {
                setSuccess(
                  `The new product - ${data.name} is successfully registered!`
                );
                setTimeout(() => {
                  setSuccess(null);
                }, 4000);
                // reset input fields using react form hook FN
                reset();
                setFile(null);
              },
            }
          );
        }) // finally reset uploading status as false
        .finally(() => setIsUploading(false));
  };

  return (
    <section className='w-full text-center px-4'>
      <h1 className='text-2xl font-bold'>Register New Product</h1>

      {success && <p className='my-2'>{success}</p>}

      {file && (
        <img
          src={URL.createObjectURL(file)}
          alt='local file'
          className='w-96 mx-auto my-4 rounded-lg'
        />
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col px-12 gap-4 w-full mt-4'
      >
        <input type='file' accept='image/*' onChange={handleChange} />

        <input
          type='text'
          placeholder='New Product Name'
          {...register('name', { required: true })}
        />

        <input
          type='text'
          placeholder='Price'
          {...register('price', { required: true })}
        />

        <select {...register('category')}>
          <option value='' disabled>
            Please select a category
          </option>
          {categoryOptions.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>

        <input
          type='text'
          placeholder='Description for the new product'
          {...register('description', { required: true })}
        />

        <input
          type='text'
          placeholder='Options'
          {...register('sort', { required: true })}
        />

        <button disabled={isUploading}>
          {isUploading
            ? 'Uploading the new product...'
            : 'Register new product'}
        </button>
      </form>
    </section>
  );
}
