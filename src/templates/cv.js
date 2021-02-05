import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'
import CvLayout from '../components/cv-layout'
import './cv.css'

class CvTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <CvLayout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </CvLayout>
    )
  }
}

export default CvTemplate

export const pageQuery = graphql`
  query CvBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
