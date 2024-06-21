import { graphql } from "./graphql";

const homePageQuery = async() => {
    const query = `
    query HomePageQuery($Home_Collection_1: String!, $Home_Collection_2: String!, $Home_Collection_3: String!, $Home_Best_Sellers:String, $Home_Collection_New_Arrivals_1: String!, $Home_Collection_New_Arrivals_2: String!, $Home_Collection_New_Arrivals_3: String!, $Home_Blog: String!) {
    
        collection1: collection(handle: $Home_Collection_1) {
          ...CollectionFields
        }
      
        collection2: collection(handle: $Home_Collection_2) {
          ...CollectionFields
        }
      
        collection3: collection(handle: $Home_Collection_3) {
          ...CollectionFields
        }
        
    
        collection(handle: $Home_Best_Sellers) {
            title
            description
            products(first: ${process.env.Collection_Products_Limit}) {
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
                  media(first: ${process.env.Collection_Media_Limit}) {
                    edges {
                      node {
                        previewImage {
                          id
                          url
                        }
                      }
                    }
                  }
                  variants(first: ${process.env.Collection_Variants_Limit}) {
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


          Home_Collection_New_Arrivals_1: collection(handle: $Home_Collection_New_Arrivals_1) {
            ...CollectionFields
          }
        
          Home_Collection_New_Arrivals_2: collection(handle: $Home_Collection_New_Arrivals_2) {
            ...CollectionFields
          }
        
          Home_Collection_New_Arrivals_3: collection(handle: $Home_Collection_New_Arrivals_3) {
            ...CollectionFields
          }
    
        
          blog(handle: $Home_Blog) {
            id
            handle
            articles(first:3) {
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
              }
          }
        
      }
      
      fragment CollectionFields on Collection {
        id
           title
           handle
           image {
           url
             altText
           } 
      }
      
    `
    const variables = {
      "Home_Collection_1": process.env.Home_Collection_1,
      "Home_Collection_2": process.env.Home_Collection_2,
      "Home_Collection_3": process.env.Home_Collection_3,
      "Home_Best_Sellers": process.env.Home_Best_Sellers,
      "Home_Collection_New_Arrivals_1": process.env.Home_Collection_New_Arrivals_1,
      "Home_Collection_New_Arrivals_2": process.env.Home_Collection_New_Arrivals_2,
      "Home_Collection_New_Arrivals_3": process.env.Home_Collection_New_Arrivals_3,
      "Home_Blog" : process.env.Home_Blog
    };
    const Query = { query, variables }
    const res = await graphql(Query);
    return res
    
}

export default homePageQuery;
