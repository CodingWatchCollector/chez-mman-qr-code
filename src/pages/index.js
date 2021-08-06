import * as React from "react"
import { graphql } from 'gatsby'

// markup
const IndexPage = ({}) => {
  // console.log(data.allMarkdownRemark.nodes[0])
  
  return (
    <div>Hello world</div>
  )
  }

export default IndexPage


// export const query = graphql`
// query Markdown {
//   allMarkdownRemark {
//     nodes {
//       frontmatter {
//         assetType
//         title
//       }
//     }
//   }
// }
// `
