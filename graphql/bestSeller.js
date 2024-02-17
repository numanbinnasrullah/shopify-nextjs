// queries/products.js

export const BEST_SELLER = `
{
    collections(query: "306299338937", first: 1) {
      edges {
        node {
          id
          title
          image {
            url
            altText
          }
          products(first: 3) {
            edges {
              node {
                id
                title
                description
                featuredImage {
                  id
                  url
                }
                variants(first: 1) {
                  edges {
                    node {
                      compareAtPrice{
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
    }
  }
`;
