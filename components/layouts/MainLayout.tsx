import { Container } from '@chakra-ui/react'
import React, { FC, ReactNode } from 'react'
import { Footer, Navbar } from '../ui'

interface Props {
  children: ReactNode
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Container h='100vh' maxW='100vw' p={0} m={0}>
        <Navbar />
        {children}
      </Container>
    </>
  )
}
