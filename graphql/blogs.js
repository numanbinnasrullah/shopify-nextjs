// queries/products.js

export const BLOGS_QUERY = `
{
	blogs(query: "87509991609", first: 1) {
	  edges {
	    node {
	      id
        articles(first:3) {
          edges {
            node {
              id
              title
              content  
              image {
                url
              }
            }
          }
        }
	    }
	  }
	} 
}
`;


export const blogs = async () => {
  try {
      const response = await fetch(process.env.SHOPIFY_GRAPHQL_ENDPOINT, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'X-Shopify-Storefront-Access-Token': process.env.STOREFRONT_ACCESS_TOKEN, // Replace with your actual access token
          },
          body: JSON.stringify({ query: BLOGS_QUERY }),
      });

      if (!response.ok) {
          throw new Error('Failed to fetch data');
      }

      const res = await response.json();
      return res.data.blogs.edges
  } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
  }
};