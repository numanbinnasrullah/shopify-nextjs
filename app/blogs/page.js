'use client'
import { useMainBlogsQuery } from "@/store/services/blogService";
import Link from "next/link";

const Blog = () => {
  const {data, isSuccess, isLoading} = useMainBlogsQuery();
  console.log("Blog Fetching data", data?.res?.data?.articles?.edges.map((item, index)=> item?.node))
  return (
    
    <div className="main_blog_container">
    <h1 className="blog-heading">Blog Page</h1>
    {isLoading ? "Loading ...!" : 
    <div className="blog-container">
      {
        data?.res?.data?.articles?.edges.map((  item, i )=> (
          <div key={i} className="blog-item">
           <Link href={`blogs/${item?.node?.handle}`}> <img src={item?.node?.image?.url} alt={item?.node?.title} className="blog-image" /> </Link>
            <h2 className="blog-title">{item?.node?.title}</h2>
          </div>
        ))
      }
    </div>
    }
    </div>
  )
}

export default Blog;