import React from 'react'
// import { fetchMenus } from './gqlQuery/query';
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
        return res.data.menu.items
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

const dataArray = [
    { id: 1, items: [1, 2, 3] },
    { id: 2, items: [4, 5, 6] },
    { id: 3, items: [7, 8, 9] }
  ];

const Menu = async () => {
    const getMenus = await fetchMenus();
    console.log("Get Menus", getMenus)
  
  return (
    <>
   
   {/* {getMenus.map(item => (
      <div key={item.id}>
        <h2>Main Menu {item.title}</h2>
        <ul>
          {item.items.map(item => (
            <li key={item}>Item: {item.title}</li>
          ))}
        </ul>
      </div>
    ))} */}

  
          <div className="hidden xl:block w-full max-w-[60%]">
  <ul className="navmenu flex w-full h-full items-center justify-center gap-2 flex-wrap">
    {getMenus.map(mainItem => (
      <li key={mainItem.id} className="py-12 px-3 cursor-pointer relative">
        <a href="#" className="bedding block w-full max-w-fit text-base xl:text-[0.8vw] relative">
          <span>{mainItem.title}</span>
          {mainItem.items.length > 0 && (
            <span className="absolute top-1/2 -translate-y-1/2 -right-5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-w-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </span>
          )}
        </a>
        {mainItem.items.length > 0 && (
          <ul className="block  absolute z-10 w-[200px] pl-5 bg-white left-0 top-36 transition-all duration-150 ease-linear opacity-0 pointer-events-none hover:opacity-100">
            <ul className="block w-full max-w-[600px] mx-auto">
              {mainItem.items.map(subItem => (
                <li key={subItem.id}>
                  <a href="#" className="block w-full text-base leading-[1.875] font-medium text-black uppercase mb-[10px] hover:text-blue-500 hover:text-lg">
                    <span>{subItem.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </ul>
        )}
      </li>
    ))}
  </ul>
</div>
    </>
  )
}

export default Menu;