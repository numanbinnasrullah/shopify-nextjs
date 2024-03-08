import { graphql } from "./graphql";

const cartPageQuery = async () => {
    const query = `
    query cartPageQuery {
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

    // const variables = {
    //     slug: productSlug,
    //     "youmayalsolike": "curtains",
    // };

    try {
        const Query = { query }
        const res = await graphql(Query);
        return res
    } catch (error) {
        console.error("Error fetching product:", error);
        return null;
    }
}

export default cartPageQuery;
