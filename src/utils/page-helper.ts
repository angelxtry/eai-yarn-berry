import { Constants } from '@/constants';

export interface PageProps {
  totalCount: number;
  setOffset: (n: number) => void;
  limit: number;
}

/**
 * ReactPaginate 인자에 맞춰 값을 계산하여 리턴한다
 *
 * @constructor
 */
export const PageHelper = ({
  totalCount,
  setOffset,
  limit = Constants.defaultPageSize,
}: PageProps) => {
  const pageCount = Math.ceil(totalCount / limit);

  const onPageChange = (selectedItem: { selected: number }) => {
    const newOffset = (selectedItem.selected * limit) % totalCount;
    setOffset(newOffset);
  };

  return {
    breakLabel: '...',
    nextLabel: 'next >',
    onPageChange,
    pageCount,
    previousLabel: '< prev',
    className: 'flex gap-2',
    activeClassName: 'underline',
    renderOnZeroPageCount: () => null,
  };
};
