import { extendTheme } from '@chakra-ui/react'

// 2. Call `extendTheme` and pass your custom values
export const customTheme = extendTheme({
  space: {
    0.5: '0px',
  },
  components: {
    Badge: {
      sizes: {
        custom: 'max-content',
      },
    },
    Container: {
      'padding-inline-end': '2rem',
      space: {
        p: '0px',
      },
    },
    Button: {
      size: {
        '2xl': '3.5rem',
        '3xl': '4rem',
        '4': '4.5rem',
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
