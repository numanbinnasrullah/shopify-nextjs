
import { graphql } from './graphql'; 

const blogsQuery = async () => {
  // console.log("blogs query:", blogId);
  const query = `
    query blogs{
      articles(first:100) {
                edges {
                  node {
                        id
                        title
                        handle
                        content  
                        image {
                          url
                        }   
                  }
                }
                pageInfo{
                  hasNextPage
                  endCursor
                }
              }
    }
  
  `;

  // "id": "gid://shopify/ProductVariant/42795461083321"
  // const variables = {
  //   "variantID": variantID,
  //   "proquantity": quantity
  // };
  const Query = { query }
  const res = await graphql(Query);
  return res
};

export default blogsQuery;