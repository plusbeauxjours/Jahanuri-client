import gql from "graphql-tag";

export const ME = gql`
  query Me {
    me {
      user {
        username
          uuid
          gender
      }
    }
  }
`;
