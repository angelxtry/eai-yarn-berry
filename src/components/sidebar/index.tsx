import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import { PersonalMenus, SystemMenus } from '@/components/sidebar/menus';
import { Menu } from '@/types';
import { Link } from 'react-router-dom';
import { Logo } from '@/components/logo';
import { LogoutButton } from '@/components/LogoutButton';

interface MenuListProps {
  menus: Menu[];
  collapse?: boolean;
}
const SystemMenuList = ({ menus, collapse = false }: MenuListProps) => (
  <ul className='flex flex-col flex-1 gap-y-5 pt-12'>
    {menus.map((menu) => (
      <li key={menu.name}>
        <Link to={menu.path} className='flex gap-x-3 items-center group'>
          {menu.icon && (
            <span className='w-5 h-5 text-gray-400 fill-current group-hover:text-blue-500'>
              {menu.icon}
            </span>
          )}
          {!collapse && (
            <span className='inline-block text-sm leading-6 text-gray-600 group-hover:text-gray-800 group-hover:font-semibold'>
              {menu.name}
            </span>
          )}
        </Link>
      </li>
    ))}
  </ul>
);

const PersonalMenuList = ({ menus, collapse = false }: MenuListProps) => (
  <ul className='flex flex-col gap-y-5 pt-12'>
    {menus.map((menu) => (
      <li key={menu.name}>
        <Link to={menu.path} className='flex gap-x-3 items-center group'>
          {menu.icon && (
            <span className='w-5 h-5 text-gray-400 fill-current group-hover:text-blue-500'>
              {menu.icon}
            </span>
          )}
          {!collapse && (
            <span className='inline-block text-sm leading-6 text-gray-600 group-hover:text-gray-800 group-hover:font-semibold'>
              {menu.name}
            </span>
          )}
        </Link>
      </li>
    ))}
    {!collapse && (
      <li>
        <LogoutButton />
      </li>
    )}
  </ul>
);

export const Sidebar = () => {
  const [collapseSidebar, setCollapseSidebar] = useState(false);

  return (
    <>
      <aside
        className={`relative flex flex-col py-4 px-4 border-r border-gray-200 ease-in-out duration-300 ${
          collapseSidebar ? 'w-16 translate-x-0' : 'w-52'
        }`}
      >
        <button
          className='absolute -right-2.5 top-5 flex justify-center items-center bg-gray-100 rounded-full border border-gray-200'
          onClick={() => setCollapseSidebar((prevState) => !prevState)}
        >
          {collapseSidebar ? (
            <ChevronRightIcon className='w-4 h-4 text-gray-400' />
          ) : (
            <ChevronLeftIcon className='w-4 h-4 text-gray-400' />
          )}
        </button>

        <Logo collapse={collapseSidebar} />

        <SystemMenuList menus={SystemMenus} collapse={collapseSidebar} />
        <PersonalMenuList menus={PersonalMenus} collapse={collapseSidebar} />
      </aside>
    </>
  );
};
