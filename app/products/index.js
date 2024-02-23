import { PRODUCTS_QUERY } from '@/graphql';

const fetchProductData = async () => {
    try {
        const response = await fetch('https://reactstore1.myshopify.com/api/graphql.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Shopify-Storefront-Access-Token': '902fd2f1b08ce2377bad6f2a9aaae656', // Replace with your actual access token
            },
            body: JSON.stringify({ query: PRODUCTS_QUERY }),
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const res = await response.json();
        return res.data.products.edges;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

const GetProducts = async () => {
    const productsData = await fetchProductData();
    const products = productsData
    console.log("Product data:", products)
        return (
            <>
            <div>
            {products ? 
                products.map((product, index) => (
                    <div key={index}>
                        <h1>{index+1}</h1> <h3>{product?.node?.title}</h3>
                        <h2>producst</h2>
                        {/* Display other product information as needed */}
                    </div>
                )) :  <div>No products found</div>
            }
            </div>
            
            </>
        )
      
    
};

export default GetProducts;
