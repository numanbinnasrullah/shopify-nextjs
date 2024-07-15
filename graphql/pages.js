import { graphql } from './graphql'; // This is your GraphQL client setup file

const pagesQuery = async (pageHandle) => {
  // console.log("page Handle:", pageHandle);
  const query = `
  query pages($slug: String!){
    page(handle: $slug) {
        title
        body
    }
}`;


 const variables = {
     "slug": pageHandle
     
 };
  const Query = { query, variables }
  const res = await graphql(Query);
  
  return res
};

export default pagesQuery;