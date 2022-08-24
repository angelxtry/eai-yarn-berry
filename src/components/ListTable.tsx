import { forwardRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import ReactPaginate from 'react-paginate';
import { PageHelper, PageProps } from '@/utils/page-helper';
import { AgGridReactProps } from 'ag-grid-react/lib/shared/interfaces';

interface ListTableProps extends AgGridReactProps {
  reactPagination: PageProps;
}

export const ListTable = forwardRef<AgGridReact, ListTableProps>(
  ({ reactPagination, ...props }, ref) => (
    <div className='block h-full w-full'>
      <div className='ag-theme-alpine h-[calc(100%-2rem)] w-full'>
        <AgGridReact ref={ref} rowSelection='single' {...props} />
      </div>
      <div className='block flex items-center justify-center h-8'>
        <ReactPaginate {...PageHelper(reactPagination)} />
      </div>
    </div>
  ),
);

ListTable.displayName = 'ListTable';
