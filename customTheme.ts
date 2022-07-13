import { extendTheme } from '@chakra-ui/react'

// 2. Call `extendTheme` and pass your custom values
export const customTheme = extendTheme({
  space: {
    0.5: '0px',
  },
  components: {
    Badge: {
      sizes: {
        custom: {
          pb: '14px',
          pt: '11px',
          px: '18px',
        },
      },
    },
    Container: {
      'padding-inline-end': '2rem',
      space: {
        p: '0px',
      },
    },
  },
  colors: {
    brand: {
      500: '#5661ff',
      // ...
      900: '#fe481c',
      901: '#fe481c',
    },
  },
})
