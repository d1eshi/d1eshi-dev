import { Badge, Box, Container, Grid, GridItem, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { MainLayout } from '../components/layouts'

const Home: React.FC = () => {
  return (
    <MainLayout>
      <Container minH='100vh' maxW='container.xl'>
        <Grid templateColumns='repeat(2, 1fr)' h='calc(100vh - 6em)'>
          <GridItem h='100%' border='1px'>
            <Text fontSize='6xl'>
              Hi! I Am{' '}
              <Badge variant='solid' bg='brand.500' size='md'>
                Developer
              </Badge>{' '}
              <br /> Diego Silva
            </Text>
          </GridItem>
          <GridItem w='100%' border='1px' className={`image-container`}>
            <Image src='/profile.jpg' layout='fill' alt='image of Diego Silva' className={`image`} />
          </GridItem>
        </Grid>
      </Container>
    </MainLayout>
  )
}

export default Home
