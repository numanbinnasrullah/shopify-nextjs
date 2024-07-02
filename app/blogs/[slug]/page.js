import blogArticleQuery from "@/graphql/blogArticle";


const BlogArticles = async({params}) => {
console.log("Blog params", params)
const blogArticle = await blogArticleQuery(params?.slug);
const articles = blogArticle?.data?.articles.edges;
  console.log("data is here ",articles.map((article) => article.node.blog.articleByHandle.image.url))
  return (
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
  )
}

export default BlogArticles