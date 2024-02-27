import { graphql } from "./graphql";

const collectionPageQuery = async(collectionSlug) => {
    const query = `
    query collectionPageQuery($slug:String!) {
        menu(handle: "main-menu") {
          id
          items {
            id
            title
            url
            items {
              id
              title
              url 
            }
          }
        }


        collection(handle: $slug) {
            title
            description
            products(first: 12) {
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


     
      
      
    `

    const variables = {
        slug: collectionSlug
      };
  
    const Query = { query, variables }
    const res = await graphql(Query);
    return res
    
}

export default collectionPageQuery;
