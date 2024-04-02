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
    const {menu, collection1, collection2, collection3, collection, blog, newArrivalCollection1, newArrivalCollection2, newArrivalCollection3 } = homePageData?.data
    // console.log("HomePage", homePageData?.data?.blog?.articles?.edges )
    // homePage.data.menu.items
  return (
    <>
      {/* <Header menu={menu} /> */}
      <HeroBanner />
      <RichText />
      <FeaturedCollections featuredCollections={[collection1, collection2, collection3]} />
      <BestSellers collection={collection} />
      <MainCollections newArrivalCollection1={newArrivalCollection1} newArrivalCollection2={newArrivalCollection2} newArrivalCollection3={newArrivalCollection3} />
      <OurBlog blog={blog} />
      {/* <Footer /> */}
    </>
  );
}
