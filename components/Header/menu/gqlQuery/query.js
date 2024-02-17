import { MENU_QUERY } from '@/graphql/getMenus';

export const fetchMenus = async () => {
    try {
        const response = await fetch('https://reactstore1.myshopify.com/api/graphql.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Shopify-Storefront-Access-Token': '902fd2f1b08ce2377bad6f2a9aaae656', // Replace with your actual access token
            },
            body: JSON.stringify({ query: MENU_QUERY }),
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const res = await response.json();
        return res.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};