import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Linkedin, Facebook, MessageCircle } from 'lucide-react'
import PageMeta from '../components/PageMeta.jsx'
import { blogInfo, practice } from '../data/content.js'
import './BlogPost.css'

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogInfo.placeholderPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <section className="section section--card">
        <div className="container">
          <h1 className="section-heading">Article not found</h1>
          <p className="section-sub">This article may have been moved or unpublished.</p>
          <Link to="/blog" className="btn btn--green" style={{ marginTop: '1.5rem' }}>
            <ArrowLeft size={16} /> Back to Blog
          </Link>
        </div>
      </section>
    )
  }

  const shareText = encodeURIComponent(post.title)
  const shareUrl = encodeURIComponent(`https://${practice.domain}/blog/${post.slug}`)

  return (
    <>
      <PageMeta title={post.title} description={post.excerpt} />

      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">{post.category}</span>
          <h1 className="page-hero__title">{post.title}</h1>
        </div>
      </section>

      <section className="section section--card">
        <div className="container blog-post prose">
          <p className="blog-post__date">
            {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>

          <p className="blog-post__excerpt">{post.excerpt}</p>

          {post.content ? (
            <div className="blog-post__content">
              {typeof post.content === 'string' ? (
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              ) : (
                post.content
              )}
            </div>
          ) : (
            <div className="blog-post__placeholder">
              Full article content will be added from the AAPS content calendar.
            </div>
          )}

          <div className="blog-post__share">
            <span>Share</span>
            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`} target="_blank" rel="noreferrer" aria-label="Share on LinkedIn">
              <Linkedin size={17} strokeWidth={1.75} />
            </a>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noreferrer" aria-label="Share on Facebook">
              <Facebook size={17} strokeWidth={1.75} />
            </a>
            <a href={`https://wa.me/?text=${shareText}%20${shareUrl}`} target="_blank" rel="noreferrer" aria-label="Share on WhatsApp">
              <MessageCircle size={17} strokeWidth={1.75} />
            </a>
          </div>

          <Link to="/blog" className="btn btn--ghost-green" style={{ marginTop: '2rem' }}>
            <ArrowLeft size={16} /> Back to Blog
          </Link>
        </div>
      </section>
    </>
  )
}
