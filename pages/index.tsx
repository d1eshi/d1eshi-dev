import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  List,
  ListItem,
  SimpleGrid,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { MainLayout } from '../components/layouts'

const Home: React.FC = () => {
  return (
    <MainLayout>
      <Container h='90%' p='0px' maxWidth='100vw'>
        <Grid templateColumns={['null', '55% 45%']} h='100%' pt={6}>
          <VStack alignItems='flex-start'>
            {/* first block */}
            <VStack
              p={['0 1rem', '2rem .5rem 0 0']}
              ml={[0, 32]}
              borderTop={['null', '1px solid gray']}
              spacing={[6, 6, 4, 8]}
              alignItems='flex-start'
              height='75%'
              w='cacl(100% - 8rem)'
            >
              <Text fontSize={['4xl', '4xl', '4xl', '5xl', '7xl']} fontWeight={700} lineHeight='1.2'>
                Hi! I Am
                <Text
                  // fontSize={['xl', '2xl', '4xl', '6xl', '7xl']}
                  as='span'
                  padding='1em  1em'
                  textTransform='uppercase'
                  fontWeight='bold'
                  ml={[2, 5, 2.5, 3, 6]}
                  className='badge-roles'
                  verticalAlign='super'
                  fontSize={['sm', '.4rem', '.6rem', 'sm', 'xl']}
                  variant='solid'
                  bg='brand.500'
                  color='#eee'
                  borderRadius={38}
                >
                  Frontend Developer
                </Text>
                <br /> Diego Silva
              </Text>
              <Text fontSize={['sm', 'sm', 'sm', 'lg', 'xl']} maxW='27em'>
                <span className='bold-span'>Developer</span> with 1+ year of experience {''}
                <span className='bold-span'>buliding solutions </span> and searching experiences to grow.
              </Text>
              <HStack spacing={2}>
                <Button
                  backgroundColor='brand.900'
                  _hover={{ bg: '#fe481c' }}
                  color='#eee'
                  fontSize='lg'
                  size={['lg', 'md', 'md', 'lg']}
                  p={['', '', '', '1.5em 2em']}
                  borderRadius={0}
                >
                  Hire Me
                </Button>
                <Button
                  size={['lg', 'md', 'md', 'lg']}
                  fontSize={['lg']}
                  borderRadius={0}
                  p={['', '', '', '1.5em 2em']}
                >
                  Projects
                </Button>
              </HStack>
              <Box>
                <Text fontSize={['2xl', 'xl', '2xl', '3xl']} fontWeight={700}>
                  Contact
                </Text>
                <Text fontSize={['sm', 'lg', 'sm', 'xl']}>silva.diegof03@gmail.com</Text>
              </Box>
            </VStack>
            <SimpleGrid
              columns={2}
              maxH='15em'
              px={[4, 32]}
              h='25%'
              w='100%'
              m={0}
              alignItems='center'
              backgroundColor='#262626'
              justifyContent='flex-start'
            >
              <Box>
                <Text color='#eee' fontSize={['2xl', 'md', 'xl', '2xl']} fontWeight={700} mb={3}>
                  Main Skills
                </Text>
                <Button background='#ffd100' size={['sm', 'md', 'lg']} borderRadius={0}>
                  Know more
                </Button>
              </Box>
              <List
                display='flex'
                alignItems='center'
                justifyContent='center'
                flexWrap='wrap'
                w='12em'
                gap='0 1em'
                color='#eee'
              >
                <SimpleGrid columns={2} fontSize={['sm', 'xs', 'md', 'lg']} spacingX={4} spacingY={2} fontWeight={700}>
                  <ListItem>Javascript</ListItem>
                  <ListItem>React</ListItem>
                  <ListItem>Next.js</ListItem>
                  <ListItem>Typescript</ListItem>
                  <ListItem>Node.js</ListItem>
                  <ListItem>Css</ListItem>
                </SimpleGrid>
              </List>
            </SimpleGrid>
          </VStack>
          <GridItem w='100%' className={`image-container`} display={['none', 'block']}>
            {/* <Image src='/profile.jpg' layout='fill' alt='image of Diego Silva' className={`image`} /> */}
            <Box w='100%' h='100%' backgroundColor='#ded1c1'></Box>
          </GridItem>
        </Grid>
      </Container>
    </MainLayout>
  )
}

export default Home
