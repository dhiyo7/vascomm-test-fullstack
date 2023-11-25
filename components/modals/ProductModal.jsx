'use client';

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { signIn } from 'next-auth/react'

import axios, { HttpStatusCode } from 'axios'
import {
  FieldValues,
  SubmitHandler,
  useForm,
} from 'react-hook-form'
import toast from 'react-hot-toast'
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'

// import useProductModal from '@/hooks/useProductModal'

import Button from '@/components/Button'
import ImageUpload from '@/components/inputs/ImageUpload'
import Input from '@/components/inputs/Input'

import Modal from './Modal'

const ProductModal = () => {
  // const productModal = useProductModal();

  const [isLoading, setIsLoading] = useState(false);

  // const isCreate = useMemo(
  //   () => productModal.isCreate,
  //   [productModal.isCreate]
  // );

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: '',
      price: 0,
      imageSrc: '',
    },
  });

  // useEffect(() => {
  //   if (productModal.detail) {
  //     setCustomValue('name', productModal.detail?.name);
  //     setCustomValue('price', productModal.detail?.price);
  //     setCustomValue('imageSrc', productModal.detail?.imageSrc);
  //   }
  //   return () => {
  //     reset();
  //   };
  // }, [productModal.detail]);

  const imageSrc = watch('imageSrc');

  const setCustomValue = (id, value) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  // const onSubmit = (data) => {
  //   setIsLoading(true);
  //
  //   axios[isCreate ? 'post' : 'put'](
  //     isCreate ? '/api/products' : '/api/products/' + productModal.detail._id,
  //     data
  //   )
  //     .then((res) => {
  //       const { code, data, message } = res.data;
  //       if (code === HttpStatusCode.Ok) {
  //         toast.success(message);
  //         reset();
  //         productModal.openUpdate();
  //         productModal.onClose();
  //       } else {
  //         toast.error(message);
  //       }
  //     })
  //     .catch((error) => {
  //       toast.error('Something went wrong.');
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        id="name"
        label="Nama Produk"
        placeholder="Nama Produk"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="price"
        type="number"
        formatPrice
        label="Harga Produk"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

      <ImageUpload
        value={imageSrc}
        onChange={(value) => setCustomValue('imageSrc', value)}
      />
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={false}
      title={'Tambah Produk'}
      actionLabel="SIMPAN"
      onClose={true}
      onSubmit={() => console.log("asd")}
      body={bodyContent}
    ></Modal>
  );
};

export default ProductModal;
