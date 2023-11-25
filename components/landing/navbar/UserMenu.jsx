'use client';

import { useCallback, useState } from 'react'

// import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import { AiOutlineMenu } from 'react-icons/ai'
import { FiPower } from 'react-icons/fi'

import Avatar from '@/components/Avatar'
import Button from '@/components/Button'
import { RenderIf } from '@/components/RenderIf'

const UserMenu = ({ currentUser }) => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative min-w-[15rem]">
      <RenderIf isTrue={currentUser}>
        <div className="flex flex-row items-center justify-end gap-3 ">
          <div
            onClick={toggleOpen}
            className="flex flex-row items-center justify-end gap-3 cursor-pointer"
          >
            <div className="flex flex-col items-end">
              <div className="text-blue-500 text-sm">
                Hello {currentUser?.role}
              </div>
              <div className="font-semibold">{currentUser?.name}</div>
            </div>
            <Avatar height={48} width={48} />
          </div>
        </div>
      </RenderIf>

      <RenderIf isTrue={isOpen}>
        <div className="absolute rounded-xl shadow-md w-[20rem] bg-white overflow-hidden right-0 top-20 text-sm py-2">
          <div className="flex flex-col">
            <div className="flex flex-col items-center justify-center p-4">
              <div className="rounded-full w-24 h-24 bg-neutral-300">
                <Avatar height={96} width={96} />
              </div>
              <div className="font-semibold text-lg">{currentUser?.name}</div>
              <div className="text-zinc-600">{currentUser?.email}</div>
            </div>
            <hr />
            <div
              onClick={() =>
                  console.log("METU")
                // signOut({
                //   callbackUrl:
                //     currentUser?.role === 'admin' ? '/sign-in' : undefined,
                // })
              }
              className="flex flex-row items-center justify-center p-4 gap-2 text-rose-600 cursor-pointer"
            >
              <FiPower />
              <div className="uppercase font-light">Keluar</div>
            </div>
          </div>
        </div>
      </RenderIf>

      <RenderIf isTrue={!currentUser}>
        <div className="flex flex-row gap-4 items-center">
          <Button
            label="Masuk"
            outline
            capitalize
            onClick={() => router.push('/sign-in')}
          />
          <Button
            label="Daftar"
            capitalize
            onClick={() => router.push('/sign-up')}
          />
        </div>
      </RenderIf>
    </div>
  );
};

export default UserMenu;
