import { RowClickedEvent } from 'ag-grid-community';

import { ListTable } from '@/components/ListTable';
import { DestinationSystem } from '@/generated/graphql';
import { PageProps } from '@/utils/page-helper';

interface DestinationListTableProps {
  rowData: DestinationSystem[];
  reactPagination: PageProps;
  onRowClicked: (event: RowClickedEvent<DestinationSystem>) => void;
}

export const DestinationListTable = ({
  rowData,
  reactPagination,
  onRowClicked,
}: DestinationListTableProps) => {
  const columnDefs = [
    { field: 'id' },
    { field: 'systemName' },
    { field: 'type' },
    { field: 'host' },
    { field: 'port' },
    { field: 'memo' },
    { field: 'updatedUserId' },
    { field: 'updatedAt' },
  ];

  return (
    <ListTable
      reactPagination={reactPagination}
      rowData={rowData}
      columnDefs={columnDefs}
      onRowClicked={onRowClicked}
    />
  );
};
