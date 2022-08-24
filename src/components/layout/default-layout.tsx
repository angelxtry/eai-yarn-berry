import { PropsWithChildren } from 'react';

import { Sidebar } from '@/components/sidebar';

export const DefaultLayout = ({ children }: PropsWithChildren) => (
  <div className='flex w-full h-screen font-sans text-gray-900 bg-white'>
    <Sidebar />
    <main className='flex flex-col flex-1 py-4 px-10 h-full'>{children}</main>
  </div>
);

const PageHeader = ({ children }: PropsWithChildren) => (
  <section>
    <h1 className='text-2xl h-10 font-bold text-gray-900'>{children}</h1>
  </section>
);

const PageContent = ({ children }: PropsWithChildren) => (
  <section className='h-[calc(100%-36px)]'>{children}</section>
);

DefaultLayout.PageHeader = PageHeader;
DefaultLayout.PageContent = PageContent;
