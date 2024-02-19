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
              media(first:2) {
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



export const bestSellerCollection = async () => {
  try {
      const response = await fetch('https://reactstore1.myshopify.com/api/graphql.json', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'X-Shopify-Storefront-Access-Token': '902fd2f1b08ce2377bad6f2a9aaae656', // Replace with your actual access token
          },
          body: JSON.stringify({ query: BEST_SELLER }),
      });

      if (!response.ok) {
          throw new Error('Failed to fetch data');
      }

      const res = await response.json();
      return res.data.collections.edges
  } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
  }
};