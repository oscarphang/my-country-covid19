import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
   __typename?: 'Query';
  results?: Maybe<Array<Maybe<Result>>>;
  result?: Maybe<Result>;
  countries?: Maybe<Array<Maybe<Country>>>;
  country?: Maybe<Country>;
};


export type QueryResultsArgs = {
  countries?: Maybe<Array<Maybe<Scalars['String']>>>;
  date?: Maybe<DateInput>;
};


export type QueryResultArgs = {
  country: Scalars['String'];
  date?: Maybe<Scalars['String']>;
};


export type QueryCountriesArgs = {
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryCountryArgs = {
  name?: Maybe<Scalars['String']>;
};

/** eq - equal to, gt - greater than, lt - less than */
export type DateInput = {
  eq?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
};

export type Result = {
   __typename?: 'Result';
  country?: Maybe<Country>;
  /** format date with date-fns. Help - https://date-fns.org/v2.11.0/docs/format */
  date?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Int']>;
  deaths?: Maybe<Scalars['Int']>;
  recovered?: Maybe<Scalars['Int']>;
  growthRate?: Maybe<Scalars['Float']>;
};


export type ResultDateArgs = {
  format?: Maybe<Scalars['String']>;
};

export type Country = {
   __typename?: 'Country';
  name?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<Result>>>;
  mostRecent?: Maybe<Result>;
};

export type CaseListQueryVariables = {
  country: Scalars['String'];
  dateAfter: Scalars['String'];
};


export type CaseListQuery = (
  { __typename?: 'Query' }
  & { results?: Maybe<Array<Maybe<(
    { __typename?: 'Result' }
    & Pick<Result, 'date' | 'confirmed' | 'deaths' | 'recovered' | 'growthRate'>
  )>>> }
);


export const CaseListDocument = gql`
    query CaseList($country: String!, $dateAfter: String!) {
  results(countries: [$country], date: {gt: $dateAfter}) {
    date
    confirmed
    deaths
    recovered
    growthRate
  }
}
    `;
export type CaseListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CaseListQuery, CaseListQueryVariables>, 'query'> & ({ variables: CaseListQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const CaseListComponent = (props: CaseListComponentProps) => (
      <ApolloReactComponents.Query<CaseListQuery, CaseListQueryVariables> query={CaseListDocument} {...props} />
    );
    
export type CaseListProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<CaseListQuery, CaseListQueryVariables>
    } & TChildProps;
export function withCaseList<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CaseListQuery,
  CaseListQueryVariables,
  CaseListProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, CaseListQuery, CaseListQueryVariables, CaseListProps<TChildProps, TDataName>>(CaseListDocument, {
      alias: 'caseList',
      ...operationOptions
    });
};

/**
 * __useCaseListQuery__
 *
 * To run a query within a React component, call `useCaseListQuery` and pass it any options that fit your needs.
 * When your component renders, `useCaseListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCaseListQuery({
 *   variables: {
 *      country: // value for 'country'
 *      dateAfter: // value for 'dateAfter'
 *   },
 * });
 */
export function useCaseListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CaseListQuery, CaseListQueryVariables>) {
        return ApolloReactHooks.useQuery<CaseListQuery, CaseListQueryVariables>(CaseListDocument, baseOptions);
      }
export function useCaseListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CaseListQuery, CaseListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CaseListQuery, CaseListQueryVariables>(CaseListDocument, baseOptions);
        }
export type CaseListQueryHookResult = ReturnType<typeof useCaseListQuery>;
export type CaseListLazyQueryHookResult = ReturnType<typeof useCaseListLazyQuery>;
export type CaseListQueryResult = ApolloReactCommon.QueryResult<CaseListQuery, CaseListQueryVariables>;