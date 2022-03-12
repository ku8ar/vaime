import React, { createContext, useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"

const GlobalDataContext = createContext()

export const GlobalDataProvider = ({ children }) => {
  const {
    markdownRemark: { frontmatter },
  } = useStaticQuery(
    graphql`
      query GlobalData {
        markdownRemark(frontmatter: { templateKey: { eq: "global" } }) {
          frontmatter {
            seoTitle
            logo {
              ...imageSeo
            }
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
  );

  return (
    <GlobalDataContext.Provider value={frontmatter}>
      {children}
    </GlobalDataContext.Provider>
  )
}

const emptyData = {
  seoTitle: '',
  logo: {},
  companyName: '',
  email: '',
  navigation: [],
  socialLinks: [],
  phoneNumbers: [],
  popupTitle: '',
  popupText: '',
  popupLink: ''
}

export const useGlobalData = () => useContext(GlobalDataContext) || emptyData