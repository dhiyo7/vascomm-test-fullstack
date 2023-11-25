import React from 'react'

import { Montserrat } from 'next/font/google'

// import getCurrentUser from '@/actions/getCurrentUser'

import AdminNavbar from '@/components/dashboard/navbar/Navbar'
import Sidebar from '@/components/dashboard/sidebar/Sidebar'
import DeleteModal from '@/components/dialogs/DeleteDialog'
import ProductModal from '@/components/modals/ProductModal'
import UserModal from '@/components/modals/UserModal'

const mont = Montserrat({ subsets: ['latin'] });

const DashboardLayout = async ({ children }) => {
  // const currentUser = await getCurrentUser();

  return (
    <>
      <ProductModal />
      <UserModal />
      <DeleteModal />
      <div className={`h-full relative ${mont.className}`}>
        <AdminNavbar currentUser={"dhiyo"} />

        <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed top-20 mt-6">
          <Sidebar />
        </div>

        <main className="pl-72 pt-20">{children}</main>
      </div>
    </>
  );
};

export default DashboardLayout;
