import React from 'react'
import HomepageWrapper from '../HomePageComponents/HomepageWrapper/HomepageWrapper'
import Logo from './logo/Logo'
import Menu from './menu/Menu'
import HeaderIcons from './headerIcons/HeaderIcons'
import Sidebar from '../Sidebar/Sidebar'
import Head from "next/head";
import Announcement from './announcement-bar/Announcement'
import HeaderIcons1 from './headerIcons/HeaderIcons copy'
import Menu1 from './menu/Menu copy'

const Header = ({menu, params}) => {
    // console.log("12345", params)
    return (
        <>
        
            
        <HomepageWrapper>
            <HeaderIcons1 />
            {/* <Menu1  /> */}
            {/* <Logo /> */}
            <Sidebar />
        </HomepageWrapper>
        </>
    )
}

export default Header