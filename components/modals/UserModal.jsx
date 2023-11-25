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

// import useUserModal from '@/hooks/useUserModal'

import Button from '@/components/Button'
import ImageUpload from '@/components/inputs/ImageUpload'
import Input from '@/components/inputs/Input'

import Modal from './Modal'

const UserModal = () => {
  // const userModal = useUserModal();

  const [isLoading, setIsLoading] = useState(false);

  // const isCreate = useMemo(
  //   () => userModal.isCreate,
  //   [userModal.isCreate]
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
      email: '',
      phone: '',
    },
  });

  // useEffect(() => {
  //   if (userModal.detail) {
  //     setCustomValue('name', userModal.detail?.name);
  //     setCustomValue('email', userModal.detail?.email);
  //     setCustomValue('phone', userModal.detail?.phone);
  //   }
  //   return () => {
  //     reset();
  //   };
  // }, [userModal.detail]);

  const phone = watch('phone');

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
  //     isCreate ? '/api/users' : '/api/users/' + userModal.detail._id,
  //     data
  //   )
  //     .then((res) => {
  //       const { code, data, message } = res.data;
  //       if (code === HttpStatusCode.Ok) {
  //         toast.success(message);
  //         reset();
  //         userModal.openUpdate();
  //         userModal.onClose();
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
        label="Nama Lengkap"
        placeholder="Nama Lengkap"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="email"
        label="Email"
        placeholder="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="phone"
        label="Nomor Telepon"
        placeholder="Nomor Telepon"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={false}
      title={'Tambah User'}
      actionLabel="SIMPAN"
      onClose={false}
      onSubmit={() => console.log("asdasd")}
      body={bodyContent}
    ></Modal>
  );
};

export default UserModal;
