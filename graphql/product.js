import { graphql } from "./graphql";

const productPageQuery = async (productSlug) => {
    const query = `
    query productPageQuery($slug: String!) {
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

        product(handle: $slug) {
            id
          title
          description
          handle
          images(first: 5) {
            edges {
              node {
                id
                originalSrc
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
    `;

    const variables = {
        slug: productSlug
    };

    try {
        const Query = { query, variables }
        const res = await graphql(Query);
        return res
    } catch (error) {
        console.error("Error fetching product:", error);
        return null;
    }
}

export default productPageQuery;
