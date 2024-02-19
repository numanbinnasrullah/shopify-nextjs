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
      const response = await fetch('https://reactstore1.myshopify.com/api/graphql.json', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'X-Shopify-Storefront-Access-Token': '902fd2f1b08ce2377bad6f2a9aaae656', // Replace with your actual access token
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