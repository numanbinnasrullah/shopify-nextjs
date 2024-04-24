import { graphql } from "./graphql";

const collectionPageQuery = async(collectionSlug, paginate) => {
  // filtersOpt?.map((filter)=> {
  //   console.log("Filter BBBBB", filter)
  // })

  console.log("Collection paginate", paginate)
  
      if(paginate && paginate.includes('nextPage')){
        const query = `
    query collectionPageQuery($slug:String!,$filter: [ProductFilter!], $nextPage: String) {
      
        collection(handle: $slug) {
            title
            description
            handle
            products(first: 1,  after:$nextPage) {
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
              pageInfo {
                hasPreviousPage
                hasNextPage
                startCursor
                endCursor
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
      "slug": collectionSlug
    };
    if (paginate.includes('nextPage')) {
      variables["nextPage"] = paginate.split('+')[1].trim();
    }  else if(paginate.includes('previousPage')){
      variables["previousPage"] = paginate.split('+')[1].trim();
    }

    const Query = { query, variables }
    const res = await graphql(Query);
    return res
      } else if(paginate && paginate.includes('previousPage')) {
        const query = `
    query collectionPageQuery($slug:String!,$filter: [ProductFilter!],  $previousPage: String) {
      
        collection(handle: $slug) {
            title
            description
            handle
            products(last: 1,  before: $previousPage) {
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
              pageInfo {
                hasPreviousPage
                hasNextPage
                startCursor
                endCursor
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
      "slug": collectionSlug
    };
    if (paginate.includes('nextPage')) {
      variables["nextPage"] = paginate.split('+')[1].trim();
    }  else if(paginate.includes('previousPage')){
      variables["previousPage"] = paginate.split('+')[1].trim();
    }
    
    const Query = { query, variables }
    const res = await graphql(Query);
    return res
      } else {

        const query = `
        query collectionPageQuery($slug:String!,$filter: [ProductFilter!]) {
          
            collection(handle: $slug) {
                title
                description
                handle
                products(first: 1) {
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
                  pageInfo {
                    hasPreviousPage
                    hasNextPage
                    startCursor
                    endCursor
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
          "slug": collectionSlug
        };
        // if (paginate.includes('nextPage')) {
        //   variables["nextPage"] = paginate.split('+')[1].trim();
        // }  else if(paginate.includes('previousPage')){
        //   variables["previousPage"] = paginate.split('+')[1].trim();
        // }
        
        const Query = { query, variables }
        const res = await graphql(Query);
        return res


      }

      
    
// if (paginate) {
//       variables["moreProduct"] = paginate;
//     }
    // const variables = {
    //     "slug": collectionSlug
    //   };
    //   if (paginate.includes('nextPage')) {
    //     variables["nextPage"] = paginate.split('+')[1].trim();
    //   }  else if(paginate.includes('previousPage')){
    //     variables["previousPage"] = paginate.split('+')[1].trim();
    //   }
      // if (paginate) {
      //   if (paginate.startsWith('nextPage')) {
      //     variables["nextPage"] = paginate.split('+')[1].trim();
      //   } else if (paginate.startsWith('previousPage')) {
      //     variables["previousPage"] = paginate.split(':')[1].trim();
      //   }
      // }


  //   // Set the variables object
  // let variables = {
  //   "slug": collectionSlug,
   
  // };

  // // Check if paginate is provided and not empty
  // if (paginate) {
  //   variables["nextPage"] = paginate; // Assign paginate value to moreProduct
  // }

  // // Remove moreProduct from variables if it's null
  // if (!variables["moreProduct"]) {
  //   delete variables["moreProduct"];
  // }
  
    // const Query = { query, variables }
    // const res = await graphql(Query);
    // return res
    
}

export default collectionPageQuery;
