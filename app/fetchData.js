const fetchData = async () => {
    try {
      const response = await fetch('https://reactstore1.myshopify.com/api/graphql.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': '902fd2f1b08ce2377bad6f2a9aaae656',
        },
        body: JSON.stringify({ query: `{
            products(first: 250) {
              edges {
                node {
                  title
                }
              }
            pageInfo {
              endCursor
              startCursor
            }
            }
          collections(first: 10) {
            edges {
              node {
                id
              }
            }
          }` }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log('Data fetch:', data); // Log the data before returning it
    //   return data.data.products.edges;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Re-throwing the error to handle it where fetchData is called.
    }
  };
  
  export { fetchData };
  