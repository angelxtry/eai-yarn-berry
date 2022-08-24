import { RowClickedEvent } from 'ag-grid-community';

import { ListTable } from '@/components/ListTable';
import { AbstractBaseEntity, SourceInterface } from '@/generated/graphql';
import { PageProps } from '@/utils/page-helper';

interface SourceInterfaceTableProps {
  rowData: Omit<SourceInterface, keyof AbstractBaseEntity>[];
  reactPagination: PageProps;
  onRowClicked: (event: RowClickedEvent<SourceInterface>) => void;
}

export const SourceInterfaceTable = ({
  rowData,
  reactPagination,
  onRowClicked,
}: SourceInterfaceTableProps) => {
  const columnDefs = [
    { field: 'id' },
    { field: 'interfaceName' },
    { field: 'sourceSystemId' },
    { field: 'uri' },
    { field: 'method' },
    { field: 'header' },
    { field: 'payload' },
    { field: 'optionData' },
    { field: 'pkItems' },
    { field: 'resultKey' },
    { field: 'sql' },
    { field: 'memo' },
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
