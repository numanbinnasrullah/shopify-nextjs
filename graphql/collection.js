import { graphql } from "./graphql";

const collectionPageQuery = async(collectionSlug, filtersOpt) => {
  // filtersOpt?.map((filter)=> {
  //   console.log("Filter BBBBB", filter)
  // })

  // console.log("Collection query filters", filtersOpt)

    const query = `
    query collectionPageQuery($slug:String!,$filter: [ProductFilter!] ) {
      
        collection(handle: $slug) {
            title
            description
            handle
            products(first: 12) {
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
          


          filteroptions: collection(handle: $slug) {
            ...CollectionFields
          }


      }


      fragment CollectionFields on Collection {
           id
           title
           handle
           products(first: 100, filters:$filter ) {
           
            edges {
              node {
                handle
                variants(first: 10) {
                  edges {
                    node {
                      selectedOptions {
                        name
                        value
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
        "slug": collectionSlug,
        "filter": [{ "variantOption": { "name": "Color", "value":"Pink"  } }, { "variantOption": { "name": "Color", "value":"red"  } }]
        
      };
  
    const Query = { query, variables }
    const res = await graphql(Query);
    return res
    
}

export default collectionPageQuery;
