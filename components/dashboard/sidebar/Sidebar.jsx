'use client';

import { usePathname } from 'next/navigation'


import MenuItem from './MenuItem'
import {menuItems} from "@/utils/sidebar";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="w-full">
      {menuItems.map((item, i) => (
        <MenuItem
          key={item.label + i}
          {...item}
          selected={item.url === pathname}
        />
      ))}
    </div>
  );
};

export default Sidebar;
