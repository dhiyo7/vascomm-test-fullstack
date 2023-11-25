'use client';
import React, { useEffect, useState } from 'react'

import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import Button from '@/components/Button'
import Input from '@/components/inputs/Input'

const SignInPage = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data) => {
    setIsLoading(true);

    signIn('credentials', {
      ...data,
      redirect: true,
      callbackUrl: "/"
    }).then((callback) => {
      console.log("callback", callback)
      setIsLoading(false);

      if (callback?.ok) {
        toast.success('Logged in')
        router.refresh("/");
      }

      if (callback?.error) {
        console.log('err', callback.error);
        toast.error(callback.error)
      }
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
            <div className="text-2xl">Selamat Datang</div>
            <div className="text-neutral-400">
              Silahkan masukkan email atau nomor telepon dan password Anda untuk
              mulai menggunakan aplikasi
            </div>
          </div>

          <Input
            id="email"
            label="Email/Nomor Telepon"
            disabled={isLoading}
            register={register}
            errors={errors}
            placeholder="Contoh: admin@gmail.com"
            required
          />
          <Input
            id="password"
            type="password"
            label="Password"
            disabled={isLoading}
            register={register}
            errors={errors}
            placeholder="Masukkan password"
            required
          />

          <div className="mt-4">
            <Button label="MASUK" onClick={handleSubmit(onSubmit)} />
            <div className="flex flex-row items-center justify-end gap-2 mt-2">
              <div>Belum punya akun?</div>{' '}
              <Link href="/sign-up" className="cursor-pointer hover:underline">
                Daftar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
