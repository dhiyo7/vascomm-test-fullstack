'use client';

import Link from 'next/link'

import { footerItems } from '@/utils/footer'
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
} from 'react-icons/bi'

import Logo from './navbar/Logo'

const Footer = () => {
  return (
    <footer className="py-28 w-full border-t border-gray-200">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-6 gap-4">
        <div className="col-span-2 flex flex-col items-center justify-between space-y-20 mx-14">
          <Logo height={256} width={256} />
          <div className="text-center text-zinc-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt,
            quam similique dolore veniam neque possimus animi sit soluta eaque
            non repellendus temporibus doloribus culpa voluptatibus dolor nemo
            inventore aut excepturi.
          </div>
          <div className="flex flex-row gap-4 text-blue-700">
            <BiLogoFacebook size={32} />
            <BiLogoTwitter size={32} />
            <BiLogoInstagram size={32} />
          </div>
        </div>
        <div className="col-span-4 grid grid-cols-4 gap-4 mx-14">
          {footerItems.map((item) => (
            <div key={item.title} className="col-span-1 flex flex-col gap-8">
              <div className="text-xl font-semibold">{item.title}</div>
              <div className="flex flex-col gap-4 uppercase">
                {item.child.map((child) => (
                  <Link href={child.url} key={item.title + '_' + child.title}>
                    {child.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
