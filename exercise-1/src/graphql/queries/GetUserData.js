import {gql} from "@apollo/client";

const GET_USER_DATA = gql`
  {
    user(id: 1) {
    id
    username,
    email,
    phone,
    company {
      name
    },
    address {
    street,
    suite,
    city
    },
    posts(
      options :{
      paginate: {
        page: 1,
        limit: 10
      }
    }) {
      data {
        id
        title,
      }
     }
    }
  }
`;

export default GET_USER_DATA;
