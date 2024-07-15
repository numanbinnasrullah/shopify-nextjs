import blogArticleQuery from "@/graphql/blogArticle";


export async function generateMetadata({ params }) {
  const blogArticle = await blogArticleQuery(params?.slug);
  const articles = blogArticle?.data?.articles.edges;
  console.log("data yahan hy ",articles.map((article) => article?.node?.blog?.articleByHandle.image.url))
  // const meta = await GetSinglePost(params.slug);
  // const robots = meta?.post?.seo?.robots;

  // Initialize variables to store the status of index and follow
  let isIndex = false;
  let isFollow = false;

  // Iterate through the robots array
  // robots.forEach((value) => {
  //   if (value === "index") {
  //     isIndex = true;
  //   } else if (value === "noindex") {
  //     isIndex = false;
  //   } else if (value === "follow") {
  //     isFollow = true;
  //   } else if (value === "nofollow") {
  //     isFollow = false;
  //   }
  // });

  // console.log(meta.post.seo.focusKeywords);
  return {
    title: articles.map((article) => article.node.blog.articleByHandle.seo.title),
    generator: process.env.applicationName,
    applicationName: process.env.applicationName,
    description: articles.map((article) => article.node.blog.articleByHandle.seo.description),
    authors: [{ name: `${process.env.applicationName}` }],
    creator: process.env.applicationName,
    publisher: process.env.applicationName,
    metadataBase: new URL(`${process.env.BASE_URL}`),
    openGraph: {
      title: articles.map((article) => article.node.blog.articleByHandle.seo.title),
      description: articles.map((article) => article.node.blog.articleByHandle.seo.description),
      url: `${process.env.BASE_URL}`,
      siteName: `${process.env.applicationName}`,
      images: [
        {
          url: articles.map((article) => article?.node?.blog?.articleByHandle.image.url),
          // width: 800,
          // height: 600,
        },
      ],
      type: 'website',
    },
    // twitter: {
    //   card: 'summary_large_image',
    //   title: meta?.post?.seo?.title,
    //   description: meta?.post?.seo?.description,
    //   creator: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    //   images: [`${process.env.WP_URL + process.env.images_path + meta?.post.featuredImage?.node?.mediaDetails.file}`],
    // },
    // robots: {
    //   index: { isIndex },
    //   follow: { isFollow },
    //   nocache: true,
    //   googleBot: {
    //     index: { isIndex },
    //     follow: { isFollow },
    //     noimageindex: true,
    //     'max-video-preview': -1,
    //     'max-image-preview': 'large',
    //     'max-snippet': -1,
    //   },
    // },
    manifest: 'https://nextjs.org/manifest.json',

  };
}


const BlogArticles = async({params}) => {
// console.log("Blog params", params)
const blogArticle = await blogArticleQuery(params?.slug);
const articles = blogArticle?.data?.articles.edges;
  console.log("data is here ",articles.map((article) => article.node.blog.articleByHandle.seo.title))
  return (
    <>
    <head>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
            
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "blogs",
                  "item": `http://localhost:3000/blogs/${params?.slug}`
                }
              ]
            }) }} />
          </head>
      <div className="blog-article">
      
        {articles.map((article, index) => (
          <div key={index}>
            <h2 className="blog-article-title">{article.node.blog.articleByHandle.title}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: article?.node?.blog?.articleByHandle?.contentHtml,
              }}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default BlogArticles