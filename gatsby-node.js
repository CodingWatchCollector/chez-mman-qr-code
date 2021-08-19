exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `

  type MarkdownRemarkFrontmatterContentDesert_cheese {
    item: [Items]
  }
  type MarkdownRemarkFrontmatterContent {
    item: [Items]
  }
  type MarkdownRemarkFrontmatterContentMain_course {
    item: [Items]
  }
  type MarkdownRemarkFrontmatterContentStarters {
    item: [Items]
  }

  type Items {
    description: String
    title: String!
    price: String
    supplement: String
    vegetarian: Boolean
    local: Boolean
  }
  `

  createTypes(typeDefs)
}
