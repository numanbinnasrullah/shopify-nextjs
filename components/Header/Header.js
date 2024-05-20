import React from 'react'
import HomepageWrapper from '../HomePageComponents/HomepageWrapper/HomepageWrapper'
import Logo from './logo/Logo'
import Menu from './menu/Menu'
import HeaderIcons from './headerIcons/HeaderIcons'
import Sidebar from '../Sidebar/Sidebar'

const Header = ({menu}) => {
    return (
        <HomepageWrapper>
            <Logo />
            <Menu  />
            <HeaderIcons />
            <Sidebar />
        </HomepageWrapper>
    )
}

export default Header