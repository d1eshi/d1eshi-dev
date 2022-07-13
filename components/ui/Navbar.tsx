import { Box, Button, Container, Flex, Spacer, Text } from '@chakra-ui/react'
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
    <Flex py='1em' align='center' h='10%'>
      <Flex w='100%' px={28} alignItems='center' display={['none', 'none', 'flex', 'flex']}>
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
            {`Let's chat`}
          </Button>
        </Box>
      </Flex>
    </Flex>
  )
}
