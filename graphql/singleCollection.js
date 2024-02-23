import { graphql } from "./graphql";

export const fetchCollection = async (collectionSlug) => {

  try {
      const query = `
      query FetchCollection($slug: String!) {
        collection(handle: $slug) {
          title
          description
          products(first: 3) {
            edges {
              node {
                id
                title
                description
                handle
                featuredImage {
                  id
                  url
                }
                media(first: 2) {
                  edges {
                    node {
                      previewImage {
                        id
                        url
                      }
                    }
                  }
                }
                variants(first: 1) {
                  edges {
                    node {
                      compareAtPrice {
                        amount
                        currencyCode
                      }
                      price {
                        amount
                        currencyCode
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      `;
      
      const variables = {
          slug: collectionSlug
      };
      const Query = { query, variables }
      const res = await graphql(Query)
    
      console.log(res)
      return res.data.collection;
  } catch (error) {
      console.error('Error fetching data:', error.message);
      throw error;
  }
};
