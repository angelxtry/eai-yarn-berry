import { ReactNode } from 'react';

import { DestinationInterface } from '@/generated/graphql';

export type WithChildrenJSX<T = unknown> = T & {
  children: JSX.Element;
};

export interface Menu {
  name: string;
  path: string;
  icon?: ReactNode;
}

export interface NodesFetchProps<SortType = any, FilterType = any> {
  id?: number;
  limit?: number;
  sorting?: SortType[];
  filter?: FilterType;
}

export interface IDestinationInterfaceForm extends DestinationInterface {
  destinationSystemOption: { label: string; value: number } | null;
}
