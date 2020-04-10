import gql from 'graphql-tag';

export const QUERY_CASE_LIST = gql`
  query CaseList($country: String!,$dateAfter: String!) {
	results(countries:[$country],date:{gt:$dateAfter}) {
        date
        confirmed
        deaths
        recovered
        growthRate
    }
  }
`;