'use client';

import {cn} from "@/utils/general";

const ActiveBadge = ({ isActive }) => {
  return (
    <div
      className={cn(
        'rounded-full p-1 px-3 uppercase text-white text-xs select-none',
        isActive ? 'bg-green-500' : 'bg-rose-500'
      )}
    >
      {isActive ? 'Aktif' : 'Tidak Aktif'}
    </div>
  );
};

export default ActiveBadge;
