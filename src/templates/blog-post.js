import React from 'react'
import { graphql } from "gatsby"

export const pageQuery = graphql`
  query BlogPostByPath($id: String!) {
    markdownRemark(id: {eq: $id}) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        author
      }
    }
  }
`

export default function Template({ data }) {
    const post = data.markdownRemark
    
    return (
        <section>
            <span>
                <h1> {post.frontmatter.title}</h1>
                <div
                    dangerouslySetInnerHTML={{ __html: post.html }}
                />
                <h2>
                    {`${post.frontmatter.author} - ${post.frontmatter.date}`}
                </h2>
            </span>
        </section>
    )
}