import { extendTheme } from '@chakra-ui/react'

// 2. Call `extendTheme` and pass your custom values
export const customTheme = extendTheme({
  components: {
    Badge: {
      sizes: {
        md: {
          // h: '20px',
          px: '14px',
          py: '11px',
        },
      },
    },
  },
  colors: {
    brand: {
      500: '#5661ff',
      // ...
      900: '#fe481c',
    },
  },
})
