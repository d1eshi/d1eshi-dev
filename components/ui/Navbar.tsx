import { Box, Button, Flex, Spacer, Text } from '@chakra-ui/react'
import React, { FC } from 'react'
import { CustomLink } from './CustomLink'

interface Props {}
const routes = [
  { path: '/', text: 'home' },
  { path: '/blog', text: 'blog' },
  { path: '/projects', text: 'projects' },
  { path: '/about', text: 'about' },
]

export const Navbar: FC<Props> = () => {
  return (
    // Desktop
    <Flex py='1em' border='1px solid red' align='center'>
      <Flex w='100%' px='8em' alignItems='center' display={['none', 'none', 'flex', 'flex']}>
        <Box>
          <Text fontSize='4xl' color='blue.600'>
            d1eshi
          </Text>
        </Box>
        <Spacer />
        <Box>
          {routes.map((route, i) => (
            <CustomLink path={route.path} text={route.text} key={i} />
          ))}
        </Box>
        <Spacer />
        <Box>
          <Button colorScheme='gray' border='1px' borderRadius={0}>
            ¡Hablemos!
          </Button>
        </Box>
      </Flex>
    </Flex>
  )
}
