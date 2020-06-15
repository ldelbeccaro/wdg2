const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/components/markdownTemplate.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}

// const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   // Ensures we are processing only markdown files
//   if (node.internal.type === "MarkdownRemark") {
//     // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
//     const relativeFilePath = createFilePath({
//       node,
//       getNode,
//       basePath: "data/",
//     })

//     // Creates new query'able field with name of 'slug'
//     createNodeField({
//       node,
//       name: "slug",
//       value: `/${relativeFilePath}`,
//     })
//   }
// }

// const path = require(`path`)

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   const template = path.resolve(`src/components/layout.js`)
//   // Query for markdown nodes to use in creating pages.
//   // You can query for whatever data you want to create pages for e.g.
//   // products, portfolio items, landing pages, etc.
//   // Variables can be added as the second function parameter
//   return graphql(
//     `
//       query loadPagesQuery($limit: Int!) {
//         allMarkdownRemark(limit: $limit) {
//           edges {
//             node {
//               frontmatter {
//                 slug
//               }
//             }
//           }
//         }
//       }
//     `,
//     { limit: 1000 }
//   ).then(result => {
//     if (result.errors) {
//       throw result.errors
//     }

//     // Create blog post pages.
//     result.data.allMarkdownRemark.edges.forEach(edge => {
//       createPage({
//         // Path for this page — required
//         path: `${edge.node.frontmatter.slug}`,
//         component: template,
//         context: {
//           // Add optional context data to be inserted
//           // as props into the page component..
//           //
//           // The context data can also be used as
//           // arguments to the page GraphQL query.
//           //
//           // The page "path" is always available as a GraphQL
//           // argument.
//         },
//       })
//     })
//   })
// }
