export const MENU_QUERY = `
{
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
}
`;


export const fetchMenus = async () => {
  try {
    const response = await fetch(process.env.SHOPIFY_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': process.env.STOREFRONT_ACCESS_TOKEN,
      },
      body: JSON.stringify({ query: MENU_QUERY }),
  });

      if (!response.ok) {
          throw new Error('Failed to fetch data');
      }

      const res = await response.json();
      return res.data.menu.items
  } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
  }
};





