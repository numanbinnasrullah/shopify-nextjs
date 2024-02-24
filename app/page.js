import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import BestSellers from "@/components/HomePageComponents/BestSellers/BestSellers";
import FeaturedCollections from "@/components/HomePageComponents/FeaturedCollection/FeaturedCollections";
import HeroBanner from "@/components/HomePageComponents/HeroBanner/HeroBanner";
import MainCollections from "@/components/HomePageComponents/MainCollections/MainCollections";
import OurBlog from "@/components/HomePageComponents/OurBlog/OurBlog";
import RichText from "@/components/HomePageComponents/RichText/RichText";
import homePageQuery from "@/graphql/homepage";



export default async function Home() {
    const homePageData = await homePageQuery()
    const {menu, collection1, collection2, collection3, collection, blogs} = homePageData?.data
    console.log("HomePage", homePageData?.data )
    // homePage.data.menu.items
  return (
    <>
      <Header menu={menu} />
      <HeroBanner />
      <RichText />
      <FeaturedCollections featuredCollections={[collection1, collection2, collection3]} />
      <BestSellers />
      <MainCollections />
      <OurBlog />
      <Footer />
    </>
  );
}
