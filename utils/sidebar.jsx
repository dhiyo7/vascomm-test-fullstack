import { BiUser } from 'react-icons/bi'
import { FaBook } from 'react-icons/fa'
import { GrHomeRounded } from 'react-icons/gr'

export const menuItems = [
  {
    icon: GrHomeRounded,
    label: 'Dashboard',
    url: '/dashboard',
  },
  {
    icon: BiUser,
    label: 'Manajemen User',
    url: '/user',
  },
  {
    icon: FaBook,
    label: 'Manajemen Produk',
    url: '/product',
  },
];
