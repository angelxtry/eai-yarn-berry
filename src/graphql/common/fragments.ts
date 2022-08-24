import gql from 'graphql-tag';

const fragments = {
  baseEntityFragment: gql`
    fragment BaseEntityFragment on AbstractBaseEntity {
      id
      deleted
      deletedAt
      createdAt
      createdUserId
      updatedAt
      updatedUserId
    }
  `,
  offsetPageInfoFragment: gql`
    fragment OffsetPageInfoFragment on OffsetPageInfo {
      hasNextPage
      hasPreviousPage
    }
  `,
  sourceSystemFragment: gql`
    fragment SourceSystemFragment on SourceSystem {
      ...BaseEntityFragment
      systemName
      type
      host
      port
      memo
    }
  `,
  sourceInterfaceFragment: gql`
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
  `,
  destinationInterfaceFragment: gql`
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
  `,
};

export default fragments;
