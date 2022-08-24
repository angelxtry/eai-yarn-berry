import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: number;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: Date;
};

export type AbstractBaseEntity = {
  /** 생성시각 */
  createdAt: Scalars['DateTime'];
  /** 생성자 */
  createdUserId: Scalars['Int'];
  /** 삭제여부 */
  deleted: Scalars['Boolean'];
  /** 삭제시각 */
  deletedAt?: Maybe<Scalars['DateTime']>;
  /** 아이디 */
  id: Scalars['ID'];
  /** 수정시각 */
  updatedAt: Scalars['DateTime'];
  /** 수정자 */
  updatedUserId: Scalars['Int'];
};

export type CreateDestinationInterfaceInput = {
  /** destination_system 식별자 */
  destinationSystemId: Scalars['Int'];
  /** http header 정보 */
  header?: InputMaybe<Scalars['String']>;
  /** destination interface 명 */
  interfaceName: Scalars['String'];
  /** 메모 */
  memo?: InputMaybe<Scalars['String']>;
  /** http method 정보 */
  method?: InputMaybe<Scalars['String']>;
  /** parameter 혹은 parsing 을 위해 사용할 옵셔널한 데이터, JSON 형태, ex) {boardId:2423746910} */
  optionData?: InputMaybe<Scalars['String']>;
  /** 데이터 전송 정보 */
  payload?: InputMaybe<Scalars['String']>;
  /** Exmporter Client 의 response 에 대한 실 데이터 매핑키, null 일때는 원본 그대로 획득, ex) data.boards[0].items */
  resultKey?: InputMaybe<Scalars['String']>;
  /** destination type db 경우 사용 쿼리 */
  sql?: InputMaybe<Scalars['String']>;
  /** uri 주소 */
  uri?: InputMaybe<Scalars['String']>;
};

export type CreateDestinationMapperInput = {
  /** destination_interface 식별자 */
  destinationInterfaceId: Scalars['Int'];
  /** destination mapper 명 */
  mapperName: Scalars['String'];
  /** 비고 */
  memo?: InputMaybe<Scalars['String']>;
  /** 순서 */
  sort: Scalars['Int'];
  /** source_interface 식별자 */
  sourceInterfaceId: Scalars['Int'];
};

export type CreateDestinationSystemInput = {
  /** destination host */
  host: Scalars['String'];
  /** 비고 */
  memo?: InputMaybe<Scalars['String']>;
  /** destination port */
  port: Scalars['String'];
  /** destination_system 명 */
  systemName: Scalars['String'];
  /** destination 연동 타입, api, db, socket */
  type: SystemType;
};

export type CreateOneDestinationInterfaceInput = {
  /** The record to create */
  destinationInterface: CreateDestinationInterfaceInput;
};

export type CreateOneDestinationMapperInput = {
  /** The record to create */
  destinationMapper: CreateDestinationMapperInput;
};

export type CreateOneDestinationSystemInput = {
  /** The record to create */
  destinationSystem: CreateDestinationSystemInput;
};

export type CreateOneScheduleTaskInput = {
  /** The record to create */
  scheduleTask: CreateScheduleTaskInput;
};

export type CreateOneSourceInterfaceInput = {
  /** The record to create */
  sourceInterface: CreateSourceInterfaceInput;
};

export type CreateOneSourceSystemInput = {
  /** The record to create */
  sourceSystem: CreateSourceSystemInput;
};

export type CreateOneUserInput = {
  /** The record to create */
  user: CreateUserInput;
};

export type CreateScheduleTaskInput = {
  /** 배치주기, CRON (* * * * * *) 형태 사용, use year */
  batchCronSchedule: Scalars['String'];
  /** Request Payload, 작업시 필요한 데이터 */
  requestPayload?: InputMaybe<Scalars['String']>;
  /** source_interface 참조키 */
  sourceInterfaceId: Scalars['Int'];
  /** 작업명 */
  taskName: Scalars['String'];
};

export type CreateSourceInterfaceInput = {
  /** http header 정보 */
  header?: InputMaybe<Scalars['String']>;
  /** source_interface 명 */
  interfaceName: Scalars['String'];
  /** 비고 */
  memo?: InputMaybe<Scalars['String']>;
  /** http method 정보 */
  method?: InputMaybe<Scalars['String']>;
  /** payload 혹은 header 의 customizing 을 위한 옵셔녈 데이터, JSON */
  optionData?: InputMaybe<Scalars['String']>;
  /** http 데이터 전송 정보 */
  payload?: InputMaybe<Scalars['String']>;
  /** dynamoDB 의 pk 에 사용할 컬럼의 키워드 리스트. 입력순으로 우선순위를 갖는다. 구분자는 콤마(,) */
  pkItems?: InputMaybe<Scalars['String']>;
  /** importer 의 response 에 대한 실사용 데이터 매핑키. dictionary 에 대한 nested depth Key 값임. ex) data.boards[0].items */
  resultKey?: InputMaybe<Scalars['String']>;
  /** source_system 식별자 */
  sourceSystemId: Scalars['Int'];
  /** source type db 경우 쿼리 */
  sql?: InputMaybe<Scalars['String']>;
  /** uri 주소 */
  uri?: InputMaybe<Scalars['String']>;
};

export type CreateSourceSystemInput = {
  /** URL or IP or DOMAIN */
  host: Scalars['String'];
  /** 비고 */
  memo?: InputMaybe<Scalars['String']>;
  /** port */
  port: Scalars['String'];
  /** source_system 명 */
  systemName: Scalars['String'];
  /** source 연동 타입, api, db, socket */
  type: SystemType;
};

export type CreateUserInput = {
  /** 이메일 */
  email: Scalars['String'];
  /** 이름 */
  name: Scalars['String'];
  /** 권한 */
  role?: InputMaybe<Role>;
};

export type DateFieldComparison = {
  between?: InputMaybe<DateFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  neq?: InputMaybe<Scalars['DateTime']>;
  notBetween?: InputMaybe<DateFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateFieldComparisonBetween = {
  lower: Scalars['DateTime'];
  upper: Scalars['DateTime'];
};

export type DeleteManyDestinationInterfacesInput = {
  /** Filter to find records to delete */
  filter: DestinationInterfaceDeleteFilter;
};

export type DeleteManyDestinationMappersInput = {
  /** Filter to find records to delete */
  filter: DestinationMapperDeleteFilter;
};

export type DeleteManyDestinationSystemsInput = {
  /** Filter to find records to delete */
  filter: DestinationSystemDeleteFilter;
};

export type DeleteManyResponse = {
  __typename?: 'DeleteManyResponse';
  /** The number of records deleted. */
  deletedCount: Scalars['Int'];
};

export type DeleteManySourceInterfacesInput = {
  /** Filter to find records to delete */
  filter: SourceInterfaceDeleteFilter;
};

export type DeleteManySourceSystemsInput = {
  /** Filter to find records to delete */
  filter: SourceSystemDeleteFilter;
};

export type DeleteManyUsersInput = {
  /** Filter to find records to delete */
  filter: UserDeleteFilter;
};

export type DeleteOneDestinationInterfaceInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneDestinationMapperInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneDestinationSystemInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneScheduleTaskInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneSourceInterfaceInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneSourceSystemInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneUserInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DestinationInterface = AbstractBaseEntity & {
  __typename?: 'DestinationInterface';
  /** 생성시각 */
  createdAt: Scalars['DateTime'];
  /** 생성자 */
  createdUserId: Scalars['Int'];
  /** 삭제여부 */
  deleted: Scalars['Boolean'];
  /** 삭제시각 */
  deletedAt?: Maybe<Scalars['DateTime']>;
  /** destination_system 식별자 */
  destinationSystemId: Scalars['Int'];
  /** http header 정보 */
  header?: Maybe<Scalars['String']>;
  /** 아이디 */
  id: Scalars['ID'];
  /** destination interface 명 */
  interfaceName: Scalars['String'];
  /** 메모 */
  memo?: Maybe<Scalars['String']>;
  /** http method 정보 */
  method?: Maybe<Scalars['String']>;
  /** parameter 혹은 parsing 을 위해 사용할 옵셔널한 데이터, JSON 형태, ex) {boardId:2423746910} */
  optionData?: Maybe<Scalars['String']>;
  /** 데이터 전송 정보 */
  payload?: Maybe<Scalars['String']>;
  /** Exmporter Client 의 response 에 대한 실 데이터 매핑키, null 일때는 원본 그대로 획득, ex) data.boards[0].items */
  resultKey?: Maybe<Scalars['String']>;
  /** destination type db 경우 사용 쿼리 */
  sql?: Maybe<Scalars['String']>;
  /** 수정시각 */
  updatedAt: Scalars['DateTime'];
  /** 수정자 */
  updatedUserId: Scalars['Int'];
  /** uri 주소 */
  uri?: Maybe<Scalars['String']>;
};

export type DestinationInterfaceAggregateGroupBy = {
  __typename?: 'DestinationInterfaceAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  createdUserId?: Maybe<Scalars['Int']>;
  deleted?: Maybe<Scalars['Boolean']>;
  destinationSystemId?: Maybe<Scalars['Int']>;
  header?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  interfaceName?: Maybe<Scalars['String']>;
  memo?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  optionData?: Maybe<Scalars['String']>;
  payload?: Maybe<Scalars['String']>;
  resultKey?: Maybe<Scalars['String']>;
  sql?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedUserId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};

export type DestinationInterfaceAvgAggregate = {
  __typename?: 'DestinationInterfaceAvgAggregate';
  createdUserId?: Maybe<Scalars['Float']>;
  destinationSystemId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updatedUserId?: Maybe<Scalars['Float']>;
};

export type DestinationInterfaceConnection = {
  __typename?: 'DestinationInterfaceConnection';
  /** Array of nodes. */
  nodes: Array<DestinationInterface>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type DestinationInterfaceCountAggregate = {
  __typename?: 'DestinationInterfaceCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  createdUserId?: Maybe<Scalars['Int']>;
  deleted?: Maybe<Scalars['Int']>;
  destinationSystemId?: Maybe<Scalars['Int']>;
  header?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  interfaceName?: Maybe<Scalars['Int']>;
  memo?: Maybe<Scalars['Int']>;
  method?: Maybe<Scalars['Int']>;
  optionData?: Maybe<Scalars['Int']>;
  payload?: Maybe<Scalars['Int']>;
  resultKey?: Maybe<Scalars['Int']>;
  sql?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  updatedUserId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['Int']>;
};

export type DestinationInterfaceDeleteFilter = {
  and?: InputMaybe<Array<DestinationInterfaceDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdUserId?: InputMaybe<IntFieldComparison>;
  deleted?: InputMaybe<DestinationInterfaceDeletedFilterComparison>;
  destinationSystemId?: InputMaybe<IntFieldComparison>;
  header?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  interfaceName?: InputMaybe<StringFieldComparison>;
  memo?: InputMaybe<StringFieldComparison>;
  method?: InputMaybe<StringFieldComparison>;
  optionData?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<DestinationInterfaceDeleteFilter>>;
  payload?: InputMaybe<StringFieldComparison>;
  resultKey?: InputMaybe<StringFieldComparison>;
  sql?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedUserId?: InputMaybe<IntFieldComparison>;
  uri?: InputMaybe<StringFieldComparison>;
};

export type DestinationInterfaceDeleteResponse = {
  __typename?: 'DestinationInterfaceDeleteResponse';
  /** 생성시각 */
  createdAt?: Maybe<Scalars['DateTime']>;
  /** 생성자 */
  createdUserId?: Maybe<Scalars['Int']>;
  /** 삭제여부 */
  deleted?: Maybe<Scalars['Boolean']>;
  /** 삭제시각 */
  deletedAt?: Maybe<Scalars['DateTime']>;
  /** destination_system 식별자 */
  destinationSystemId?: Maybe<Scalars['Int']>;
  /** http header 정보 */
  header?: Maybe<Scalars['String']>;
  /** 아이디 */
  id?: Maybe<Scalars['ID']>;
  /** destination interface 명 */
  interfaceName?: Maybe<Scalars['String']>;
  /** 메모 */
  memo?: Maybe<Scalars['String']>;
  /** http method 정보 */
  method?: Maybe<Scalars['String']>;
  /** parameter 혹은 parsing 을 위해 사용할 옵셔널한 데이터, JSON 형태, ex) {boardId:2423746910} */
  optionData?: Maybe<Scalars['String']>;
  /** 데이터 전송 정보 */
  payload?: Maybe<Scalars['String']>;
  /** Exmporter Client 의 response 에 대한 실 데이터 매핑키, null 일때는 원본 그대로 획득, ex) data.boards[0].items */
  resultKey?: Maybe<Scalars['String']>;
  /** destination type db 경우 사용 쿼리 */
  sql?: Maybe<Scalars['String']>;
  /** 수정시각 */
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** 수정자 */
  updatedUserId?: Maybe<Scalars['Int']>;
  /** uri 주소 */
  uri?: Maybe<Scalars['String']>;
};

export type DestinationInterfaceDeletedFilterComparison = {
  in?: InputMaybe<Array<Scalars['Boolean']>>;
};

export type DestinationInterfaceFilter = {
  and?: InputMaybe<Array<DestinationInterfaceFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdUserId?: InputMaybe<IntFieldComparison>;
  deleted?: InputMaybe<DestinationInterfaceDeletedFilterComparison>;
  destinationSystemId?: InputMaybe<IntFieldComparison>;
  header?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  interfaceName?: InputMaybe<StringFieldComparison>;
  memo?: InputMaybe<StringFieldComparison>;
  method?: InputMaybe<StringFieldComparison>;
  optionData?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<DestinationInterfaceFilter>>;
  payload?: InputMaybe<StringFieldComparison>;
  resultKey?: InputMaybe<StringFieldComparison>;
  sql?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedUserId?: InputMaybe<IntFieldComparison>;
  uri?: InputMaybe<StringFieldComparison>;
};

export type DestinationInterfaceInput = {
  /** destination_system 식별자 */
  destinationSystemId: Scalars['Int'];
  /** http header 정보 */
  header?: InputMaybe<Scalars['String']>;
  /** destination interface 명 */
  interfaceName: Scalars['String'];
  /** 메모 */
  memo?: InputMaybe<Scalars['String']>;
  /** http method 정보 */
  method?: InputMaybe<Scalars['String']>;
  /** parameter 혹은 parsing 을 위해 사용할 옵셔널한 데이터, JSON 형태, ex) {boardId:2423746910} */
  optionData?: InputMaybe<Scalars['String']>;
  /** 데이터 전송 정보 */
  payload?: InputMaybe<Scalars['String']>;
  /** Exmporter Client 의 response 에 대한 실 데이터 매핑키, null 일때는 원본 그대로 획득, ex) data.boards[0].items */
  resultKey?: InputMaybe<Scalars['String']>;
  /** destination type db 경우 사용 쿼리 */
  sql?: InputMaybe<Scalars['String']>;
  /** uri 주소 */
  uri?: InputMaybe<Scalars['String']>;
};

export type DestinationInterfaceMaxAggregate = {
  __typename?: 'DestinationInterfaceMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  createdUserId?: Maybe<Scalars['Int']>;
  deleted?: Maybe<Scalars['Boolean']>;
  destinationSystemId?: Maybe<Scalars['Int']>;
  header?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  interfaceName?: Maybe<Scalars['String']>;
  memo?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  optionData?: Maybe<Scalars['String']>;
  payload?: Maybe<Scalars['String']>;
  resultKey?: Maybe<Scalars['String']>;
  sql?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedUserId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};

export type DestinationInterfaceMinAggregate = {
  __typename?: 'DestinationInterfaceMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  createdUserId?: Maybe<Scalars['Int']>;
  deleted?: Maybe<Scalars['Boolean']>;
  destinationSystemId?: Maybe<Scalars['Int']>;
  header?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  interfaceName?: Maybe<Scalars['String']>;
  memo?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  optionData?: Maybe<Scalars['String']>;
  payload?: Maybe<Scalars['String']>;
  resultKey?: Maybe<Scalars['String']>;
  sql?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedUserId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};

export type DestinationInterfaceSort = {
  direction: SortDirection;
  field: DestinationInterfaceSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum DestinationInterfaceSortFields {
  CreatedAt = 'createdAt',
  CreatedUserId = 'createdUserId',
  Deleted = 'deleted',
  DestinationSystemId = 'destinationSystemId',
  Header = 'header',
  Id = 'id',
  InterfaceName = 'interfaceName',
  Memo = 'memo',
  Method = 'method',
  OptionData = 'optionData',
  Payload = 'payload',
  ResultKey = 'resultKey',
  Sql = 'sql',
  UpdatedAt = 'updatedAt',
  UpdatedUserId = 'updatedUserId',
  Uri = 'uri'
}

export type DestinationInterfaceSumAggregate = {
  __typename?: 'DestinationInterfaceSumAggregate';
  createdUserId?: Maybe<Scalars['Float']>;
  destinationSystemId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updatedUserId?: Maybe<Scalars['Float']>;
};

export type DestinationMapper = AbstractBaseEntity & {
  __typename?: 'DestinationMapper';
  /** 생성시각 */
  createdAt: Scalars['DateTime'];
  /** 생성자 */
  createdUserId: Scalars['Int'];
  /** 삭제여부 */
  deleted: Scalars['Boolean'];
  /** 삭제시각 */
  deletedAt?: Maybe<Scalars['DateTime']>;
  /** destination_interface 식별자 */
  destinationInterfaceId: Scalars['Int'];
  /** 아이디 */
  id: Scalars['ID'];
  /** destination mapper 명 */
  mapperName: Scalars['String'];
  /** 비고 */
  memo?: Maybe<Scalars['String']>;
  /** 순서 */
  sort: Scalars['Int'];
  /** source_interface 식별자 */
  sourceInterfaceId: Scalars['Int'];
  /** 수정시각 */
  updatedAt: Scalars['DateTime'];
  /** 수정자 */
  updatedUserId: Scalars['Int'];
};

export type DestinationMapperAggregateGroupBy = {
  __typename?: 'DestinationMapperAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  createdUserId?: Maybe<Scalars['Int']>;
  deleted?: Maybe<Scalars['Boolean']>;
  destinationInterfaceId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  mapperName?: Maybe<Scalars['String']>;
  memo?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  sourceInterfaceId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedUserId?: Maybe<Scalars['Int']>;
};

export type DestinationMapperAvgAggregate = {
  __typename?: 'DestinationMapperAvgAggregate';
  createdUserId?: Maybe<Scalars['Float']>;
  destinationInterfaceId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
  sourceInterfaceId?: Maybe<Scalars['Float']>;
  updatedUserId?: Maybe<Scalars['Float']>;
};

export type DestinationMapperConnection = {
  __typename?: 'DestinationMapperConnection';
  /** Array of nodes. */
  nodes: Array<DestinationMapper>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type DestinationMapperCountAggregate = {
  __typename?: 'DestinationMapperCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  createdUserId?: Maybe<Scalars['Int']>;
  deleted?: Maybe<Scalars['Int']>;
  destinationInterfaceId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  mapperName?: Maybe<Scalars['Int']>;
  memo?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
  sourceInterfaceId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  updatedUserId?: Maybe<Scalars['Int']>;
};

export type DestinationMapperDeleteFilter = {
  and?: InputMaybe<Array<DestinationMapperDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdUserId?: InputMaybe<IntFieldComparison>;
  deleted?: InputMaybe<DestinationMapperDeletedFilterComparison>;
  destinationInterfaceId?: InputMaybe<IntFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  mapperName?: InputMaybe<StringFieldComparison>;
  memo?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<DestinationMapperDeleteFilter>>;
  sort?: InputMaybe<IntFieldComparison>;
  sourceInterfaceId?: InputMaybe<IntFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedUserId?: InputMaybe<IntFieldComparison>;
};

export type DestinationMapperDeleteResponse = {
  __typename?: 'DestinationMapperDeleteResponse';
  /** 생성시각 */
  createdAt?: Maybe<Scalars['DateTime']>;
  /** 생성자 */
  createdUserId?: Maybe<Scalars['Int']>;
  /** 삭제여부 */
  deleted?: Maybe<Scalars['Boolean']>;
  /** 삭제시각 */
  deletedAt?: Maybe<Scalars['DateTime']>;
  /** destination_interface 식별자 */
  destinationInterfaceId?: Maybe<Scalars['Int']>;
  /** 아이디 */
  id?: Maybe<Scalars['ID']>;
  /** destination mapper 명 */
  mapperName?: Maybe<Scalars['String']>;
  /** 비고 */
  memo?: Maybe<Scalars['String']>;
  /** 순서 */
  sort?: Maybe<Scalars['Int']>;
  /** source_interface 식별자 */
  sourceInterfaceId?: Maybe<Scalars['Int']>;
  /** 수정시각 */
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** 수정자 */
  updatedUserId?: Maybe<Scalars['Int']>;
};

export type DestinationMapperDeletedFilterComparison = {
  in?: InputMaybe<Array<Scalars['Boolean']>>;
};

export type DestinationMapperFilter = {
  and?: InputMaybe<Array<DestinationMapperFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdUserId?: InputMaybe<IntFieldComparison>;
  deleted?: InputMaybe<DestinationMapperDeletedFilterComparison>;
  destinationInterfaceId?: InputMaybe<IntFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  mapperName?: InputMaybe<StringFieldComparison>;
  memo?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<DestinationMapperFilter>>;
  sort?: InputMaybe<IntFieldComparison>;
  sourceInterfaceId?: InputMaybe<IntFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedUserId?: InputMaybe<IntFieldComparison>;
};

export type DestinationMapperInput = {
  /** destination_interface 식별자 */
  destinationInterfaceId: Scalars['Int'];
  /** destination mapper 명 */
  mapperName: Scalars['String'];
  /** 비고 */
  memo?: InputMaybe<Scalars['String']>;
  /** 순서 */
  sort: Scalars['Int'];
  /** source_interface 식별자 */
  sourceInterfaceId: Scalars['Int'];
};

export type DestinationMapperMaxAggregate = {
  __typename?: 'DestinationMapperMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  createdUserId?: Maybe<Scalars['Int']>;
  deleted?: Maybe<Scalars['Boolean']>;
  destinationInterfaceId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  mapperName?: Maybe<Scalars['String']>;
  memo?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  sourceInterfaceId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedUserId?: Maybe<Scalars['Int']>;
};

export type DestinationMapperMinAggregate = {
  __typename?: 'DestinationMapperMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  createdUserId?: Maybe<Scalars['Int']>;
  deleted?: Maybe<Scalars['Boolean']>;
  destinationInterfaceId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  mapperName?: Maybe<Scalars['String']>;
  memo?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  sourceInterfaceId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedUserId?: Maybe<Scalars['Int']>;
};

export type DestinationMapperSort = {
  direction: SortDirection;
  field: DestinationMapperSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum DestinationMapperSortFields {
  CreatedAt = 'createdAt',
  CreatedUserId = 'createdUserId',
  Deleted = 'deleted',
  DestinationInterfaceId = 'destinationInterfaceId',
  Id = 'id',
  MapperName = 'mapperName',
  Memo = 'memo',
  Sort = 'sort',
  SourceInterfaceId = 'sourceInterfaceId',
  UpdatedAt = 'updatedAt',
  UpdatedUserId = 'updatedUserId'
}

export type DestinationMapperSumAggregate = {
  __typename?: 'DestinationMapperSumAggregate';
  createdUserId?: Maybe<Scalars['Float']>;
  destinationInterfaceId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
  sourceInterfaceId?: Maybe<Scalars['Float']>;
  updatedUserId?: Maybe<Scalars['Float']>;
};

export type DestinationSystem = AbstractBaseEntity & {
  __typename?: 'DestinationSystem';
  /** 생성시각 */
  createdAt: Scalars['DateTime'];
  /** 생성자 */
  createdUserId: Scalars['Int'];
  /** 삭제여부 */
  deleted: Scalars['Boolean'];
  /** 삭제시각 */
  deletedAt?: Maybe<Scalars['DateTime']>;
  /** destination host */
  host: Scalars['String'];
  /** 아이디 */
  id: Scalars['ID'];
  /** 비고 */
  memo?: Maybe<Scalars['String']>;
  /** destination port */
  port: Scalars['String'];
  /** destination_system 명 */
  systemName: Scalars['String'];
  /** destination 연동 타입, api, db, socket */
  type: SystemType;
  /** 수정시각 */
  updatedAt: Scalars['DateTime'];
  /** 수정자 */
  updatedUserId: Scalars['Int'];
};

export type DestinationSystemAggregateGroupBy = {
  __typename?: 'DestinationSystemAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  createdUserId?: Maybe<Scalars['Int']>;
  deleted?: Maybe<Scalars['Boolean']>;
  host?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  memo?: Maybe<Scalars['String']>;
  port?: Maybe<Scalars['String']>;
  systemName?: Maybe<Scalars['String']>;
  type?: Maybe<SystemType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedUserId?: Maybe<Scalars['Int']>;
};

export type DestinationSystemAvgAggregate = {
  __typename?: 'DestinationSystemAvgAggregate';
  createdUserId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updatedUserId?: Maybe<Scalars['Float']>;
};

export type DestinationSystemConnection = {
  __typename?: 'DestinationSystemConnection';
  /** Array of nodes. */
  nodes: Array<DestinationSystem>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type DestinationSystemCountAggregate = {
  __typename?: 'DestinationSystemCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  createdUserId?: Maybe<Scalars['Int']>;
  deleted?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  memo?: Maybe<Scalars['Int']>;
  port?: Maybe<Scalars['Int']>;
  systemName?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  updatedUserId?: Maybe<Scalars['Int']>;
};

export type DestinationSystemDeleteFilter = {
  and?: InputMaybe<Array<DestinationSystemDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdUserId?: InputMaybe<IntFieldComparison>;
  deleted?: InputMaybe<DestinationSystemDeletedFilterComparison>;
  host?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  memo?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<DestinationSystemDeleteFilter>>;
  port?: InputMaybe<StringFieldComparison>;
  systemName?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<SystemTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedUserId?: InputMaybe<IntFieldComparison>;
};

export type DestinationSystemDeleteResponse = {
  __typename?: 'DestinationSystemDeleteResponse';
  /** 생성시각 */
  createdAt?: Maybe<Scalars['DateTime']>;
  /** 생성자 */
  createdUserId?: Maybe<Scalars['Int']>;
  /** 삭제여부 */
  deleted?: Maybe<Scalars['Boolean']>;
  /** 삭제시각 */
  deletedAt?: Maybe<Scalars['DateTime']>;
  /** destination host */
  host?: Maybe<Scalars['String']>;
  /** 아이디 */
  id?: Maybe<Scalars['ID']>;
  /** 비고 */
  memo?: Maybe<Scalars['String']>;
  /** destination port */
  port?: Maybe<Scalars['String']>;
  /** destination_system 명 */
  systemName?: Maybe<Scalars['String']>;
  /** destination 연동 타입, api, db, socket */
  type?: Maybe<SystemType>;
  /** 수정시각 */
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** 수정자 */
  updatedUserId?: Maybe<Scalars['Int']>;
};

export type DestinationSystemDeletedFilterComparison = {
  in?: InputMaybe<Array<Scalars['Boolean']>>;
};

export type DestinationSystemFilter = {
  and?: InputMaybe<Array<DestinationSystemFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdUserId?: InputMaybe<IntFieldComparison>;
  deleted?: InputMaybe<DestinationSystemDeletedFilterComparison>;
  host?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  memo?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<DestinationSystemFilter>>;
  port?: InputMaybe<StringFieldComparison>;
  systemName?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<SystemTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedUserId?: InputMaybe<IntFieldComparison>;
};

export type DestinationSystemInput = {
  /** destination host */
  host: Scalars['String'];
  /** 비고 */
  memo?: InputMaybe<Scalars['String']>;
  /** destination port */
  port: Scalars['String'];
  /** destination_system 명 */
  systemName: Scalars['String'];
  /** destination 연동 타입, api, db, socket */
  type: SystemType;
};

export type DestinationSystemMaxAggregate = {
  __typename?: 'DestinationSystemMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  createdUserId?: Maybe<Scalars['Int']>;
  deleted?: Maybe<Scalars['Boolean']>;
  host?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  memo?: Maybe<Scalars['String']>;
  port?: Maybe<Scalars['String']>;
  systemName?: Maybe<Scalars['String']>;
  type?: Maybe<SystemType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedUserId?: Maybe<Scalars['Int']>;
};

export type DestinationSystemMinAggregate = {
  __typename?: 'DestinationSystemMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  createdUserId?: Maybe<Scalars['Int']>;
  deleted?: Maybe<Scalars['Boolean']>;
  host?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  memo?: Maybe<Scalars['String']>;
  port?: Maybe<Scalars['String']>;
  systemName?: Maybe<Scalars['String']>;
  type?: Maybe<SystemType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedUserId?: Maybe<Scalars['Int']>;
};

export type DestinationSystemSort = {
  direction: SortDirection;
  field: DestinationSystemSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum DestinationSystemSortFields {
  CreatedAt = 'createdAt',
  CreatedUserId = 'createdUserId',
  Deleted = 'deleted',
  Host = 'host',
  Id = 'id',
  Memo = 'memo',
  Port = 'port',
  SystemName = 'systemName',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  UpdatedUserId = 'updatedUserId'
}

export type DestinationSystemSumAggregate = {
  __typename?: 'DestinationSystemSumAggregate';
  createdUserId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updatedUserId?: Maybe<Scalars['Float']>;
};

export type IdFilterComparison = {
  eq?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  iLike?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<Scalars['ID']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  neq?: InputMaybe<Scalars['ID']>;
  notILike?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<Scalars['ID']>>;
  notLike?: InputMaybe<Scalars['ID']>;
};

export type IntFieldComparison = {
  between?: InputMaybe<IntFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  neq?: InputMaybe<Scalars['Int']>;
  notBetween?: InputMaybe<IntFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntFieldComparisonBetween = {
  lower: Scalars['Int'];
  upper: Scalars['Int'];
};

export type LoginInput = {
  /** 이메일 */
  email: Scalars['String'];
  /** 패스워드 */
  password: Scalars['String'];
};

export type LoginToken = {
  __typename?: 'LoginToken';
  /** 로그인 토큰 */
  token: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createOneDestinationInterface: DestinationInterface;
  createOneDestinationMapper: DestinationMapper;
  createOneDestinationSystem: DestinationSystem;
  createOneScheduleTask: ScheduleTask;
  createOneSourceInterface: SourceInterface;
  createOneSourceSystem: SourceSystem;
  createOneUser: User;
  deleteManyDestinationInterfaces: DeleteManyResponse;
  deleteManyDestinationMappers: DeleteManyResponse;
  deleteManyDestinationSystems: DeleteManyResponse;
  deleteManySourceInterfaces: DeleteManyResponse;
  deleteManySourceSystems: DeleteManyResponse;
  deleteManyUsers: DeleteManyResponse;
  deleteOneDestinationInterface: DestinationInterfaceDeleteResponse;
  deleteOneDestinationMapper: DestinationMapperDeleteResponse;
  deleteOneDestinationSystem: DestinationSystemDeleteResponse;
  deleteOneScheduleTask: ScheduleTaskDeleteResponse;
  deleteOneSourceInterface: SourceInterfaceDeleteResponse;
  deleteOneSourceSystem: SourceSystemDeleteResponse;
  deleteOneUser: UserDeleteResponse;
  /** 어드민 로그인 */
  login: LoginToken;
  setSourceSystemOnSourceInterface: SourceInterface;
  /** 유저 회원가입 */
  signup: LoginToken;
  updateOneDestinationInterface: DestinationInterface;
  updateOneDestinationMapper: DestinationMapper;
  updateOneDestinationSystem: DestinationSystem;
  updateOneScheduleTask: ScheduleTask;
  updateOneSourceInterface: SourceInterface;
  updateOneSourceSystem: SourceSystem;
  updateOneUser: User;
};


export type MutationCreateOneDestinationInterfaceArgs = {
  input: CreateOneDestinationInterfaceInput;
};


export type MutationCreateOneDestinationMapperArgs = {
  input: CreateOneDestinationMapperInput;
};


export type MutationCreateOneDestinationSystemArgs = {
  input: CreateOneDestinationSystemInput;
};


export type MutationCreateOneScheduleTaskArgs = {
  input: CreateOneScheduleTaskInput;
};


export type MutationCreateOneSourceInterfaceArgs = {
  input: CreateOneSourceInterfaceInput;
};


export type MutationCreateOneSourceSystemArgs = {
  input: CreateOneSourceSystemInput;
};


export type MutationCreateOneUserArgs = {
  input: CreateOneUserInput;
};


export type MutationDeleteManyDestinationInterfacesArgs = {
  input: DeleteManyDestinationInterfacesInput;
};


export type MutationDeleteManyDestinationMappersArgs = {
  input: DeleteManyDestinationMappersInput;
};


export type MutationDeleteManyDestinationSystemsArgs = {
  input: DeleteManyDestinationSystemsInput;
};


export type MutationDeleteManySourceInterfacesArgs = {
  input: DeleteManySourceInterfacesInput;
};


export type MutationDeleteManySourceSystemsArgs = {
  input: DeleteManySourceSystemsInput;
};


export type MutationDeleteManyUsersArgs = {
  input: DeleteManyUsersInput;
};


export type MutationDeleteOneDestinationInterfaceArgs = {
  input: DeleteOneDestinationInterfaceInput;
};


export type MutationDeleteOneDestinationMapperArgs = {
  input: DeleteOneDestinationMapperInput;
};


export type MutationDeleteOneDestinationSystemArgs = {
  input: DeleteOneDestinationSystemInput;
};


export type MutationDeleteOneScheduleTaskArgs = {
  input: DeleteOneScheduleTaskInput;
};


export type MutationDeleteOneSourceInterfaceArgs = {
  input: DeleteOneSourceInterfaceInput;
};


export type MutationDeleteOneSourceSystemArgs = {
  input: DeleteOneSourceSystemInput;
};


export type MutationDeleteOneUserArgs = {
  input: DeleteOneUserInput;
};


export type MutationLoginArgs = {
  login: LoginInput;
};


export type MutationSetSourceSystemOnSourceInterfaceArgs = {
  input: SetSourceSystemOnSourceInterfaceInput;
};


export type MutationSignupArgs = {
  user: SignUpInput;
};


export type MutationUpdateOneDestinationInterfaceArgs = {
  input: UpdateOneDestinationInterfaceInput;
};


export type MutationUpdateOneDestinationMapperArgs = {
  input: UpdateOneDestinationMapperInput;
};


export type MutationUpdateOneDestinationSystemArgs = {
  input: UpdateOneDestinationSystemInput;
};


export type MutationUpdateOneScheduleTaskArgs = {
  input: UpdateOneScheduleTaskInput;
};


export type MutationUpdateOneSourceInterfaceArgs = {
  input: UpdateOneSourceInterfaceInput;
};


export type MutationUpdateOneSourceSystemArgs = {
  input: UpdateOneSourceSystemInput;
};


export type MutationUpdateOneUserArgs = {
  input: UpdateOneUserInput;
};

export type OffsetPageInfo = {
  __typename?: 'OffsetPageInfo';
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars['Boolean']>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
};

export type OffsetPaging = {
  /** Limit the number of records returned */
  limit?: InputMaybe<Scalars['Int']>;
  /** Offset to start returning records from */
  offset?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  destinationInterface?: Maybe<DestinationInterface>;
  destinationInterfaces: DestinationInterfaceConnection;
  destinationMapper?: Maybe<DestinationMapper>;
  destinationMappers: DestinationMapperConnection;
  destinationSystem?: Maybe<DestinationSystem>;
  destinationSystems: DestinationSystemConnection;
  /** 유저 이메일 중복 조회 */
  existsUserEmail: Scalars['Boolean'];
  /** 로그인된 내 정보 */
  me: User;
  scheduleTask?: Maybe<ScheduleTask>;
  scheduleTasks: ScheduleTaskConnection;
  sourceInterface?: Maybe<SourceInterface>;
  sourceInterfaces: SourceInterfaceConnection;
  sourceSystem?: Maybe<SourceSystem>;
  sourceSystems: SourceSystemConnection;
  user?: Maybe<User>;
  userAggregate: Array<UserAggregateResponse>;
  users: UserConnection;
};


export type QueryDestinationInterfaceArgs = {
  id: Scalars['ID'];
};


export type QueryDestinationInterfacesArgs = {
  filter?: InputMaybe<DestinationInterfaceFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<DestinationInterfaceSort>>;
};


export type QueryDestinationMapperArgs = {
  id: Scalars['ID'];
};


export type QueryDestinationMappersArgs = {
  filter?: InputMaybe<DestinationMapperFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<DestinationMapperSort>>;
};


export type QueryDestinationSystemArgs = {
  id: Scalars['ID'];
};


export type QueryDestinationSystemsArgs = {
  filter?: InputMaybe<DestinationSystemFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<DestinationSystemSort>>;
};


export type QueryExistsUserEmailArgs = {
  email: Scalars['String'];
};


export type QueryScheduleTaskArgs = {
  id: Scalars['ID'];
};


export type QueryScheduleTasksArgs = {
  filter?: InputMaybe<ScheduleTaskFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ScheduleTaskSort>>;
};


export type QuerySourceInterfaceArgs = {
  id: Scalars['ID'];
};


export type QuerySourceInterfacesArgs = {
  filter?: InputMaybe<SourceInterfaceFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<SourceInterfaceSort>>;
};


export type QuerySourceSystemArgs = {
  id: Scalars['ID'];
};


export type QuerySourceSystemsArgs = {
  filter?: InputMaybe<SourceSystemFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<SourceSystemSort>>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUserAggregateArgs = {
  filter?: InputMaybe<UserAggregateFilter>;
};


export type QueryUsersArgs = {
  filter?: InputMaybe<UserFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<UserSort>>;
};

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export type RoleFilterComparison = {
  eq?: InputMaybe<Role>;
  gt?: InputMaybe<Role>;
  gte?: InputMaybe<Role>;
  iLike?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Role>;
  lt?: InputMaybe<Role>;
  lte?: InputMaybe<Role>;
  neq?: InputMaybe<Role>;
  notILike?: InputMaybe<Role>;
  notIn?: InputMaybe<Array<Role>>;
  notLike?: InputMaybe<Role>;
};

export type ScheduleTask = AbstractBaseEntity & {
  __typename?: 'ScheduleTask';
  /** 배치주기, CRON (* * * * * *) 형태 사용, use year */
  batchCronSchedule: Scalars['String'];
  /** 생성시각 */
  createdAt: Scalars['DateTime'];
  /** 생성자 */
  createdUserId: Scalars['Int'];
  /** 삭제여부 */
  deleted: Scalars['Boolean'];
  /** 삭제시각 */
  deletedAt?: Maybe<Scalars['DateTime']>;
  /** 아이디 */
  id: Scalars['ID'];
  /** Request Payload, 작업시 필요한 데이터 */
  requestPayload?: Maybe<Scalars['String']>;
  /** source_interface 참조키 */
  sourceInterfaceId: Scalars['Int'];
  /** 작업명 */
  taskName: Scalars['String'];
  /** 수정시각 */
  updatedAt: Scalars['DateTime'];
  /** 수정자 */
  updatedUserId: Scalars['Int'];
};

export type ScheduleTaskAggregateGroupBy = {
  __typename?: 'ScheduleTaskAggregateGroupBy';
  batchCronSchedule?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdUserId?: Maybe<Scalars['Int']>;
  deleted?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  requestPayload?: Maybe<Scalars['String']>;
  sourceInterfaceId?: Maybe<Scalars['Int']>;
  taskName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedUserId?: Maybe<Scalars['Int']>;
};

export type ScheduleTaskAvgAggregate = {
  __typename?: 'ScheduleTaskAvgAggregate';
  createdUserId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  sourceInterfaceId?: Maybe<Scalars['Float']>;
  updatedUserId?: Maybe<Scalars['Float']>;
};

export type ScheduleTaskConnection = {
  __typename?: 'ScheduleTaskConnection';
  /** Array of nodes. */
  nodes: Array<ScheduleTask>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type ScheduleTaskCountAggregate = {
  __typename?: 'ScheduleTaskCountAggregate';
  batchCronSchedule?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  createdUserId?: Maybe<Scalars['Int']>;
  deleted?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  requestPayload?: Maybe<Scalars['Int']>;
  sourceInterfaceId?: Maybe<Scalars['Int']>;
  taskName?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  updatedUserId?: Maybe<Scalars['Int']>;
};

export type ScheduleTaskDeleteResponse = {
  __typename?: 'ScheduleTaskDeleteResponse';
  /** 배치주기, CRON (* * * * * *) 형태 사용, use year */
  batchCronSchedule?: Maybe<Scalars['String']>;
  /** 생성시각 */
  createdAt?: Maybe<Scalars['DateTime']>;
  /** 생성자 */
  createdUserId?: Maybe<Scalars['Int']>;
  /** 삭제여부 */
  deleted?: Maybe<Scalars['Boolean']>;
  /** 삭제시각 */
  deletedAt?: Maybe<Scalars['DateTime']>;
  /** 아이디 */
  id?: Maybe<Scalars['ID']>;
  /** Request Payload, 작업시 필요한 데이터 */
  requestPayload?: Maybe<Scalars['String']>;
  /** source_interface 참조키 */
  sourceInterfaceId?: Maybe<Scalars['Int']>;
  /** 작업명 */
  taskName?: Maybe<Scalars['String']>;
  /** 수정시각 */
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** 수정자 */
  updatedUserId?: Maybe<Scalars['Int']>;
};

export type ScheduleTaskDeletedFilterComparison = {
  in?: InputMaybe<Array<Scalars['Boolean']>>;
};

export type ScheduleTaskFilter = {
  and?: InputMaybe<Array<ScheduleTaskFilter>>;
  batchCronSchedule?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdUserId?: InputMaybe<IntFieldComparison>;
  deleted?: InputMaybe<ScheduleTaskDeletedFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ScheduleTaskFilter>>;
  requestPayload?: InputMaybe<StringFieldComparison>;
  sourceInterfaceId?: InputMaybe<IntFieldComparison>;
  taskName?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedUserId?: InputMaybe<IntFieldComparison>;
};

export type ScheduleTaskInput = {
  /** 배치주기, CRON (* * * * * *) 형태 사용, use year */
  batchCronSchedule: Scalars['String'];
  /** Request Payload, 작업시 필요한 데이터 */
  requestPayload?: InputMaybe<Scalars['String']>;
  /** source_interface 참조키 */
  sourceInterfaceId: Scalars['Int'];
  /** 작업명 */
  taskName: Scalars['String'];
};

export type ScheduleTaskMaxAggregate = {
  __typename?: 'ScheduleTaskMaxAggregate';
  batchCronSchedule?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdUserId?: Maybe<Scalars['Int']>;
  deleted?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  requestPayload?: Maybe<Scalars['String']>;
  sourceInterfaceId?: Maybe<Scalars['Int']>;
  taskName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedUserId?: Maybe<Scalars['Int']>;
};

export type ScheduleTaskMinAggregate = {
  __typename?: 'ScheduleTaskMinAggregate';
  batchCronSchedule?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdUserId?: Maybe<Scalars['Int']>;
  deleted?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  requestPayload?: Maybe<Scalars['String']>;
  sourceInterfaceId?: Maybe<Scalars['Int']>;
  taskName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedUserId?: Maybe<Scalars['Int']>;
};

export type ScheduleTaskSort = {
  direction: SortDirection;
  field: ScheduleTaskSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ScheduleTaskSortFields {
  BatchCronSchedule = 'batchCronSchedule',
  CreatedAt = 'createdAt',
  CreatedUserId = 'createdUserId',
  Deleted = 'deleted',
  Id = 'id',
  RequestPayload = 'requestPayload',
  SourceInterfaceId = 'sourceInterfaceId',
  TaskName = 'taskName',
  UpdatedAt = 'updatedAt',
  UpdatedUserId = 'updatedUserId'
}

export type ScheduleTaskSumAggregate = {
  __typename?: 'ScheduleTaskSumAggregate';
  createdUserId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  sourceInterfaceId?: Maybe<Scalars['Float']>;
  updatedUserId?: Maybe<Scalars['Float']>;
};

export type SetSourceSystemOnSourceInterfaceInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SignUpInput = {
  /** 이메일 */
  email: Scalars['String'];
  /** 이름 */
  name: Scalars['String'];
  /** 패스워드 */
  password: Scalars['String'];
};

/** Sort Directions */
export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** Sort Nulls Options */
export enum SortNulls {
  NullsFirst = 'NULLS_FIRST',
  NullsLast = 'NULLS_LAST'
}

export type SourceInterface = AbstractBaseEntity & {
  __typename?: 'SourceInterface';
  /** 생성시각 */
  createdAt: Scalars['DateTime'];
  /** 생성자 */
  createdUserId: Scalars['Int'];
  /** 삭제여부 */
  deleted: Scalars['Boolean'];
  /** 삭제시각 */
  deletedAt?: Maybe<Scalars['DateTime']>;
  /** http header 정보 */
  header?: Maybe<Scalars['String']>;
  /** 아이디 */
  id: Scalars['ID'];
  /** source_interface 명 */
  interfaceName: Scalars['String'];
  /** 비고 */
  memo?: Maybe<Scalars['String']>;
  /** http method 정보 */
  method?: Maybe<Scalars['String']>;
  /** payload 혹은 header 의 customizing 을 위한 옵셔녈 데이터, JSON */
  optionData?: Maybe<Scalars['String']>;
  /** http 데이터 전송 정보 */
  payload?: Maybe<Scalars['String']>;
  /** dynamoDB 의 pk 에 사용할 컬럼의 키워드 리스트. 입력순으로 우선순위를 갖는다. 구분자는 콤마(,) */
  pkItems?: Maybe<Scalars['String']>;
  /** importer 의 response 에 대한 실사용 데이터 매핑키. dictionary 에 대한 nested depth Key 값임. ex) data.boards[0].items */
  resultKey?: Maybe<Scalars['String']>;
  sourceSystem: SourceSystem;
  /** source_system 식별자 */
  sourceSystemId: Scalars['Int'];
  /** source type db 경우 쿼리 */
  sql?: Maybe<Scalars['String']>;
  /** 수정시각 */
  updatedAt: Scalars['DateTime'];
  /** 수정자 */
  updatedUserId: Scalars['Int'];
  /** uri 주소 */
  uri?: Maybe<Scalars['String']>;
};

export type SourceInterfaceAggregateGroupBy = {
  __typename?: 'SourceInterfaceAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  createdUserId?: Maybe<Scalars['Int']>;
  deleted?: Maybe<Scalars['Boolean']>;
  header?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  interfaceName?: Maybe<Scalars['String']>;
  memo?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  optionData?: Maybe<Scalars['String']>;
  payload?: Maybe<Scalars['String']>;
  pkItems?: Maybe<Scalars['String']>;
  resultKey?: Maybe<Scalars['String']>;
  sourceSystemId?: Maybe<Scalars['Int']>;
  sql?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedUserId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};

export type SourceInterfaceAvgAggregate = {
  __typename?: 'SourceInterfaceAvgAggregate';
  createdUserId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  sourceSystemId?: Maybe<Scalars['Float']>;
  updatedUserId?: Maybe<Scalars['Float']>;
};

export type SourceInterfaceConnection = {
  __typename?: 'SourceInterfaceConnection';
  /** Array of nodes. */
  nodes: Array<SourceInterface>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type SourceInterfaceCountAggregate = {
  __typename?: 'SourceInterfaceCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  createdUserId?: Maybe<Scalars['Int']>;
  deleted?: Maybe<Scalars['Int']>;
  header?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  interfaceName?: Maybe<Scalars['Int']>;
  memo?: Maybe<Scalars['Int']>;
  method?: Maybe<Scalars['Int']>;
  optionData?: Maybe<Scalars['Int']>;
  payload?: Maybe<Scalars['Int']>;
  pkItems?: Maybe<Scalars['Int']>;
  resultKey?: Maybe<Scalars['Int']>;
  sourceSystemId?: Maybe<Scalars['Int']>;
  sql?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  updatedUserId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['Int']>;
};

export type SourceInterfaceDeleteFilter = {
  and?: InputMaybe<Array<SourceInterfaceDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdUserId?: InputMaybe<IntFieldComparison>;
  deleted?: InputMaybe<SourceInterfaceDeletedFilterComparison>;
  header?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  interfaceName?: InputMaybe<StringFieldComparison>;
  memo?: InputMaybe<StringFieldComparison>;
  method?: InputMaybe<StringFieldComparison>;
  optionData?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<SourceInterfaceDeleteFilter>>;
  payload?: InputMaybe<StringFieldComparison>;
  pkItems?: InputMaybe<StringFieldComparison>;
  resultKey?: InputMaybe<StringFieldComparison>;
  sourceSystemId?: InputMaybe<IntFieldComparison>;
  sql?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedUserId?: InputMaybe<IntFieldComparison>;
  uri?: InputMaybe<StringFieldComparison>;
};

export type SourceInterfaceDeleteResponse = {
  __typename?: 'SourceInterfaceDeleteResponse';
  /** 생성시각 */
  createdAt?: Maybe<Scalars['DateTime']>;
  /** 생성자 */
  createdUserId?: Maybe<Scalars['Int']>;
  /** 삭제여부 */
  deleted?: Maybe<Scalars['Boolean']>;
  /** 삭제시각 */
  deletedAt?: Maybe<Scalars['DateTime']>;
  /** http header 정보 */
  header?: Maybe<Scalars['String']>;
  /** 아이디 */
  id?: Maybe<Scalars['ID']>;
  /** source_interface 명 */
  interfaceName?: Maybe<Scalars['String']>;
  /** 비고 */
  memo?: Maybe<Scalars['String']>;
  /** http method 정보 */
  method?: Maybe<Scalars['String']>;
  /** payload 혹은 header 의 customizing 을 위한 옵셔녈 데이터, JSON */
  optionData?: Maybe<Scalars['String']>;
  /** http 데이터 전송 정보 */
  payload?: Maybe<Scalars['String']>;
  /** dynamoDB 의 pk 에 사용할 컬럼의 키워드 리스트. 입력순으로 우선순위를 갖는다. 구분자는 콤마(,) */
  pkItems?: Maybe<Scalars['String']>;
  /** importer 의 response 에 대한 실사용 데이터 매핑키. dictionary 에 대한 nested depth Key 값임. ex) data.boards[0].items */
  resultKey?: Maybe<Scalars['String']>;
  /** source_system 식별자 */
  sourceSystemId?: Maybe<Scalars['Int']>;
  /** source type db 경우 쿼리 */
  sql?: Maybe<Scalars['String']>;
  /** 수정시각 */
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** 수정자 */
  updatedUserId?: Maybe<Scalars['Int']>;
  /** uri 주소 */
  uri?: Maybe<Scalars['String']>;
};

export type SourceInterfaceDeletedFilterComparison = {
  in?: InputMaybe<Array<Scalars['Boolean']>>;
};

export type SourceInterfaceFilter = {
  and?: InputMaybe<Array<SourceInterfaceFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdUserId?: InputMaybe<IntFieldComparison>;
  deleted?: InputMaybe<SourceInterfaceDeletedFilterComparison>;
  header?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  interfaceName?: InputMaybe<StringFieldComparison>;
  memo?: InputMaybe<StringFieldComparison>;
  method?: InputMaybe<StringFieldComparison>;
  optionData?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<SourceInterfaceFilter>>;
  payload?: InputMaybe<StringFieldComparison>;
  pkItems?: InputMaybe<StringFieldComparison>;
  resultKey?: InputMaybe<StringFieldComparison>;
  sourceSystemId?: InputMaybe<IntFieldComparison>;
  sql?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedUserId?: InputMaybe<IntFieldComparison>;
  uri?: InputMaybe<StringFieldComparison>;
};

export type SourceInterfaceInput = {
  /** http header 정보 */
  header?: InputMaybe<Scalars['String']>;
  /** source_interface 명 */
  interfaceName: Scalars['String'];
  /** 비고 */
  memo?: InputMaybe<Scalars['String']>;
  /** http method 정보 */
  method?: InputMaybe<Scalars['String']>;
  /** payload 혹은 header 의 customizing 을 위한 옵셔녈 데이터, JSON */
  optionData?: InputMaybe<Scalars['String']>;
  /** http 데이터 전송 정보 */
  payload?: InputMaybe<Scalars['String']>;
  /** dynamoDB 의 pk 에 사용할 컬럼의 키워드 리스트. 입력순으로 우선순위를 갖는다. 구분자는 콤마(,) */
  pkItems?: InputMaybe<Scalars['String']>;
  /** importer 의 response 에 대한 실사용 데이터 매핑키. dictionary 에 대한 nested depth Key 값임. ex) data.boards[0].items */
  resultKey?: InputMaybe<Scalars['String']>;
  /** source_system 식별자 */
  sourceSystemId: Scalars['Int'];
  /** source type db 경우 쿼리 */
  sql?: InputMaybe<Scalars['String']>;
  /** uri 주소 */
  uri?: InputMaybe<Scalars['String']>;
};

export type SourceInterfaceMaxAggregate = {
  __typename?: 'SourceInterfaceMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  createdUserId?: Maybe<Scalars['Int']>;
  deleted?: Maybe<Scalars['Boolean']>;
  header?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  interfaceName?: Maybe<Scalars['String']>;
  memo?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  optionData?: Maybe<Scalars['String']>;
  payload?: Maybe<Scalars['String']>;
  pkItems?: Maybe<Scalars['String']>;
  resultKey?: Maybe<Scalars['String']>;
  sourceSystemId?: Maybe<Scalars['Int']>;
  sql?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedUserId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};

export type SourceInterfaceMinAggregate = {
  __typename?: 'SourceInterfaceMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  createdUserId?: Maybe<Scalars['Int']>;
  deleted?: Maybe<Scalars['Boolean']>;
  header?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  interfaceName?: Maybe<Scalars['String']>;
  memo?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  optionData?: Maybe<Scalars['String']>;
  payload?: Maybe<Scalars['String']>;
  pkItems?: Maybe<Scalars['String']>;
  resultKey?: Maybe<Scalars['String']>;
  sourceSystemId?: Maybe<Scalars['Int']>;
  sql?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedUserId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};

export type SourceInterfaceSort = {
  direction: SortDirection;
  field: SourceInterfaceSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum SourceInterfaceSortFields {
  CreatedAt = 'createdAt',
  CreatedUserId = 'createdUserId',
  Deleted = 'deleted',
  Header = 'header',
  Id = 'id',
  InterfaceName = 'interfaceName',
  Memo = 'memo',
  Method = 'method',
  OptionData = 'optionData',
  Payload = 'payload',
  PkItems = 'pkItems',
  ResultKey = 'resultKey',
  SourceSystemId = 'sourceSystemId',
  Sql = 'sql',
  UpdatedAt = 'updatedAt',
  UpdatedUserId = 'updatedUserId',
  Uri = 'uri'
}

export type SourceInterfaceSumAggregate = {
  __typename?: 'SourceInterfaceSumAggregate';
  createdUserId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  sourceSystemId?: Maybe<Scalars['Float']>;
  updatedUserId?: Maybe<Scalars['Float']>;
};

export type SourceSystem = AbstractBaseEntity & {
  __typename?: 'SourceSystem';
  /** 생성시각 */
  createdAt: Scalars['DateTime'];
  /** 생성자 */
  createdUserId: Scalars['Int'];
  /** 삭제여부 */
  deleted: Scalars['Boolean'];
  /** 삭제시각 */
  deletedAt?: Maybe<Scalars['DateTime']>;
  /** URL or IP or DOMAIN */
  host: Scalars['String'];
  /** 아이디 */
  id: Scalars['ID'];
  /** 비고 */
  memo?: Maybe<Scalars['String']>;
  /** port */
  port: Scalars['String'];
  /** source_system 명 */
  systemName: Scalars['String'];
  /** source 연동 타입, api, db, socket */
  type: SystemType;
  /** 수정시각 */
  updatedAt: Scalars['DateTime'];
  /** 수정자 */
  updatedUserId: Scalars['Int'];
};

export type SourceSystemAggregateGroupBy = {
  __typename?: 'SourceSystemAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  createdUserId?: Maybe<Scalars['Int']>;
  deleted?: Maybe<Scalars['Boolean']>;
  host?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  memo?: Maybe<Scalars['String']>;
  port?: Maybe<Scalars['String']>;
  systemName?: Maybe<Scalars['String']>;
  type?: Maybe<SystemType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedUserId?: Maybe<Scalars['Int']>;
};

export type SourceSystemAvgAggregate = {
  __typename?: 'SourceSystemAvgAggregate';
  createdUserId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updatedUserId?: Maybe<Scalars['Float']>;
};

export type SourceSystemConnection = {
  __typename?: 'SourceSystemConnection';
  /** Array of nodes. */
  nodes: Array<SourceSystem>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type SourceSystemCountAggregate = {
  __typename?: 'SourceSystemCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  createdUserId?: Maybe<Scalars['Int']>;
  deleted?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  memo?: Maybe<Scalars['Int']>;
  port?: Maybe<Scalars['Int']>;
  systemName?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  updatedUserId?: Maybe<Scalars['Int']>;
};

export type SourceSystemDeleteFilter = {
  and?: InputMaybe<Array<SourceSystemDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdUserId?: InputMaybe<IntFieldComparison>;
  deleted?: InputMaybe<SourceSystemDeletedFilterComparison>;
  host?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  memo?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<SourceSystemDeleteFilter>>;
  port?: InputMaybe<StringFieldComparison>;
  systemName?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<SystemTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedUserId?: InputMaybe<IntFieldComparison>;
};

export type SourceSystemDeleteResponse = {
  __typename?: 'SourceSystemDeleteResponse';
  /** 생성시각 */
  createdAt?: Maybe<Scalars['DateTime']>;
  /** 생성자 */
  createdUserId?: Maybe<Scalars['Int']>;
  /** 삭제여부 */
  deleted?: Maybe<Scalars['Boolean']>;
  /** 삭제시각 */
  deletedAt?: Maybe<Scalars['DateTime']>;
  /** URL or IP or DOMAIN */
  host?: Maybe<Scalars['String']>;
  /** 아이디 */
  id?: Maybe<Scalars['ID']>;
  /** 비고 */
  memo?: Maybe<Scalars['String']>;
  /** port */
  port?: Maybe<Scalars['String']>;
  /** source_system 명 */
  systemName?: Maybe<Scalars['String']>;
  /** source 연동 타입, api, db, socket */
  type?: Maybe<SystemType>;
  /** 수정시각 */
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** 수정자 */
  updatedUserId?: Maybe<Scalars['Int']>;
};

export type SourceSystemDeletedFilterComparison = {
  in?: InputMaybe<Array<Scalars['Boolean']>>;
};

export type SourceSystemFilter = {
  and?: InputMaybe<Array<SourceSystemFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdUserId?: InputMaybe<IntFieldComparison>;
  deleted?: InputMaybe<SourceSystemDeletedFilterComparison>;
  host?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  memo?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<SourceSystemFilter>>;
  port?: InputMaybe<StringFieldComparison>;
  systemName?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<SystemTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedUserId?: InputMaybe<IntFieldComparison>;
};

export type SourceSystemInput = {
  /** URL or IP or DOMAIN */
  host: Scalars['String'];
  /** 비고 */
  memo?: InputMaybe<Scalars['String']>;
  /** port */
  port: Scalars['String'];
  /** source_system 명 */
  systemName: Scalars['String'];
  /** source 연동 타입, api, db, socket */
  type: SystemType;
};

export type SourceSystemMaxAggregate = {
  __typename?: 'SourceSystemMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  createdUserId?: Maybe<Scalars['Int']>;
  deleted?: Maybe<Scalars['Boolean']>;
  host?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  memo?: Maybe<Scalars['String']>;
  port?: Maybe<Scalars['String']>;
  systemName?: Maybe<Scalars['String']>;
  type?: Maybe<SystemType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedUserId?: Maybe<Scalars['Int']>;
};

export type SourceSystemMinAggregate = {
  __typename?: 'SourceSystemMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  createdUserId?: Maybe<Scalars['Int']>;
  deleted?: Maybe<Scalars['Boolean']>;
  host?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  memo?: Maybe<Scalars['String']>;
  port?: Maybe<Scalars['String']>;
  systemName?: Maybe<Scalars['String']>;
  type?: Maybe<SystemType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedUserId?: Maybe<Scalars['Int']>;
};

export type SourceSystemSort = {
  direction: SortDirection;
  field: SourceSystemSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum SourceSystemSortFields {
  CreatedAt = 'createdAt',
  CreatedUserId = 'createdUserId',
  Deleted = 'deleted',
  Host = 'host',
  Id = 'id',
  Memo = 'memo',
  Port = 'port',
  SystemName = 'systemName',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  UpdatedUserId = 'updatedUserId'
}

export type SourceSystemSumAggregate = {
  __typename?: 'SourceSystemSumAggregate';
  createdUserId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updatedUserId?: Maybe<Scalars['Float']>;
};

export type StringFieldComparison = {
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  iLike?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
  notILike?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  notLike?: InputMaybe<Scalars['String']>;
};

/** 시스템 연동 타입 */
export enum SystemType {
  /** api 방식 */
  Api = 'API',
  /** db 방식 */
  Db = 'DB',
  /** socket 방식 */
  Socket = 'SOCKET'
}

export type SystemTypeFilterComparison = {
  eq?: InputMaybe<SystemType>;
  gt?: InputMaybe<SystemType>;
  gte?: InputMaybe<SystemType>;
  iLike?: InputMaybe<SystemType>;
  in?: InputMaybe<Array<SystemType>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<SystemType>;
  lt?: InputMaybe<SystemType>;
  lte?: InputMaybe<SystemType>;
  neq?: InputMaybe<SystemType>;
  notILike?: InputMaybe<SystemType>;
  notIn?: InputMaybe<Array<SystemType>>;
  notLike?: InputMaybe<SystemType>;
};

export type UpdateDestinationInterfaceInput = {
  /** destination_system 식별자 */
  destinationSystemId?: InputMaybe<Scalars['Int']>;
  /** http header 정보 */
  header?: InputMaybe<Scalars['String']>;
  /** destination interface 명 */
  interfaceName?: InputMaybe<Scalars['String']>;
  /** 메모 */
  memo?: InputMaybe<Scalars['String']>;
  /** http method 정보 */
  method?: InputMaybe<Scalars['String']>;
  /** parameter 혹은 parsing 을 위해 사용할 옵셔널한 데이터, JSON 형태, ex) {boardId:2423746910} */
  optionData?: InputMaybe<Scalars['String']>;
  /** 데이터 전송 정보 */
  payload?: InputMaybe<Scalars['String']>;
  /** Exmporter Client 의 response 에 대한 실 데이터 매핑키, null 일때는 원본 그대로 획득, ex) data.boards[0].items */
  resultKey?: InputMaybe<Scalars['String']>;
  /** destination type db 경우 사용 쿼리 */
  sql?: InputMaybe<Scalars['String']>;
  /** uri 주소 */
  uri?: InputMaybe<Scalars['String']>;
};

export type UpdateDestinationMapperInput = {
  /** destination_interface 식별자 */
  destinationInterfaceId?: InputMaybe<Scalars['Int']>;
  /** destination mapper 명 */
  mapperName?: InputMaybe<Scalars['String']>;
  /** 비고 */
  memo?: InputMaybe<Scalars['String']>;
  /** 순서 */
  sort?: InputMaybe<Scalars['Int']>;
  /** source_interface 식별자 */
  sourceInterfaceId?: InputMaybe<Scalars['Int']>;
};

export type UpdateDestinationSystemInput = {
  /** destination host */
  host?: InputMaybe<Scalars['String']>;
  /** 비고 */
  memo?: InputMaybe<Scalars['String']>;
  /** destination port */
  port?: InputMaybe<Scalars['String']>;
  /** destination_system 명 */
  systemName?: InputMaybe<Scalars['String']>;
  /** destination 연동 타입, api, db, socket */
  type?: InputMaybe<SystemType>;
};

export type UpdateOneDestinationInterfaceInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateDestinationInterfaceInput;
};

export type UpdateOneDestinationMapperInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateDestinationMapperInput;
};

export type UpdateOneDestinationSystemInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateDestinationSystemInput;
};

export type UpdateOneScheduleTaskInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateScheduleTaskInput;
};

export type UpdateOneSourceInterfaceInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateSourceInterfaceInput;
};

export type UpdateOneSourceSystemInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateSourceSystemInput;
};

export type UpdateOneUserInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateUserInput;
};

export type UpdateScheduleTaskInput = {
  /** 배치주기, CRON (* * * * * *) 형태 사용, use year */
  batchCronSchedule?: InputMaybe<Scalars['String']>;
  /** Request Payload, 작업시 필요한 데이터 */
  requestPayload?: InputMaybe<Scalars['String']>;
  /** source_interface 참조키 */
  sourceInterfaceId?: InputMaybe<Scalars['Int']>;
  /** 작업명 */
  taskName?: InputMaybe<Scalars['String']>;
};

export type UpdateSourceInterfaceInput = {
  /** http header 정보 */
  header?: InputMaybe<Scalars['String']>;
  /** source_interface 명 */
  interfaceName?: InputMaybe<Scalars['String']>;
  /** 비고 */
  memo?: InputMaybe<Scalars['String']>;
  /** http method 정보 */
  method?: InputMaybe<Scalars['String']>;
  /** payload 혹은 header 의 customizing 을 위한 옵셔녈 데이터, JSON */
  optionData?: InputMaybe<Scalars['String']>;
  /** http 데이터 전송 정보 */
  payload?: InputMaybe<Scalars['String']>;
  /** dynamoDB 의 pk 에 사용할 컬럼의 키워드 리스트. 입력순으로 우선순위를 갖는다. 구분자는 콤마(,) */
  pkItems?: InputMaybe<Scalars['String']>;
  /** importer 의 response 에 대한 실사용 데이터 매핑키. dictionary 에 대한 nested depth Key 값임. ex) data.boards[0].items */
  resultKey?: InputMaybe<Scalars['String']>;
  /** source_system 식별자 */
  sourceSystemId?: InputMaybe<Scalars['Int']>;
  /** source type db 경우 쿼리 */
  sql?: InputMaybe<Scalars['String']>;
  /** uri 주소 */
  uri?: InputMaybe<Scalars['String']>;
};

export type UpdateSourceSystemInput = {
  /** URL or IP or DOMAIN */
  host?: InputMaybe<Scalars['String']>;
  /** 비고 */
  memo?: InputMaybe<Scalars['String']>;
  /** port */
  port?: InputMaybe<Scalars['String']>;
  /** source_system 명 */
  systemName?: InputMaybe<Scalars['String']>;
  /** source 연동 타입, api, db, socket */
  type?: InputMaybe<SystemType>;
};

export type UpdateUserInput = {
  /** 이메일 */
  email?: InputMaybe<Scalars['String']>;
  /** 이름 */
  name?: InputMaybe<Scalars['String']>;
  /** 권한 */
  role?: InputMaybe<Role>;
};

export type User = AbstractBaseEntity & {
  __typename?: 'User';
  /** 생성시각 */
  createdAt: Scalars['DateTime'];
  /** 생성자 */
  createdUserId: Scalars['Int'];
  /** 삭제여부 */
  deleted: Scalars['Boolean'];
  /** 삭제시각 */
  deletedAt?: Maybe<Scalars['DateTime']>;
  /** 이메일 */
  email: Scalars['String'];
  /** 아이디 */
  id: Scalars['ID'];
  /** 이름 */
  name: Scalars['String'];
  /** 권한 */
  role: Role;
  /** 수정시각 */
  updatedAt: Scalars['DateTime'];
  /** 수정자 */
  updatedUserId: Scalars['Int'];
};

export type UserAggregateFilter = {
  and?: InputMaybe<Array<UserAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdUserId?: InputMaybe<IntFieldComparison>;
  deleted?: InputMaybe<UserDeletedFilterComparison>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserAggregateFilter>>;
  role?: InputMaybe<RoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedUserId?: InputMaybe<IntFieldComparison>;
};

export type UserAggregateGroupBy = {
  __typename?: 'UserAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  createdUserId?: Maybe<Scalars['Int']>;
  deleted?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedUserId?: Maybe<Scalars['Int']>;
};

export type UserAggregateResponse = {
  __typename?: 'UserAggregateResponse';
  avg?: Maybe<UserAvgAggregate>;
  count?: Maybe<UserCountAggregate>;
  groupBy?: Maybe<UserAggregateGroupBy>;
  max?: Maybe<UserMaxAggregate>;
  min?: Maybe<UserMinAggregate>;
  sum?: Maybe<UserSumAggregate>;
};

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate';
  createdUserId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updatedUserId?: Maybe<Scalars['Float']>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  /** Array of nodes. */
  nodes: Array<User>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  createdUserId?: Maybe<Scalars['Int']>;
  deleted?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  updatedUserId?: Maybe<Scalars['Int']>;
};

export type UserDeleteFilter = {
  and?: InputMaybe<Array<UserDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdUserId?: InputMaybe<IntFieldComparison>;
  deleted?: InputMaybe<UserDeletedFilterComparison>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserDeleteFilter>>;
  role?: InputMaybe<RoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedUserId?: InputMaybe<IntFieldComparison>;
};

export type UserDeleteResponse = {
  __typename?: 'UserDeleteResponse';
  /** 생성시각 */
  createdAt?: Maybe<Scalars['DateTime']>;
  /** 생성자 */
  createdUserId?: Maybe<Scalars['Int']>;
  /** 삭제여부 */
  deleted?: Maybe<Scalars['Boolean']>;
  /** 삭제시각 */
  deletedAt?: Maybe<Scalars['DateTime']>;
  /** 이메일 */
  email?: Maybe<Scalars['String']>;
  /** 아이디 */
  id?: Maybe<Scalars['ID']>;
  /** 이름 */
  name?: Maybe<Scalars['String']>;
  /** 권한 */
  role?: Maybe<Role>;
  /** 수정시각 */
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** 수정자 */
  updatedUserId?: Maybe<Scalars['Int']>;
};

export type UserDeletedFilterComparison = {
  in?: InputMaybe<Array<Scalars['Boolean']>>;
};

export type UserFilter = {
  and?: InputMaybe<Array<UserFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdUserId?: InputMaybe<IntFieldComparison>;
  deleted?: InputMaybe<UserDeletedFilterComparison>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserFilter>>;
  role?: InputMaybe<RoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedUserId?: InputMaybe<IntFieldComparison>;
};

export type UserInput = {
  /** 이메일 */
  email: Scalars['String'];
  /** 이름 */
  name: Scalars['String'];
  /** 권한 */
  role?: InputMaybe<Role>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  createdUserId?: Maybe<Scalars['Int']>;
  deleted?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedUserId?: Maybe<Scalars['Int']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  createdUserId?: Maybe<Scalars['Int']>;
  deleted?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedUserId?: Maybe<Scalars['Int']>;
};

export type UserSort = {
  direction: SortDirection;
  field: UserSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum UserSortFields {
  CreatedAt = 'createdAt',
  CreatedUserId = 'createdUserId',
  Deleted = 'deleted',
  Email = 'email',
  Id = 'id',
  Name = 'name',
  Role = 'role',
  UpdatedAt = 'updatedAt',
  UpdatedUserId = 'updatedUserId'
}

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  createdUserId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updatedUserId?: Maybe<Scalars['Float']>;
};

export type LoginMutationVariables = Exact<{
  payload: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginToken', token: string } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', email: string, role: Role, name: string, id: number, deleted: boolean, deletedAt?: Date | null, createdAt: Date, createdUserId: number, updatedAt: Date, updatedUserId: number } };

type BaseEntityFragment_DestinationInterface_Fragment = { __typename?: 'DestinationInterface', id: number, deleted: boolean, deletedAt?: Date | null, createdAt: Date, createdUserId: number, updatedAt: Date, updatedUserId: number };

type BaseEntityFragment_DestinationMapper_Fragment = { __typename?: 'DestinationMapper', id: number, deleted: boolean, deletedAt?: Date | null, createdAt: Date, createdUserId: number, updatedAt: Date, updatedUserId: number };

type BaseEntityFragment_DestinationSystem_Fragment = { __typename?: 'DestinationSystem', id: number, deleted: boolean, deletedAt?: Date | null, createdAt: Date, createdUserId: number, updatedAt: Date, updatedUserId: number };

type BaseEntityFragment_ScheduleTask_Fragment = { __typename?: 'ScheduleTask', id: number, deleted: boolean, deletedAt?: Date | null, createdAt: Date, createdUserId: number, updatedAt: Date, updatedUserId: number };

type BaseEntityFragment_SourceInterface_Fragment = { __typename?: 'SourceInterface', id: number, deleted: boolean, deletedAt?: Date | null, createdAt: Date, createdUserId: number, updatedAt: Date, updatedUserId: number };

type BaseEntityFragment_SourceSystem_Fragment = { __typename?: 'SourceSystem', id: number, deleted: boolean, deletedAt?: Date | null, createdAt: Date, createdUserId: number, updatedAt: Date, updatedUserId: number };

type BaseEntityFragment_User_Fragment = { __typename?: 'User', id: number, deleted: boolean, deletedAt?: Date | null, createdAt: Date, createdUserId: number, updatedAt: Date, updatedUserId: number };

export type BaseEntityFragmentFragment = BaseEntityFragment_DestinationInterface_Fragment | BaseEntityFragment_DestinationMapper_Fragment | BaseEntityFragment_DestinationSystem_Fragment | BaseEntityFragment_ScheduleTask_Fragment | BaseEntityFragment_SourceInterface_Fragment | BaseEntityFragment_SourceSystem_Fragment | BaseEntityFragment_User_Fragment;

export type OffsetPageInfoFragmentFragment = { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null };

export type SourceSystemFragmentFragment = { __typename?: 'SourceSystem', systemName: string, type: SystemType, host: string, port: string, memo?: string | null, id: number, deleted: boolean, deletedAt?: Date | null, createdAt: Date, createdUserId: number, updatedAt: Date, updatedUserId: number };

export type SourceInterfaceFragmentFragment = { __typename?: 'SourceInterface', sourceSystemId: number, interfaceName: string, uri?: string | null, method?: string | null, header?: string | null, payload?: string | null, pkItems?: string | null, resultKey?: string | null, optionData?: string | null, sql?: string | null, memo?: string | null, id: number, deleted: boolean, deletedAt?: Date | null, createdAt: Date, createdUserId: number, updatedAt: Date, updatedUserId: number, sourceSystem: { __typename?: 'SourceSystem', id: number, deleted: boolean, deletedAt?: Date | null, createdAt: Date, createdUserId: number, updatedAt: Date, updatedUserId: number, systemName: string, type: SystemType, host: string, port: string, memo?: string | null } };

export type DestinationInterfaceFragmentFragment = { __typename?: 'DestinationInterface', destinationSystemId: number, interfaceName: string, uri?: string | null, method?: string | null, header?: string | null, payload?: string | null, resultKey?: string | null, optionData?: string | null, sql?: string | null, memo?: string | null, id: number, deleted: boolean, deletedAt?: Date | null, createdAt: Date, createdUserId: number, updatedAt: Date, updatedUserId: number };

export type CreateDestinationInterfaceMutationVariables = Exact<{
  payload: CreateOneDestinationInterfaceInput;
}>;


export type CreateDestinationInterfaceMutation = { __typename?: 'Mutation', createOneDestinationInterface: { __typename?: 'DestinationInterface', destinationSystemId: number, interfaceName: string, uri?: string | null, method?: string | null, header?: string | null, payload?: string | null, resultKey?: string | null, optionData?: string | null, sql?: string | null, memo?: string | null, id: number, deleted: boolean, deletedAt?: Date | null, createdAt: Date, createdUserId: number, updatedAt: Date, updatedUserId: number } };

export type UpdateDestinationInterfaceMutationVariables = Exact<{
  payload: UpdateOneDestinationInterfaceInput;
}>;


export type UpdateDestinationInterfaceMutation = { __typename?: 'Mutation', updateOneDestinationInterface: { __typename?: 'DestinationInterface', destinationSystemId: number, interfaceName: string, uri?: string | null, method?: string | null, header?: string | null, payload?: string | null, resultKey?: string | null, optionData?: string | null, sql?: string | null, memo?: string | null, id: number, deleted: boolean, deletedAt?: Date | null, createdAt: Date, createdUserId: number, updatedAt: Date, updatedUserId: number } };

export type DestinationInterfaceListQueryVariables = Exact<{
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<DestinationInterfaceSort> | DestinationInterfaceSort>;
}>;


export type DestinationInterfaceListQuery = { __typename?: 'Query', destinationInterfaces: { __typename?: 'DestinationInterfaceConnection', totalCount: number, pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'DestinationInterface', destinationSystemId: number, interfaceName: string, uri?: string | null, method?: string | null, header?: string | null, payload?: string | null, resultKey?: string | null, optionData?: string | null, sql?: string | null, memo?: string | null, id: number, deleted: boolean, deletedAt?: Date | null, createdAt: Date, createdUserId: number, updatedAt: Date, updatedUserId: number }> } };

export type DestinationInterfaceQueryVariables = Exact<{
  payload: Scalars['ID'];
}>;


export type DestinationInterfaceQuery = { __typename?: 'Query', destinationInterface?: { __typename?: 'DestinationInterface', destinationSystemId: number, interfaceName: string, uri?: string | null, method?: string | null, header?: string | null, payload?: string | null, resultKey?: string | null, optionData?: string | null, sql?: string | null, memo?: string | null, id: number, deleted: boolean, deletedAt?: Date | null, createdAt: Date, createdUserId: number, updatedAt: Date, updatedUserId: number } | null };

export type CreateDestinationMutationVariables = Exact<{
  payload: CreateOneDestinationSystemInput;
}>;


export type CreateDestinationMutation = { __typename?: 'Mutation', createOneDestinationSystem: { __typename?: 'DestinationSystem', systemName: string, type: SystemType, host: string, port: string, memo?: string | null, id: number, deleted: boolean, deletedAt?: Date | null, createdAt: Date, createdUserId: number, updatedAt: Date, updatedUserId: number } };

export type UpdateDestinationMutationVariables = Exact<{
  payload: UpdateOneDestinationSystemInput;
}>;


export type UpdateDestinationMutation = { __typename?: 'Mutation', updateOneDestinationSystem: { __typename?: 'DestinationSystem', systemName: string, type: SystemType, host: string, port: string, memo?: string | null, id: number, deleted: boolean, deletedAt?: Date | null, createdAt: Date, createdUserId: number, updatedAt: Date, updatedUserId: number } };

export type DestinationListQueryVariables = Exact<{
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<DestinationSystemSort> | DestinationSystemSort>;
  filter: DestinationSystemFilter;
}>;


export type DestinationListQuery = { __typename?: 'Query', destinationSystems: { __typename?: 'DestinationSystemConnection', totalCount: number, pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'DestinationSystem', systemName: string, type: SystemType, host: string, port: string, memo?: string | null, id: number, deleted: boolean, deletedAt?: Date | null, createdAt: Date, createdUserId: number, updatedAt: Date, updatedUserId: number }> } };

export type DestinationQueryVariables = Exact<{
  payload: Scalars['ID'];
}>;


export type DestinationQuery = { __typename?: 'Query', destinationSystem?: { __typename?: 'DestinationSystem', systemName: string, type: SystemType, host: string, port: string, memo?: string | null, id: number, deleted: boolean, deletedAt?: Date | null, createdAt: Date, createdUserId: number, updatedAt: Date, updatedUserId: number } | null };

export type CreateSourceInterfaceMutationVariables = Exact<{
  payload: CreateOneSourceInterfaceInput;
}>;


export type CreateSourceInterfaceMutation = { __typename?: 'Mutation', createOneSourceInterface: { __typename?: 'SourceInterface', sourceSystemId: number, interfaceName: string, uri?: string | null, method?: string | null, header?: string | null, payload?: string | null, pkItems?: string | null, resultKey?: string | null, optionData?: string | null, sql?: string | null, memo?: string | null, id: number, deleted: boolean, deletedAt?: Date | null, createdAt: Date, createdUserId: number, updatedAt: Date, updatedUserId: number, sourceSystem: { __typename?: 'SourceSystem', id: number, deleted: boolean, deletedAt?: Date | null, createdAt: Date, createdUserId: number, updatedAt: Date, updatedUserId: number, systemName: string, type: SystemType, host: string, port: string, memo?: string | null } } };

export type UpdateSourceInterfaceMutationVariables = Exact<{
  payload: UpdateOneSourceInterfaceInput;
}>;


export type UpdateSourceInterfaceMutation = { __typename?: 'Mutation', updateOneSourceInterface: { __typename?: 'SourceInterface', sourceSystemId: number, interfaceName: string, uri?: string | null, method?: string | null, header?: string | null, payload?: string | null, pkItems?: string | null, resultKey?: string | null, optionData?: string | null, sql?: string | null, memo?: string | null, id: number, deleted: boolean, deletedAt?: Date | null, createdAt: Date, createdUserId: number, updatedAt: Date, updatedUserId: number, sourceSystem: { __typename?: 'SourceSystem', id: number, deleted: boolean, deletedAt?: Date | null, createdAt: Date, createdUserId: number, updatedAt: Date, updatedUserId: number, systemName: string, type: SystemType, host: string, port: string, memo?: string | null } } };

export type SourceInterfaceListQueryVariables = Exact<{
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<SourceInterfaceSort> | SourceInterfaceSort>;
}>;


export type SourceInterfaceListQuery = { __typename?: 'Query', sourceInterfaces: { __typename?: 'SourceInterfaceConnection', totalCount: number, pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'SourceInterface', sourceSystemId: number, interfaceName: string, uri?: string | null, method?: string | null, header?: string | null, payload?: string | null, pkItems?: string | null, resultKey?: string | null, optionData?: string | null, sql?: string | null, memo?: string | null, id: number, deleted: boolean, deletedAt?: Date | null, createdAt: Date, createdUserId: number, updatedAt: Date, updatedUserId: number, sourceSystem: { __typename?: 'SourceSystem', id: number, deleted: boolean, deletedAt?: Date | null, createdAt: Date, createdUserId: number, updatedAt: Date, updatedUserId: number, systemName: string, type: SystemType, host: string, port: string, memo?: string | null } }> } };

export type SourceInterfaceQueryVariables = Exact<{
  payload: Scalars['ID'];
}>;


export type SourceInterfaceQuery = { __typename?: 'Query', sourceInterface?: { __typename?: 'SourceInterface', sourceSystemId: number, interfaceName: string, uri?: string | null, method?: string | null, header?: string | null, payload?: string | null, pkItems?: string | null, resultKey?: string | null, optionData?: string | null, sql?: string | null, memo?: string | null, id: number, deleted: boolean, deletedAt?: Date | null, createdAt: Date, createdUserId: number, updatedAt: Date, updatedUserId: number, sourceSystem: { __typename?: 'SourceSystem', id: number, deleted: boolean, deletedAt?: Date | null, createdAt: Date, createdUserId: number, updatedAt: Date, updatedUserId: number, systemName: string, type: SystemType, host: string, port: string, memo?: string | null } } | null };

export type CreateSourceMutationVariables = Exact<{
  payload: CreateOneSourceSystemInput;
}>;


export type CreateSourceMutation = { __typename?: 'Mutation', createOneSourceSystem: { __typename?: 'SourceSystem', systemName: string, type: SystemType, host: string, port: string, memo?: string | null, id: number, deleted: boolean, deletedAt?: Date | null, createdAt: Date, createdUserId: number, updatedAt: Date, updatedUserId: number } };

export type UpdateSourceMutationVariables = Exact<{
  payload: UpdateOneSourceSystemInput;
}>;


export type UpdateSourceMutation = { __typename?: 'Mutation', updateOneSourceSystem: { __typename?: 'SourceSystem', systemName: string, type: SystemType, host: string, port: string, memo?: string | null, id: number, deleted: boolean, deletedAt?: Date | null, createdAt: Date, createdUserId: number, updatedAt: Date, updatedUserId: number } };

export type SourceListQueryVariables = Exact<{
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<SourceSystemSort> | SourceSystemSort>;
  filter: SourceSystemFilter;
}>;


export type SourceListQuery = { __typename?: 'Query', sourceSystems: { __typename?: 'SourceSystemConnection', totalCount: number, pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'SourceSystem', systemName: string, type: SystemType, host: string, port: string, memo?: string | null, id: number, deleted: boolean, deletedAt?: Date | null, createdAt: Date, createdUserId: number, updatedAt: Date, updatedUserId: number }> } };

export type SourceQueryVariables = Exact<{
  payload: Scalars['ID'];
}>;


export type SourceQuery = { __typename?: 'Query', sourceSystem?: { __typename?: 'SourceSystem', systemName: string, type: SystemType, host: string, port: string, memo?: string | null, id: number, deleted: boolean, deletedAt?: Date | null, createdAt: Date, createdUserId: number, updatedAt: Date, updatedUserId: number } | null };

export const OffsetPageInfoFragmentFragmentDoc = `
    fragment OffsetPageInfoFragment on OffsetPageInfo {
  hasNextPage
  hasPreviousPage
}
    `;
export const BaseEntityFragmentFragmentDoc = `
    fragment BaseEntityFragment on AbstractBaseEntity {
  id
  deleted
  deletedAt
  createdAt
  createdUserId
  updatedAt
  updatedUserId
}
    `;
export const SourceSystemFragmentFragmentDoc = `
    fragment SourceSystemFragment on SourceSystem {
  ...BaseEntityFragment
  systemName
  type
  host
  port
  memo
}
    ${BaseEntityFragmentFragmentDoc}`;
export const SourceInterfaceFragmentFragmentDoc = `
    fragment SourceInterfaceFragment on SourceInterface {
  ...BaseEntityFragment
  sourceSystemId
  interfaceName
  uri
  method
  header
  payload
  pkItems
  resultKey
  optionData
  sql
  memo
  sourceSystem {
    id
    deleted
    deletedAt
    createdAt
    createdUserId
    updatedAt
    updatedUserId
    systemName
    type
    host
    port
    memo
  }
}
    ${BaseEntityFragmentFragmentDoc}`;
export const DestinationInterfaceFragmentFragmentDoc = `
    fragment DestinationInterfaceFragment on DestinationInterface {
  ...BaseEntityFragment
  destinationSystemId
  interfaceName
  uri
  method
  header
  payload
  resultKey
  optionData
  sql
  memo
}
    ${BaseEntityFragmentFragmentDoc}`;
export const LoginDocument = `
    mutation Login($payload: LoginInput!) {
  login(login: $payload) {
    token
  }
}
    `;
export const useLoginMutation = <
      TError extends unknown,
      TContext extends unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<LoginMutation, TError, LoginMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<LoginMutation, TError, LoginMutationVariables, TContext>(
      ['Login'],
      (variables?: LoginMutationVariables) => fetcher<LoginMutation, LoginMutationVariables>(client, LoginDocument, variables, headers)(),
      options
    );
export const MeDocument = `
    query Me {
  me {
    ...BaseEntityFragment
    email
    role
    name
  }
}
    ${BaseEntityFragmentFragmentDoc}`;
export const useMeQuery = <
      TData extends MeQuery,
      TError extends unknown
    >(
      client: GraphQLClient,
      variables?: MeQueryVariables,
      options?: UseQueryOptions<MeQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<MeQuery, TError, TData>(
      variables === undefined ? ['Me'] : ['Me', variables],
      fetcher<MeQuery, MeQueryVariables>(client, MeDocument, variables, headers),
      options
    );
export const CreateDestinationInterfaceDocument = `
    mutation CreateDestinationInterface($payload: CreateOneDestinationInterfaceInput!) {
  createOneDestinationInterface(input: $payload) {
    ...DestinationInterfaceFragment
  }
}
    ${DestinationInterfaceFragmentFragmentDoc}`;
export const useCreateDestinationInterfaceMutation = <
      TError extends unknown,
      TContext extends unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateDestinationInterfaceMutation, TError, CreateDestinationInterfaceMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateDestinationInterfaceMutation, TError, CreateDestinationInterfaceMutationVariables, TContext>(
      ['CreateDestinationInterface'],
      (variables?: CreateDestinationInterfaceMutationVariables) => fetcher<CreateDestinationInterfaceMutation, CreateDestinationInterfaceMutationVariables>(client, CreateDestinationInterfaceDocument, variables, headers)(),
      options
    );
export const UpdateDestinationInterfaceDocument = `
    mutation UpdateDestinationInterface($payload: UpdateOneDestinationInterfaceInput!) {
  updateOneDestinationInterface(input: $payload) {
    ...DestinationInterfaceFragment
  }
}
    ${DestinationInterfaceFragmentFragmentDoc}`;
export const useUpdateDestinationInterfaceMutation = <
      TError extends unknown,
      TContext extends unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UpdateDestinationInterfaceMutation, TError, UpdateDestinationInterfaceMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UpdateDestinationInterfaceMutation, TError, UpdateDestinationInterfaceMutationVariables, TContext>(
      ['UpdateDestinationInterface'],
      (variables?: UpdateDestinationInterfaceMutationVariables) => fetcher<UpdateDestinationInterfaceMutation, UpdateDestinationInterfaceMutationVariables>(client, UpdateDestinationInterfaceDocument, variables, headers)(),
      options
    );
export const DestinationInterfaceListDocument = `
    query DestinationInterfaceList($paging: OffsetPaging, $sorting: [DestinationInterfaceSort!]) {
  destinationInterfaces(
    filter: {deleted: {in: [false]}}
    paging: $paging
    sorting: $sorting
  ) {
    pageInfo {
      ...OffsetPageInfoFragment
    }
    nodes {
      ...DestinationInterfaceFragment
    }
    totalCount
  }
}
    ${OffsetPageInfoFragmentFragmentDoc}
${DestinationInterfaceFragmentFragmentDoc}`;
export const useDestinationInterfaceListQuery = <
      TData extends DestinationInterfaceListQuery,
      TError extends unknown
    >(
      client: GraphQLClient,
      variables?: DestinationInterfaceListQueryVariables,
      options?: UseQueryOptions<DestinationInterfaceListQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<DestinationInterfaceListQuery, TError, TData>(
      variables === undefined ? ['DestinationInterfaceList'] : ['DestinationInterfaceList', variables],
      fetcher<DestinationInterfaceListQuery, DestinationInterfaceListQueryVariables>(client, DestinationInterfaceListDocument, variables, headers),
      options
    );
export const DestinationInterfaceDocument = `
    query DestinationInterface($payload: ID!) {
  destinationInterface(id: $payload) {
    ...DestinationInterfaceFragment
  }
}
    ${DestinationInterfaceFragmentFragmentDoc}`;
export const useDestinationInterfaceQuery = <
      TData extends DestinationInterfaceQuery,
      TError extends unknown
    >(
      client: GraphQLClient,
      variables: DestinationInterfaceQueryVariables,
      options?: UseQueryOptions<DestinationInterfaceQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<DestinationInterfaceQuery, TError, TData>(
      ['DestinationInterface', variables],
      fetcher<DestinationInterfaceQuery, DestinationInterfaceQueryVariables>(client, DestinationInterfaceDocument, variables, headers),
      options
    );
export const CreateDestinationDocument = `
    mutation CreateDestination($payload: CreateOneDestinationSystemInput!) {
  createOneDestinationSystem(input: $payload) {
    ...BaseEntityFragment
    systemName
    type
    host
    port
    memo
  }
}
    ${BaseEntityFragmentFragmentDoc}`;
export const useCreateDestinationMutation = <
      TError extends unknown,
      TContext extends unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateDestinationMutation, TError, CreateDestinationMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateDestinationMutation, TError, CreateDestinationMutationVariables, TContext>(
      ['CreateDestination'],
      (variables?: CreateDestinationMutationVariables) => fetcher<CreateDestinationMutation, CreateDestinationMutationVariables>(client, CreateDestinationDocument, variables, headers)(),
      options
    );
export const UpdateDestinationDocument = `
    mutation UpdateDestination($payload: UpdateOneDestinationSystemInput!) {
  updateOneDestinationSystem(input: $payload) {
    ...BaseEntityFragment
    systemName
    type
    host
    port
    memo
  }
}
    ${BaseEntityFragmentFragmentDoc}`;
export const useUpdateDestinationMutation = <
      TError extends unknown,
      TContext extends unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UpdateDestinationMutation, TError, UpdateDestinationMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UpdateDestinationMutation, TError, UpdateDestinationMutationVariables, TContext>(
      ['UpdateDestination'],
      (variables?: UpdateDestinationMutationVariables) => fetcher<UpdateDestinationMutation, UpdateDestinationMutationVariables>(client, UpdateDestinationDocument, variables, headers)(),
      options
    );
export const DestinationListDocument = `
    query DestinationList($paging: OffsetPaging, $sorting: [DestinationSystemSort!], $filter: DestinationSystemFilter!) {
  destinationSystems(
    filter: {and: [$filter, {deleted: {in: [false]}}]}
    paging: $paging
    sorting: $sorting
  ) {
    pageInfo {
      ...OffsetPageInfoFragment
    }
    nodes {
      ...BaseEntityFragment
      systemName
      type
      host
      port
      memo
    }
    totalCount
  }
}
    ${OffsetPageInfoFragmentFragmentDoc}
${BaseEntityFragmentFragmentDoc}`;
export const useDestinationListQuery = <
      TData extends DestinationListQuery,
      TError extends unknown
    >(
      client: GraphQLClient,
      variables: DestinationListQueryVariables,
      options?: UseQueryOptions<DestinationListQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<DestinationListQuery, TError, TData>(
      ['DestinationList', variables],
      fetcher<DestinationListQuery, DestinationListQueryVariables>(client, DestinationListDocument, variables, headers),
      options
    );
export const DestinationDocument = `
    query Destination($payload: ID!) {
  destinationSystem(id: $payload) {
    ...BaseEntityFragment
    systemName
    type
    host
    port
    memo
  }
}
    ${BaseEntityFragmentFragmentDoc}`;
export const useDestinationQuery = <
      TData extends DestinationQuery,
      TError extends unknown
    >(
      client: GraphQLClient,
      variables: DestinationQueryVariables,
      options?: UseQueryOptions<DestinationQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<DestinationQuery, TError, TData>(
      ['Destination', variables],
      fetcher<DestinationQuery, DestinationQueryVariables>(client, DestinationDocument, variables, headers),
      options
    );
export const CreateSourceInterfaceDocument = `
    mutation CreateSourceInterface($payload: CreateOneSourceInterfaceInput!) {
  createOneSourceInterface(input: $payload) {
    ...SourceInterfaceFragment
  }
}
    ${SourceInterfaceFragmentFragmentDoc}`;
export const useCreateSourceInterfaceMutation = <
      TError extends unknown,
      TContext extends unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateSourceInterfaceMutation, TError, CreateSourceInterfaceMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateSourceInterfaceMutation, TError, CreateSourceInterfaceMutationVariables, TContext>(
      ['CreateSourceInterface'],
      (variables?: CreateSourceInterfaceMutationVariables) => fetcher<CreateSourceInterfaceMutation, CreateSourceInterfaceMutationVariables>(client, CreateSourceInterfaceDocument, variables, headers)(),
      options
    );
export const UpdateSourceInterfaceDocument = `
    mutation UpdateSourceInterface($payload: UpdateOneSourceInterfaceInput!) {
  updateOneSourceInterface(input: $payload) {
    ...SourceInterfaceFragment
  }
}
    ${SourceInterfaceFragmentFragmentDoc}`;
export const useUpdateSourceInterfaceMutation = <
      TError extends unknown,
      TContext extends unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UpdateSourceInterfaceMutation, TError, UpdateSourceInterfaceMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UpdateSourceInterfaceMutation, TError, UpdateSourceInterfaceMutationVariables, TContext>(
      ['UpdateSourceInterface'],
      (variables?: UpdateSourceInterfaceMutationVariables) => fetcher<UpdateSourceInterfaceMutation, UpdateSourceInterfaceMutationVariables>(client, UpdateSourceInterfaceDocument, variables, headers)(),
      options
    );
export const SourceInterfaceListDocument = `
    query SourceInterfaceList($paging: OffsetPaging, $sorting: [SourceInterfaceSort!]) {
  sourceInterfaces(
    filter: {deleted: {in: [false]}}
    paging: $paging
    sorting: $sorting
  ) {
    pageInfo {
      ...OffsetPageInfoFragment
    }
    nodes {
      ...SourceInterfaceFragment
    }
    totalCount
  }
}
    ${OffsetPageInfoFragmentFragmentDoc}
${SourceInterfaceFragmentFragmentDoc}`;
export const useSourceInterfaceListQuery = <
      TData extends SourceInterfaceListQuery,
      TError extends unknown
    >(
      client: GraphQLClient,
      variables?: SourceInterfaceListQueryVariables,
      options?: UseQueryOptions<SourceInterfaceListQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<SourceInterfaceListQuery, TError, TData>(
      variables === undefined ? ['SourceInterfaceList'] : ['SourceInterfaceList', variables],
      fetcher<SourceInterfaceListQuery, SourceInterfaceListQueryVariables>(client, SourceInterfaceListDocument, variables, headers),
      options
    );
export const SourceInterfaceDocument = `
    query SourceInterface($payload: ID!) {
  sourceInterface(id: $payload) {
    ...SourceInterfaceFragment
  }
}
    ${SourceInterfaceFragmentFragmentDoc}`;
export const useSourceInterfaceQuery = <
      TData extends SourceInterfaceQuery,
      TError extends unknown
    >(
      client: GraphQLClient,
      variables: SourceInterfaceQueryVariables,
      options?: UseQueryOptions<SourceInterfaceQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<SourceInterfaceQuery, TError, TData>(
      ['SourceInterface', variables],
      fetcher<SourceInterfaceQuery, SourceInterfaceQueryVariables>(client, SourceInterfaceDocument, variables, headers),
      options
    );
export const CreateSourceDocument = `
    mutation CreateSource($payload: CreateOneSourceSystemInput!) {
  createOneSourceSystem(input: $payload) {
    ...SourceSystemFragment
  }
}
    ${SourceSystemFragmentFragmentDoc}`;
export const useCreateSourceMutation = <
      TError extends unknown,
      TContext extends unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateSourceMutation, TError, CreateSourceMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateSourceMutation, TError, CreateSourceMutationVariables, TContext>(
      ['CreateSource'],
      (variables?: CreateSourceMutationVariables) => fetcher<CreateSourceMutation, CreateSourceMutationVariables>(client, CreateSourceDocument, variables, headers)(),
      options
    );
export const UpdateSourceDocument = `
    mutation UpdateSource($payload: UpdateOneSourceSystemInput!) {
  updateOneSourceSystem(input: $payload) {
    ...SourceSystemFragment
  }
}
    ${SourceSystemFragmentFragmentDoc}`;
export const useUpdateSourceMutation = <
      TError extends unknown,
      TContext extends unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UpdateSourceMutation, TError, UpdateSourceMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UpdateSourceMutation, TError, UpdateSourceMutationVariables, TContext>(
      ['UpdateSource'],
      (variables?: UpdateSourceMutationVariables) => fetcher<UpdateSourceMutation, UpdateSourceMutationVariables>(client, UpdateSourceDocument, variables, headers)(),
      options
    );
export const SourceListDocument = `
    query SourceList($paging: OffsetPaging, $sorting: [SourceSystemSort!], $filter: SourceSystemFilter!) {
  sourceSystems(
    filter: {and: [$filter, {deleted: {in: [false]}}]}
    paging: $paging
    sorting: $sorting
  ) {
    pageInfo {
      ...OffsetPageInfoFragment
    }
    nodes {
      ...SourceSystemFragment
    }
    totalCount
  }
}
    ${OffsetPageInfoFragmentFragmentDoc}
${SourceSystemFragmentFragmentDoc}`;
export const useSourceListQuery = <
      TData extends SourceListQuery,
      TError extends unknown
    >(
      client: GraphQLClient,
      variables: SourceListQueryVariables,
      options?: UseQueryOptions<SourceListQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<SourceListQuery, TError, TData>(
      ['SourceList', variables],
      fetcher<SourceListQuery, SourceListQueryVariables>(client, SourceListDocument, variables, headers),
      options
    );
export const SourceDocument = `
    query Source($payload: ID!) {
  sourceSystem(id: $payload) {
    ...SourceSystemFragment
  }
}
    ${SourceSystemFragmentFragmentDoc}`;
export const useSourceQuery = <
      TData extends SourceQuery,
      TError extends unknown
    >(
      client: GraphQLClient,
      variables: SourceQueryVariables,
      options?: UseQueryOptions<SourceQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<SourceQuery, TError, TData>(
      ['Source', variables],
      fetcher<SourceQuery, SourceQueryVariables>(client, SourceDocument, variables, headers),
      options
    );