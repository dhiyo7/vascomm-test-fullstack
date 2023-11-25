'use client';
import React, { useState } from 'react'

import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import axios, { HttpStatusCode } from 'axios'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import Button from '@/components/Button'
import Input from '@/components/inputs/Input'

const SignUpPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  });

  const onSubmit = (data) => {
    setIsLoading(true);

    axios
      .post('/api/register', data)
      .then((res) => {
        const { code, message, data } = res.data;
        if (code === HttpStatusCode.Ok) {
          toast.success(message);
          router.push('/sign-in');
        } else {
          toast.error(message);
        }
      })
      .catch((error) => {
        console.log('ERROR', error);
        toast.error('Something went wrong.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <div className="w-full h-full bg-blue-400 flex items-center justify-center">
        <div className="flex flex-col gap-4 items-center max-w-screen-sm px-20">
          <div className="text-5xl font-bold uppercase">Nama Aplikasi</div>
          <div className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            iusto vero illum voluptatum omnis facere voluptatem, reprehenderit,
            qui suscipit placeat inventore magni autem alias nisi. Cum deserunt
            illo tenetur deleniti?
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-white">
        <div className="flex flex-col gap-4 max-w-screen-sm px-20">
          <div className="flex flex-col gap-2">
            <div className="text-2xl">Daftar</div>
            <div className="text-neutral-400">
              Silahkan masukkan nama, email dan nomor telepon Anda untuk mulai
              menggunakan aplikasi
            </div>
          </div>

          <Input
            id="name"
            label="Nama Lengkap"
            disabled={isLoading}
            register={register}
            errors={errors}
            placeholder="Masukkan Nama Lengkap"
            required
          />
          <Input
            id="email"
            label="Email"
            disabled={isLoading}
            register={register}
            errors={errors}
            placeholder="Masukkan Email"
            required
          />
          <Input
            id="phone"
            label="Nomor Telepon"
            disabled={isLoading}
            register={register}
            errors={errors}
            placeholder="Masukkan Nomor Telepon"
            required
          />

          <div className="mt-4">
            <Button label="DAFTAR" onClick={handleSubmit(onSubmit)} />
            <div className="flex flex-row items-center justify-end gap-2 mt-2">
              <div>Sudah punya akun?</div>{' '}
              <Link href="/sign-in" className="cursor-pointer hover:underline">
                Masuk
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
