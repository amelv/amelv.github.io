import * as React from 'react'
import { Link } from 'gatsby'
import { 
    Box, 
    Center,
    Flex, 
    Divider, 
    Stack,
    Text, 
    Code,
    Menu,
    MenuButton,
    MenuList,
    MenuItem, 
  } from "@chakra-ui/react"
const Layout = ({children }) => {
  return (
    <main>
      <Center w="100%" h={[50, 75]} bg="gray.400" boxShadow="base" >
        <Code bg="gray.400" fontSize={['20px','40px']}>amelv personal website</Code>
      </Center>
      <Box w="100%" m="0 auto">
        {children}
      </Box>
    </main>
  )
}
export default Layout