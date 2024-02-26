import { graphql } from "./graphql";

const homePageQuery = async() => {
    const query = `
    query HomePageQuery($handle1: String!, $handle2: String!, $handle3: String!, $slug:String, $newArrivalCollection1: String!, $newArrivalCollection2: String!, $newArrivalCollection3: String!) {
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
    
        collection1: collection(handle: $handle1) {
          ...CollectionFields
        }
      
        collection2: collection(handle: $handle2) {
          ...CollectionFields
        }
      
        collection3: collection(handle: $handle3) {
          ...CollectionFields
        }
        
    
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


          newArrivalCollection1: collection(handle: $newArrivalCollection1) {
            ...CollectionFields
          }
        
          newArrivalCollection2: collection(handle: $newArrivalCollection2) {
            ...CollectionFields
          }
        
          newArrivalCollection3: collection(handle: $newArrivalCollection3) {
            ...CollectionFields
          }
    
        
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
      "handle1": "kitchen",
      "handle2": "bedding",
      "handle3": "curtains",
      "slug": "kitchen",
      "newArrivalCollection1": "rugs",
      "newArrivalCollection2": "women",
      "newArrivalCollection3": "velvet-curtains",
    };
    const Query = { query, variables }
    const res = await graphql(Query);
    return res
    
}

export default homePageQuery;
