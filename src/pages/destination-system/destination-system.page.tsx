import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import { RowClickedEvent } from 'ag-grid-community';
import { Outlet, useNavigate, useOutletContext, useParams } from 'react-router-dom';

import { DefaultLayout } from '@/components/layout/default-layout';
import { DestinationListTable } from '@/components/tables/destination-list-table';
import { Constants } from '@/constants';
import { DestinationSystemContainer } from '@/containers/destination-system.container';
import {
  CreateDestinationMutation,
  CreateDestinationSystemInput,
  DestinationSystem,
  UpdateDestinationMutation,
} from '@/generated/graphql';
import { useTranslation } from '@/locale/i18n';
import { RoutePath } from '@/router/paths';

type ContextType = {
  destinationSystem: DestinationSystem | null;
  createDestinationSystem: (
    destinationSystemInput: CreateDestinationSystemInput,
  ) => Promise<CreateDestinationMutation>;
  updateDestinationSystem: (
    id: number,
    DestinationSystem: CreateDestinationSystemInput,
  ) => Promise<UpdateDestinationMutation>;
};

export const DestinationSystemPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { systemId } = useParams<{ systemId: string }>();

  const limit = Constants.defaultPageSize;

  const {
    destinationSystemList,
    destinationSystem,
    createDestinationSystem,
    updateDestinationSystem,
  } = DestinationSystemContainer({
    id: +systemId!,
    limit,
  });

  const onRowClicked = (event: RowClickedEvent<DestinationSystem>) => {
    if (!event.data?.id) return;
    navigate(`${RoutePath.destinationSystem}/${event.data.id}`);
  };

  return (
    <DefaultLayout>
      <DefaultLayout.PageHeader>{t('DestinationSystem.title')}</DefaultLayout.PageHeader>
      <DefaultLayout.PageContent>
        <div className='flex flex-col gap-4 h-full lg:flex-row pt-4'>
          <article className='h-full lg:w-2/3 '>
            <DestinationListTable
              rowData={destinationSystemList.data?.nodes || []}
              reactPagination={{
                setOffset: destinationSystemList.setOffset,
                totalCount: destinationSystemList.data?.totalCount || 0,
                limit,
              }}
              onRowClicked={onRowClicked}
            />
          </article>
          {/* TODO Form component 예정 */}
          <article className='h-full lg:w-1/3'>
            <Outlet
              context={{
                destinationSystem: destinationSystem.data,
                createDestinationSystem,
                updateDestinationSystem,
              }}
            />
          </article>
        </div>
      </DefaultLayout.PageContent>
    </DefaultLayout>
  );
};

export function useDestinationSystem() {
  return useOutletContext<ContextType>();
}
