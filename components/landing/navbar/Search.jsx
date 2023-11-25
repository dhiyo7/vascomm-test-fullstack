'use client';

import { useState } from 'react'

import { BiSearch } from 'react-icons/bi'

import Input from '@/components/inputs/Input'

const Search = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (val => {
    console.log("Val", val)
  });

  return (
    <div className="bg-neutral-100 w-full mx-20 rounded-md cursor-pointer">
      <div className="flex flex-row items-center justify-between p-2 px-4">
        <input name="search" onChange={handleSearch} placeholder="Cari parfum kesukaanmu" className="bg-neutral-100 w-full outline-none" />
        <div className="text-sm pl-2 text-gray-600 flex flex-row items-center gap-3">
          <BiSearch size={24} />
        </div>
      </div>
    </div>
  );
};

export default Search;
