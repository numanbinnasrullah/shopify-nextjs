import { graphql } from './graphql'; // This is your GraphQL client setup file

const checkoutQuery = async (checkoutId) => {
  // console.log( ` Checkout Query Run "${checkoutId}"`);
  const query = ` 
  query checkoutURL($checkoutID: ID!) {
        cart(id: $checkoutID) {
            checkoutUrl
        }
    }
`;

  const variables = {
    "checkoutID": checkoutId
  };
  const Query = { query, variables }
  const res = await graphql(Query);

  console.log(res);
  return res
};

export default checkoutQuery;