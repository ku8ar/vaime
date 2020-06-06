import {graphql} from 'gatsby'

export const bannerImage = graphql`
  fragment imageFullWidth on File {
    childImageSharp {
      fluid(maxWidth: 1920, quality: 90) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  fragment imageHalfWidth on File {
    childImageSharp {
      fluid(maxWidth: 960, quality: 90) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  fragment imageViewWidth on File {
    childImageSharp {
      fluid(maxWidth: 1140, quality: 90) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  fragment imageTile on File {
    childImageSharp {
      fluid(maxWidth: 352, quality: 90) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  fragment imageAvatar on File {
    childImageSharp {
      fluid(maxWidth: 160, quality: 90) {
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
