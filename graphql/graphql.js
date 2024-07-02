

    export const graphql = async(query) => {
        console.log("query",JSON.stringify(query))
        try {
            console.log('Query:', query);
        
            const response = await fetch(process.env.SHOPIFY_GRAPHQL_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'X-Shopify-Storefront-Access-Token': process.env.STOREFRONT_ACCESS_TOKEN,
                },
                body: JSON.stringify(query),
            })  ;
        
            // if (!response.ok) {
            //     const errorData = await response.json(); // Get the full response body
            //     throw new Error(`Failed to fetch data: ${response.status} - ${errorData}`);
            // }
            
            const res = await response.json();
            console.log(`Response ${JSON.stringify(res)}`);
            return res
        } catch (error) {
            console.error('Error:', error.message);
            throw error;
        }
        
    }

