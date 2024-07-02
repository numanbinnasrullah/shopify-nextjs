import { graphql } from './graphql'; // This is your GraphQL client setup file

const blogArticleQuery = async (articleHandle) => {
  console.log("Article Handle:", articleHandle);
  const query = `
    query blogArticle($acticleHandle: String!){
        articles(first:1,  ) {
                edges {
                node {
                    blog{
                    articleByHandle(handle: $acticleHandle){
                        id
                        title
                        contentHtml 
                        image {
                        url
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
    "acticleHandle": articleHandle
  };
  const Query = { query, variables }
  const res = await graphql(Query);
  return res
};

export default blogArticleQuery;