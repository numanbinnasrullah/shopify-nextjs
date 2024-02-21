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



export const fetchfeaturedCollections = async () => {
  try {
      const response = await fetch(process.env.STORE_ENDPOINT, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'X-Shopify-Storefront-Access-Token': process.env.STOREFRONT_ACCESS_TOKEN, // Replace with your actual access token
          },
          body: JSON.stringify({ query: FEATURED_COLLECTION_QUERY }),
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