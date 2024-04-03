import { graphql } from "./graphql";

const filtersQuery = async(collectionSlug, filter ) => {
    console.log("Filter query console", collectionSlug)
    // console.log("Filter query console", filter)
    const query = `
    query collectionPageQuery($slug:String!, $filter: [ProductFilter!]) {



      collection(handle: $slug) {
          title
          description
          products(first: 12, filters: $filter) {
            filters {
              id
              label
              type
              values {
                id
                label
                count
                input
              }
            }
            edges {
              node {
                id
                title
                description
                handle
                images(first:100) {
                  edges {
                    node {
                      id
                      originalSrc
                    }
                  }
                }
                featuredImage {
                  id
                  url
                }
                media(first: 100) {
                  edges {
                    node {
                      previewImage {
                        id
                        url
                      }
                    }
                  }
                }
                variants(first: 100) {
                  edges {
                    node {
                      id
                      title
                      quantityAvailable
                      image {
                        id
                        url
                      }
                      compareAtPrice {
                        amount
                        currencyCode
                      }
                      price {
                        amount
                        currencyCode
                      }
                      sku
                    }
                  }
                }
              }
            }
          }
        }


    }


    
    `
// console.log("btgbvtgb",filter ) 
    const variables = {
      "slug": collectionSlug,
      "filter": JSON.parse(filter)
      };
  
    const Query = { query, variables }
    const res = await graphql(Query);
    return res
    
}

export default filtersQuery;
