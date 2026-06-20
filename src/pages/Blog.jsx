import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageMeta from '../components/PageMeta.jsx'
import Hero from '../components/Hero.jsx'
import { blogInfo } from '../data/content.js'
import { heroImages } from '../data/images.js'
import './Blog.css'

export default function Blog() {
  return (
    <>
      <PageMeta
        title="Blog & Resources"
        description="Educational articles and compliance tips on CAC registration, Annual Returns, and financial management in Nigeria."
      />

      <Hero
        compact
        eyebrow="Blog & Resources"
        headline="Compliance Tips & Insights"
        subHeadline="Practical guidance on registration, compliance, and financial management for Nigerian businesses and organisations."
        image={heroImages.blog}
      />

      <section className="section section--card">
        <div className="container">
          <div className="blog-categories" aria-label="Categories">
            {blogInfo.categories.map((c) => (
              <span className="blog-categories__chip" key={c}>{c}</span>
            ))}
          </div>

          <div className="blog-grid">
            {blogInfo.placeholderPosts.map((post) => (
              <Link to={`/blog/${post.slug}`} className="blog-card" key={post.slug}>
                <span className="blog-card__category">{post.category}</span>
                <h2 className="blog-card__title">{post.title}</h2>
                <p className="blog-card__excerpt">{post.excerpt}</p>
                <span className="blog-card__footer">
                  <span className="blog-card__date">
                    {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </span>
                  <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>

          <p className="blog-note">
            Articles are published from the AAPS content calendar. New posts go up regularly —
            check back for the latest compliance guidance.
          </p>
        </div>
      </section>
    </>
  )
}
