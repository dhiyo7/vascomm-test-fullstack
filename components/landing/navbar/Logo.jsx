'use client';

import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Logo = ({ height = 156, width = 156 }) => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push('/')}
      alt="Logo"
      className="cursor-pointer"
      height={height}
      width={width}
      src="/images/logo.png"
      placeholder="blur"
      blurDataURL={`/_next/image?url=/images/logo.png&w=100&q=1`}
    />
  );
};

export default Logo;
