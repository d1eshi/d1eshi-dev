import React, { FC, ReactNode } from 'react'
import { Footer, Navbar } from '../ui'

interface Props {
  children: ReactNode
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
