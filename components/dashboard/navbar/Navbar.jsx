import React from 'react'

import Container from '@/components/Container'
import Logo from '@/components/landing/navbar/Logo'
import UserMenu from '@/components/landing/navbar/UserMenu'

const AdminNavbar = ({ currentUser }) => {
  return (
    <nav className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <div className="max-w-[2520px] mx-auto px-10">
          <div className="flex flex-row items-center justify-between gap-4">
            <Logo />

            <UserMenu currentUser={currentUser} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
