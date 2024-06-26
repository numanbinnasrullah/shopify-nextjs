import { graphql } from "./graphql";

const menuQuery = async() => {
  // console.log("Menu ki GraphQL")
    const query = `
    query HomePageQuery{
        menu(handle: "${process.env.Nav_Menu}") {
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
      
    `

    const Query = { query }
    const res = await graphql(Query);
    return res
    
}

export default menuQuery;
