

export const graphql = async(query) => {
    const response = await fetch(process.env.SHOPIFY_GRAPHQL_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Storefront-Access-Token': process.env.STOREFRONT_ACCESS_TOKEN,
        },
        body: JSON.stringify(query),
    });
  
    // if (!response.ok) {
    //     const errorData = await response.json(); // Get the full response body
    //     throw new Error(`Failed to fetch data: ${response.status} - ${errorData}`);
    // }
  
    const res = await response.json();
    
    return res
}

