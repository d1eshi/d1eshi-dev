import React, { FC } from 'react'
import NextLink from 'next/link'
import { Button, Text } from '@chakra-ui/react'

interface Props {
  path: string
  text: string
}

export const CustomLink: FC<Props> = ({ path, text }) => {
  return (
    <NextLink href={path} passHref>
      <Button as='a' aria-label={text}>
        <Text fontWeight='semibold' casing='capitalize'>
          {text}
        </Text>
      </Button>
    </NextLink>
  )
}
