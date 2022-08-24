import {
  ArrowLeftIcon,
  BellIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MenuIcon,
} from '@heroicons/react/outline';
import Logo from '@/assets/LogoSvg.svg';
import { useState } from 'react';

const menus1 = [
  { name: 'aaa', icon: BellIcon },
  { name: 'bbb', icon: BellIcon },
  { name: 'ccc', icon: BellIcon },
];

const menus2 = [
  { name: 'ddd', icon: MenuIcon },
  { name: 'eee', icon: MenuIcon },
  { name: 'fff', icon: MenuIcon },
];

// /temp 로 접근할 수 있습니다.
export const TempPage = () => {
  const [collapseSidebar, setCollapseSidebar] = useState(true);
  return (
    <div className='flex w-full h-screen font-sans text-gray-900 bg-white'>
      {/* sidebar */}
      {collapseSidebar ? (
        <aside className='relative flex flex-col py-4 px-6 w-52 border-r border-gray-200 ease-in-out duration-300 '>
          <button
            className='absolute -right-2.5 top-5 flex justify-center items-center bg-gray-100 rounded-full border border-gray-200'
            onClick={() => setCollapseSidebar((prevState) => !prevState)}
          >
            <ChevronLeftIcon className='w-4 h-4 text-gray-400' />
          </button>
          <a href='#'>
            <img src={Logo} alt='' className='w-24' />
          </a>
          {/* sidebar 상단 메뉴 */}
          {/* flex-1 로 상단 고정 */}
          <ul className='flex flex-col flex-1 gap-y-5 pt-12'>
            {menus1.map((menu) => (
              <li key={menu.name}>
                <a href='#' className='flex gap-x-3 items-center group'>
                  <span className='w-5 h-5 text-gray-400 fill-current group-hover:text-blue-500'>
                    <menu.icon />
                  </span>
                  <span className='inline-block text-sm leading-6 text-gray-600 group-hover:text-gray-800 group-hover:font-semibold'>
                    {menu.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* sidebar 하단 메뉴 */}
          <ul className='flex flex-col gap-y-5 pt-12'>
            {menus2.map((menu) => (
              <li key={menu.name}>
                <a href='#' className='flex gap-x-3 items-center group'>
                  <span className='w-5 h-5 text-gray-400 fill-current group-hover:text-blue-500'>
                    <menu.icon />
                  </span>
                  <span className='inline-block text-sm leading-6 text-gray-600 group-hover:text-gray-800 group-hover:font-semibold'>
                    {menu.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </aside>
      ) : (
        // sidebar 를 접었을 때
        // icon 만 보여짐
        <aside
          className={`relative flex flex-col py-4 px-4 w-16 border-r border-gray-200 ease-in-out duration-300 ${
            collapseSidebar && 'translate-x-0'
          }`}
        >
          <button
            className='absolute -right-2.5 top-5 flex justify-center items-center bg-gray-100 rounded-full border border-gray-200'
            onClick={() => setCollapseSidebar((prevState) => !prevState)}
          >
            <ChevronRightIcon className='w-4 h-4 text-gray-400' />
          </button>
          <a href='#'>
            <img src={Logo} alt='' className='w-12' />
          </a>
          <ul className='flex flex-col flex-1 gap-y-5 pt-12'>
            {menus1.map((menu) => (
              <li key={menu.name}>
                <a href='#' className='flex gap-x-3 items-center group'>
                  <span className='w-5 h-5 text-gray-400 fill-current group-hover:text-blue-500'>
                    <menu.icon />
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <ul className='flex flex-col gap-y-5 pt-12'>
            {menus2.map((menu) => (
              <li key={menu.name}>
                <a href='#' className='flex gap-x-3 items-center group'>
                  <span className='w-5 h-5 text-gray-400 fill-current group-hover:text-blue-500'>
                    <menu.icon />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </aside>
      )}

      <main className='flex flex-col flex-1 py-4 px-10 h-full'>
        {/* breadcrumb */}
        {/* 임시 back button */}
        <button className='flex gap-x-1 items-center text-gray-400'>
          <ArrowLeftIcon className='w-4 h-4 fill-current' />
          <span className='inline-block pt-0.5 text-sm leading-6'>Back</span>
        </button>

        {/* content title */}
        <div>
          <h1 className='text-2xl font-bold text-gray-900'>Source</h1>
        </div>

        {/* content body */}
        {/* content body 높이를 가득 채우기 위해 h-full 사용 */}
        <article className='h-full'>
          <div className='flex flex-col gap-4 h-full lg:flex-row'>
            <div className='h-full border border-gray-200 lg:w-2/3 '>Table</div>
            <div className='h-full border border-gray-200 lg:w-1/3'>Form</div>
          </div>
        </article>
      </main>
    </div>
  );
};
