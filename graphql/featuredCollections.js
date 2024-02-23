// queries/products.js

// export const FEATURED_COLLECTION_QUERY = `
// {
//     collections(query: "293494915257 OR 306299338937 OR 293494718649", first: 3) {
//       edges {
//         node {
//           id
//           title
//           image {
//             url
//             altText
//           }
//           products(first: 10) {
//             edges {
//               node {
//                 id
//                 title
//                 description
//                 variants(first: 1) {
//                   edges {
//                     node {
//                       priceV2 {
//                         amount
//                         currencyCode
//                       }
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;
export const fetchfeaturedCollections = async (handle1, handle2, handle3) => {
  const query = `
    query FetchMultipleCollections($handle1: String!, $handle2: String!, $handle3: String!) {
      collection1: collection(handle: $handle1) {
        ...CollectionFields
      }
    
      collection2: collection(handle: $handle2) {
        ...CollectionFields
      }
    
      collection3: collection(handle: $handle3) {
        ...CollectionFields
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
      products(first: 3) {
        edges {
          node {
            id
            title
            handle
            description
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
        pageInfo {
          hasNextPage
          endCursor
          hasPreviousPage
        }
      }
    }
  `;

  const variables = {
    handle1: "curtains",
    handle2: "kitchen",
    handle3: "bedding",
  };

  try {
    const response = await fetch(process.env.SHOPIFY_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': process.env.STOREFRONT_ACCESS_TOKEN,
      },
      body: JSON.stringify({ query: query, variables: variables }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const res = await response.json();
    return res.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
