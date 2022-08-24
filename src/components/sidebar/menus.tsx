import { CloudDownloadIcon, CloudUploadIcon, LinkIcon } from '@heroicons/react/outline';

import { i18next } from '@/locale/i18n';
import { RoutePath } from '@/router/paths';
import { Menu } from '@/types';

export const SystemMenus: Menu[] = [
  {
    name: i18next.t('SourceSystem.title'),
    path: RoutePath.sourceSystem,
    icon: <CloudDownloadIcon />,
  },
  {
    name: i18next.t('SourceInterface.title'),
    path: RoutePath.sourceInterface,
    icon: <LinkIcon />,
  },
  {
    name: i18next.t('DestinationSystem.title'),
    path: RoutePath.destinationSystem,
    icon: <CloudUploadIcon />,
  },
  {
    name: i18next.t('DestinationInterface.title'),
    path: RoutePath.destinationInterface,
    icon: <LinkIcon />,
  },
];

export const PersonalMenus = [];
