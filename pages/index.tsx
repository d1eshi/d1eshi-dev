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
        <Grid templateColumns='55% 45%' h='100%'>
          <VStack alignItems='flex-start'>
            {/* first block */}
            <VStack pl={32} spacing={8} alignItems='flex-start' height='80%' w='100%'>
              <Text fontSize={['4xl', '4xl', '6xl', '6xl']} position='relative' fontWeight={700}>
                Hi! I Am{' '}
                <Badge
                  className='badge-roles'
                  fontSize='1.2rem'
                  top={5}
                  right='-4em'
                  position='absolute'
                  variant='solid'
                  bg='brand.500'
                  size='custom'
                  borderRadius={38}
                ></Badge>{' '}
                <br /> Diego Silva
              </Text>
              <Text fontSize='lg'>
                <span className='bold-span'>Developer</span> with 1+ year of experience{' '}
                <span className='bold-span'>buliding solutions </span> and searching experiences to grow.
              </Text>
              <Box>
                <Button
                  backgroundColor='brand.900'
                  _hover={{ bg: '#fe481c' }}
                  color='#eee'
                  fontSize='lg'
                  px={8}
                  py={6}
                  borderRadius={0}
                >
                  Hire Me
                </Button>
                <Button fontSize='lg' px={8} py={6} borderRadius={0}>
                  Projects
                </Button>
              </Box>
              <Box>
                <Text fontSize='3xl' fontWeight={700}>
                  Contact
                </Text>
                <Text fontSize='lg'>helo@example.com</Text>
              </Box>
            </VStack>
            <SimpleGrid
              columns={2}
              maxH='15em'
              px={32}
              h='30%'
              w='100%'
              m={0}
              alignItems='center'
              backgroundColor='#262626'
              justifyContent='flex-start'
            >
              <Box>
                <Text color='#eee' fontSize='2xl' fontWeight={700} mb={3}>
                  Main Skills
                </Text>
                <Button background='#ffd100'>Know more</Button>
              </Box>
              <List
                display='flex'
                alignItems='center'
                justifyContent='center'
                flexWrap='wrap'
                w='12em'
                gap='0 1em'
                h='4em'
                color='#eee'
              >
                <SimpleGrid columns={2} spacingX={6} spacingY={2} fontWeight={700}>
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
