'use client'

import { useGetMenuQuery } from "@/store/services/homePageService";

const Sitemap = () => {
    const {data} =  useGetMenuQuery();
    console.log("read Menu From sitemap", data?.res?.data?.menu)

    const chunkArray = (arr, size) => {
        console.log("aaaaaaaaaa",arr?.length)
        const chunkedArray = [];
        for (let i = 0; i < arr?.length; i += size) {
            chunkedArray.push(arr.slice(i, i + size));
        }
        return chunkedArray;
    };

    const menusInRows = chunkArray(data?.res?.data?.menu?.items, 3);
    console.log("return menu", menusInRows)

  return (
    <div className="menu-container">helo
        {menusInRows.map((row, rowIndex) => (
            <div key={rowIndex} className="menu-row">
                { row.title}
                {row.map(menu => (
                    <div key={menu.name} className="menu">
                        <h3>{menu.name}</h3>
                        {menu.submenus && (
                            <ul>
                                {menu.submenus.map(submenu => (
                                    <li key={submenu.name}>{submenu.name}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        ))}
    </div>
  )
}

export default Sitemap