import { RowClickedEvent } from 'ag-grid-community';

import { ListTable } from '@/components/ListTable';
import { SourceSystem } from '@/generated/graphql';
import { PageProps } from '@/utils/page-helper';

interface SourceListTableProps {
  rowData: SourceSystem[];
  reactPagination: PageProps;
  onRowClicked: (event: RowClickedEvent<SourceSystem>) => void;
}

export const SourceListTable = ({
  rowData,
  reactPagination,
  onRowClicked,
}: SourceListTableProps) => {
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
