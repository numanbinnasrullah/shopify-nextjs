// queries/products.js

export const FEATURED_COLLECTION_QUERY = `
{
    collections(query: "293494915257 OR 306299338937 OR 293494718649", first: 3) {
      edges {
        node {
          id
          title
          image {
            url
            altText
          }
          products(first: 10) {
            edges {
              node {
                id
                title
                description
                variants(first: 1) {
                  edges {
                    node {
                      priceV2 {
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
    }
  }
`;
