
import { graphql } from './graphql'; // This is your GraphQL client setup file

const blogsQuery = async (blogId) => {
  console.log("blogs query:", blogId);
  const query = `
  {
	blogs(query: "87509991609", first: 1) {
	  edges {
	    node {
	      id
        articles(first:3) {
          edges {
            node {
              id
              title
              content  
              image {
                url
              }
            }
          }
        }
	    }
	  }
	} 
}
  
  `;

  // "id": "gid://shopify/ProductVariant/42795461083321"
  const variables = {
    "variantID": variantID,
    "proquantity": quantity
  };
  const Query = { query, variables }
  const res = await graphql(Query);
  return res
};

export default blogsQuery;