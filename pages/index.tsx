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
        <Grid templateColumns={['null', '55% 45%']} h='100%'>
          <VStack alignItems='flex-start'>
            {/* first block */}
            <VStack
              p={['0 1rem', '3rem .5rem 0 0']}
              ml={[0, 28]}
              borderTop={['null', '1px solid gray']}
              spacing={[6, 6, 4, 8]}
              alignItems='flex-start'
              height='75%'
              w='cacl(100% - 8rem)'
            >
              <Flex flexWrap='wrap' alignItems='center'>
                <Text fontSize={['4xl', '4xl', '4xl', '6xl', '7xl']} fontWeight={700} lineHeight='1.2'>
                  Hi! I Am
                </Text>
                <Box margin={0}>
                  <Text
                    as='span'
                    display='block'
                    padding='1em  1em'
                    // height='100%'
                    textTransform='uppercase'
                    fontWeight='bold'
                    ml={[2, 5, 2.5, 3, 6]}
                    className='badge-roles'
                    verticalAlign='super'
                    fontSize={['xs', 'xs', '.6rem', 'sm', 'xl']}
                    variant='solid'
                    bg='brand.500'
                    color='#eee'
                    borderRadius={38}
                  >
                    Frontend Developer
                  </Text>
                </Box>
                <Text fontSize={['4xl', '4xl', '4xl', '6xl', '7xl']} fontWeight={700} lineHeight='1.2'>
                  Diego Silva
                </Text>
              </Flex>
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
            <Grid
              gridTemplateColumns='48% 55%'
              justifyItems='start'
              px={[4, 28]}
              gap='1em'
              h='25%'
              w='100%'
              m={0}
              alignItems='center'
              backgroundColor='#262626'
              justifyContent='space-between'
            >
              <Box>
                <Text color='#eee' fontSize={['lg', 'md', 'lg', '2xl', '4xl']} noOfLines={1} fontWeight={700} mb={2}>
                  Main Skills
                </Text>
                <Button background='#ffd100' size={['sm', 'sm', 'xs', 'md']} borderRadius={0}>
                  Know more
                </Button>
              </Box>
              <List
                minW='11em'
                display='grid'
                fontSize={['sm', 'sm', 'sm', 'lg', '2xl']}
                gridTemplateColumns='1fr 1fr'
                alignItems='center'
                justifyContent='center'
                flexWrap='wrap'
                gap='0 1em'
                color='#eee'
                fontWeight='600'
              >
                <ListItem>Javascript</ListItem>
                <ListItem>React</ListItem>
                <ListItem>Next.js</ListItem>
                <ListItem>Typescript</ListItem>
                <ListItem>Node.js</ListItem>
                <ListItem>Css</ListItem>
              </List>
            </Grid>
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
