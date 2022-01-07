const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  // Create Asciidoc pages.
  const asciidocTemplate = path.resolve(`./src/templates/asciidocTemplate.js`)

  return graphql(`
      {
        allAsciidoc {
          edges {
            node {
              id
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    return result.data.allAsciidoc.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: asciidocTemplate,
        context: {
          id: node.id,
        },
      })
    })
  })
}

exports.onCreateNode = async ({ node, actions, getNode, loadNodeContent }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Asciidoc`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}