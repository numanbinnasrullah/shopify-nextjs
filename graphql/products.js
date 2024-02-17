// queries/products.js

export const PRODUCTS_QUERY = `
{
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
`;
