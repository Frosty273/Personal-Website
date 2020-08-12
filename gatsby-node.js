/**
 * This is the gatsby-node.js file
 * This code will be executed when the website is being built
 * Learn more here: https://www.gatsbyjs.org/docs/api-files-gatsby-node/
 */

// Create pages programmatically

const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  // get the blog posts using graphQL
  const result = await graphql(`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          path
        }
        id
      }
    }
  }
`)
  
  // get the blog post template
  const template = path.resolve(`src/templates/blog-post.js`)

  // use the createPage() method to create pages.
  result.data.allMarkdownRemark.nodes.forEach(node => {
    createPage({
      path: node.frontmatter.path,
      component: template,
      context: {
        id: node.id,
      }, // additional data can be passed via context
    })
  })

}
