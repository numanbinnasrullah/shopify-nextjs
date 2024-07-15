import React from 'react'
import HomepageWrapper from '../HomePageComponents/HomepageWrapper/HomepageWrapper'
import Logo from './logo/Logo'
import Menu from './menu/Menu'
import HeaderIcons from './headerIcons/HeaderIcons'
import Sidebar from '../Sidebar/Sidebar'
import Head from "next/head";

const Header = ({menu, params}) => {
    // console.log("12345", params)
    return (
        <>
        
        <HomepageWrapper>
            <Logo />
            <Menu  />
            <HeaderIcons />
            <Sidebar />
        </HomepageWrapper>
        </>
    )
}

export default Header