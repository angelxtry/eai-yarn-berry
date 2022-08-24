import { RowClickedEvent } from 'ag-grid-community';

import { ListTable } from '@/components/ListTable';
import { AbstractBaseEntity, DestinationInterface } from '@/generated/graphql';
import { PageProps } from '@/utils/page-helper';

interface DestinationInterfaceTableProps {
  rowData: Omit<DestinationInterface, keyof AbstractBaseEntity>[];
  reactPagination: PageProps;
  onRowClicked: (event: RowClickedEvent<DestinationInterface>) => void;
}

export const DestinationInterfaceTable = ({
  rowData,
  reactPagination,
  onRowClicked,
}: DestinationInterfaceTableProps) => {
  const columnDefs = [
    { field: 'id' },
    { field: 'interfaceName' },
    { field: 'destinationSystemId' },
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
