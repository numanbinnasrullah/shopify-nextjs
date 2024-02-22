export const fetchCollection = async (collectionSlug) => {
  console.log("Slug", collectionSlug)
  try {
      const query = `
          query FetchCollection($slug: String!) {
              collections(first: 1, query: $slug) {
                  edges {
                      node {
                        description
                      }
                  }
              }
          }
      `;
      
      const variables = {
          slug: collectionSlug
      };

      const response = await fetch(process.env.SHOPIFY_GRAPHQL_ENDPOINT, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'X-Shopify-Storefront-Access-Token': process.env.STOREFRONT_ACCESS_TOKEN,
          },
          body: JSON.stringify({ query, variables }),
      });
    
      if (!response.ok) {
          const errorData = await response.json(); // Get the full response body
          throw new Error(`Failed to fetch data: ${response.status} - ${errorData}`);
      }
    
      const res = await response.json();
      console.log(res)
      return res.data.collections.edges;
  } catch (error) {
      console.error('Error fetching data:', error.message);
      throw error;
  }
};
