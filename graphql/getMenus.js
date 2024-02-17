// queries/products.js

export const MENU_QUERY = `
{
    menu(handle: "main-menu") {
      id
      items {
        id
        title
        items {
          id
          title
        }
      }
      }
  }
`;
