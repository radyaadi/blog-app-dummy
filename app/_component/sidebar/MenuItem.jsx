'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MenuItem = ({ name, path, icon }) => {
  const pathname = usePathname();
  return (
    <Link
      href={path}
      className={`${
        pathname.startsWith(path) ? 'bg-gray-500 hover:bg-gray-500' : ''
      } inline-flex gap-x-3 px-8 py-3 duration-200 ease-in-out hover:bg-gray-500 sm:w-full`}
    >
      {icon}
      <span className="hidden text-lg sm:inline">{name}</span>
    </Link>
  );
};

export default MenuItem;
