import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import { RowClickedEvent } from 'ag-grid-community';
import { Outlet, useNavigate, useOutletContext, useParams } from 'react-router-dom';

import { DefaultLayout } from '@/components/layout/default-layout';
import { SourceListTable } from '@/components/SourceListTable';
import { Constants } from '@/constants';
import { SourceSystemContainer } from '@/containers/source-system.container';
import {
  CreateSourceMutation,
  SourceSystem,
  UpdateSourceMutation,
} from '@/generated/graphql';
import { useTranslation } from '@/locale/i18n';
import { RoutePath } from '@/router/paths';

type ContextType = {
  sourceSystem: SourceSystem | null;
  createSourceSystem: (sourceSystemInput: SourceSystem) => Promise<CreateSourceMutation>;
  updateSourceSystem: (
    id: number,
    sourceSystem: SourceSystem,
  ) => Promise<UpdateSourceMutation>;
};

export const SourceSystemPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { sourceSystemId } = useParams<{ sourceSystemId: string }>();

  const limit = Constants.defaultPageSize;

  const { sourceSystemList, sourceSystem, createSourceSystem, updateSourceSystem } =
    SourceSystemContainer({
      limit,
      id: +sourceSystemId!,
    });

  const onRowClicked = (event: RowClickedEvent<SourceSystem>) => {
    if (!event.data?.id) return;
    navigate(`${RoutePath.sourceSystem}/${event.data.id}`);
  };

  return (
    <DefaultLayout>
      <DefaultLayout.PageHeader>{t('SourceSystem.title')}</DefaultLayout.PageHeader>
      <DefaultLayout.PageContent>
        <div className='flex flex-col gap-4 h-full lg:flex-row pt-4'>
          <article className='h-full lg:w-2/3 pr-4 border-none lg:border-r'>
            <SourceListTable
              rowData={sourceSystemList.data?.nodes || []}
              reactPagination={{
                setOffset: sourceSystemList.setOffset,
                totalCount: sourceSystemList.data?.totalCount || 0,
                limit,
              }}
              onRowClicked={onRowClicked}
            />
          </article>
          <article className='h-full lg:w-1/3'>
            <Outlet
              context={{
                sourceSystem: sourceSystem.data,
                createSourceSystem,
                updateSourceSystem,
              }}
            />
          </article>
        </div>
      </DefaultLayout.PageContent>
    </DefaultLayout>
  );
};

export function useSourceSystem() {
  return useOutletContext<ContextType>();
}
