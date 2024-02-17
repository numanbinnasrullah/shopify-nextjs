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
