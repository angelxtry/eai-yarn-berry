import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import { RowClickedEvent } from 'ag-grid-community';
import { Outlet, useNavigate, useOutletContext, useParams } from 'react-router-dom';

import { DefaultLayout } from '@/components/layout/default-layout';
import { SourceInterfaceTable } from '@/components/tables/source-interface-table';
import { Constants } from '@/constants';
import { SourceInterfaceContainer } from '@/containers/source-interface.container';
import {
  CreateSourceInterfaceInput,
  CreateSourceInterfaceMutation,
  SourceInterface,
  UpdateSourceInterfaceMutation,
} from '@/generated/graphql';
import { useTranslation } from '@/locale/i18n';
import { RoutePath } from '@/router/paths';

type ContextType = {
  sourceInterface: SourceInterface | null;
  createSourceInterface: (
    sourceInterfaceInput: CreateSourceInterfaceInput,
  ) => Promise<CreateSourceInterfaceMutation>;
  updateSourceInterface: (
    id: number,
    sourceInterfaceInput: CreateSourceInterfaceInput,
  ) => Promise<UpdateSourceInterfaceMutation>;
};

export const SourceInterfacePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { sourceInterfaceId } = useParams<{ sourceInterfaceId: string }>();

  const limit = Constants.defaultPageSize;

  const {
    sourceInterfaceList,
    sourceInterface,
    createSourceInterface,
    updateSourceInterface,
  } = SourceInterfaceContainer({
    limit,
    id: +sourceInterfaceId!,
  });

  const onRowClicked = (event: RowClickedEvent<SourceInterface>) => {
    if (!event.data?.id) return;
    navigate(`${RoutePath.sourceInterface}/${event.data.id}`);
  };

  return (
    <DefaultLayout>
      <DefaultLayout.PageHeader>{t('SourceInterface.title')}</DefaultLayout.PageHeader>
      <DefaultLayout.PageContent>
        <div className='flex flex-col gap-4 h-full lg:flex-row pt-4'>
          <article className='h-full lg:w-2/3 pr-4 border-none lg:border-r'>
            <SourceInterfaceTable
              rowData={sourceInterfaceList.data?.nodes || []}
              reactPagination={{
                setOffset: sourceInterfaceList.setOffset,
                totalCount: sourceInterfaceList.data?.totalCount || 0,
                limit,
              }}
              onRowClicked={onRowClicked}
            />
          </article>
          <article className='h-full lg:w-1/3 pb-2 overflow-hidden overflow-y-scroll'>
            <Outlet
              context={{
                sourceInterface: sourceInterface.data,
                createSourceInterface,
                updateSourceInterface,
              }}
            />
          </article>
        </div>
      </DefaultLayout.PageContent>
    </DefaultLayout>
  );
};

export function useSourceInterface() {
  return useOutletContext<ContextType>();
}
