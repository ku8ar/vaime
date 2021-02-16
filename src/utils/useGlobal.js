import { useStaticQuery, graphql } from "gatsby"

export const useGlobal = () => {
  const data = useStaticQuery(
    graphql`
      query GlobalData {
        markdownRemark(frontmatter: { templateKey: { eq: "global" } }) {
          frontmatter {
            seoTitle
            logo { ...imageSeo }
            companyName
            email
            navigation {
              to
              title
              mobile
              icon
            }
            socialLinks {
              type
              src
            }
            phoneNumbers
            popupTitle
            popupText
            popupLink
          }
        }
      }
    `
  )
  return data.markdownRemark.frontmatter
}

export default useGlobal