'use client';
import React from 'react'

import Link from 'next/link'

const MenuItem = ({ icon: Icon, label, url, selected }) => {
  return (
    <Link
      href={url}
      className={`flex flex-row items-center gap-4 px-6 py-4 ${
        selected
          ? 'bg-blue-600 text-white'
          : 'bg-white text-black hover:bg-gray-200 cursor-pointer'
      }`}
    >
      <Icon size={18} className={`${selected ? 'text-white' : 'text-black'}`} />
      {label}
    </Link>
  );
};

export default MenuItem;
