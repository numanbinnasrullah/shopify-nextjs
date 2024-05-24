"use client"
import HomepageWrapper from '../HomePageComponents/HomepageWrapper/HomepageWrapper'
import Logo from './logo/Logo'
import Menu from './menu/Menu'
import HeaderIcons from './headerIcons/HeaderIcons'
import Sidebar from '../Sidebar/Sidebar'
import { useGetMenuQuery } from '@/store/services/homePageService'

const Header = () => {
    const {data} =  useGetMenuQuery();
    // const {menu} = data?.res?.data
    console.log("read Menu Header", data?.res?.data?.menu)
    return (
        <HomepageWrapper>
            <Logo />
            <Menu  menu= {data?.res?.data?.menu} />
            <HeaderIcons />
            <Sidebar />
        </HomepageWrapper>
    )
}

export default Header