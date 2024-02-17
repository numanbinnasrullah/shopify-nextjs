import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import BestSellers from "@/components/HomePageComponents/BestSellers/BestSellers";
import FeaturedCollections from "@/components/HomePageComponents/FeaturedCollection/FeaturedCollections";
import HeroBanner from "@/components/HomePageComponents/HeroBanner/HeroBanner";
import MainCollections from "@/components/HomePageComponents/MainCollections/MainCollections";
import OurBlog from "@/components/HomePageComponents/OurBlog/OurBlog";
import RichText from "@/components/HomePageComponents/RichText/RichText";



export default function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
      <RichText />
      <FeaturedCollections />
      <BestSellers />
      <MainCollections />
      <OurBlog />
      <Footer />
    </>
  );
}
