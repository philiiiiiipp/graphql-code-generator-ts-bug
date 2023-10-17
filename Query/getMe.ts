import gql from "graphql-tag";

const getMe = gql`
  query getMe {
    me {
      id
    }
  }
`;

export default getMe;
