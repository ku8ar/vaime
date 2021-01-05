import {graphql} from 'gatsby'

export const bannerImage = graphql`
  fragment imageFullWidth on File {
    childImageSharp {
      fluid(maxWidth: 1920, quality: 90) { ...GatsbyImageSharpFluid_withWebp }
    }
  }

  fragment imageFullWidthSvg on File {
    childImageSharp {
      fluid(maxWidth: 1920, quality: 90) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }
    }
  }

  fragment imageHalfWidth on File {
    childImageSharp {
      fluid(maxWidth: 960, quality: 90) { ...GatsbyImageSharpFluid_withWebp }
    }
  }

  fragment imageViewWidthSvg on File {
    childImageSharp {
      fluid(maxWidth: 1140, quality: 90) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }
    }
  }

  fragment imageTile on File {
    childImageSharp {
      fluid(maxWidth: 352, quality: 90) { ...GatsbyImageSharpFluid_withWebp }
    }
  }

  fragment imagePreview on File {
    childImageSharp {
      fluid(maxWidth: 554, quality: 90) { ...GatsbyImageSharpFluid_noBase64 }
    }
  }

  fragment imageAvatar on File {
    childImageSharp {
      fluid(maxWidth: 160, quality: 90) { ...GatsbyImageSharpFluid_withWebp }
    }
  }

  fragment imageSeo on File {
    childImageSharp {
      fixed(width: 800, quality: 90) { ...GatsbyImageSharpFixed_noBase64 }
    }
  }

  fragment imageBlog on File {
    childImageSharp {
      fluid(maxWidth: 800, quality: 90) { ...GatsbyImageSharpFluid_withWebp }
    }
  }
`
