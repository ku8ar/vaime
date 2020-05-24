import {graphql} from 'gatsby'

export const bannerImage = graphql`
  fragment imageFullWidth on File {
    childImageSharp {
      fluid(maxWidth: 1920, quality: 90) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  fragment imagHalfWidth on File {
    childImageSharp {
      fluid(maxWidth: 960, quality: 90) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  fragment imageThumb on File {
    childImageSharp {
      fluid(maxWidth: 400, quality: 90) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  fragment imageSeo on File {
    childImageSharp {
      fixed(width: 800, quality: 90) {
        ...GatsbyImageSharpFixed_noBase64
      }
    }
  }
`
