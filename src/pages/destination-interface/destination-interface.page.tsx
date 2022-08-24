import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import { RowClickedEvent } from 'ag-grid-community';
import { Outlet, useNavigate, useOutletContext, useParams } from 'react-router-dom';

import { DefaultLayout } from '@/components/layout/default-layout';
import { DestinationInterfaceTable } from '@/components/tables/destination-interface-table';
import { Constants } from '@/constants';
import { DestinationInterfaceContainer } from '@/containers/destination-interface.container';
import { DestinationInterface } from '@/generated/graphql';
import { useTranslation } from '@/locale/i18n';
import { RoutePath } from '@/router/paths';
import { IDestinationInterfaceForm } from '@/types';

type OutletContextType = {
  destinationInterface: DestinationInterface | null;
  onSubmit: (formData: IDestinationInterfaceForm) => void;
};

export const DestinationInterfacePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { interfaceId } = useParams<{ interfaceId: string }>();

  const limit = Constants.defaultPageSize;

  const { destinationInterfaceList, destinationInterface, onSubmit } =
    DestinationInterfaceContainer({
      limit,
      id: +interfaceId!,
    });

  const onRowClicked = (event: RowClickedEvent<DestinationInterface>) => {
    if (!event.data?.id) return;
    navigate(`${RoutePath.destinationInterface}/${event.data.id}`);
  };

  return (
    <DefaultLayout>
      <DefaultLayout.PageHeader>
        {t('DestinationInterface.title')}
      </DefaultLayout.PageHeader>
      <DefaultLayout.PageContent>
        <div className='flex flex-col gap-4 h-full lg:flex-row pt-4'>
          <article className='h-full lg:w-2/3 pr-4 border-none lg:border-r'>
            <DestinationInterfaceTable
              rowData={destinationInterfaceList.data?.nodes || []}
              reactPagination={{
                setOffset: destinationInterfaceList.setOffset,
                totalCount: destinationInterfaceList.data?.totalCount || 0,
                limit,
              }}
              onRowClicked={onRowClicked}
            />
          </article>
          <article className='h-full lg:w-1/3 pb-2 overflow-hidden overflow-y-scroll'>
            <Outlet
              context={{
                destinationInterface: destinationInterface.data,
                onSubmit,
              }}
            />
          </article>
        </div>
      </DefaultLayout.PageContent>
    </DefaultLayout>
  );
};

export function useDestinationInterface() {
  return useOutletContext<OutletContextType>();
}
