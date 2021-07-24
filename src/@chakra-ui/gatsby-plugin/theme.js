import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  fonts: {
    heading: "LoraVariable",
    body: "Ubuntu",
    mono: "Ubuntu Mono"
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: 'medium',
        lineHeight: '110%',
        fontStyle: 'normal'
      },
      variants: {
        'italic': {
          fontWeight: 'normal',
          lineHeight: '110%',
          fontStyle: 'italic'
        },
      },
    },
    Text: {
      variants: {

      }
    },
    Divider: {
      baseStyle: {
        opacity: 0.8,
        borderColor: 'gray.600'
      }
    }
  }
})

export default theme