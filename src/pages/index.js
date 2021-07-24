import * as React from "react"
import { 
  ChakraProvider, 
  Box, 
  Flex, 
  Grid, 
  Divider, 
  VStack,
  Text, 
  Heading, 
  List, 
  ListItem, 
  ListIcon,
} from "@chakra-ui/react"
import Emoji from 'a11y-react-emoji'

const GradCap = () => {
  return <Emoji symbol='🎓' label='graduation cap'/>
}

const Coder = () => {
  return <Emoji symbol='👨‍💻' label='coder' />
}

// markup
const IndexPage = () => {
  return (
      <Flex flexDirection={['col','row']} wrap="true" w='100%' h='100%'>
        <Flex flexDirection='col' items='center' justify='center' w={['100vw','50vw']} h='100%'>
          <VStack spacing={['10px', '20px']} w='100%' ml='5vw' mr='5vw'>
            <Heading w='100%' textAlign='left' fontSize={["44px", "96px"]} >Alex Melvin</Heading>
            <Heading w='100%' textAlign='left' fontSize={["28px", "40px"]} variant="italic" >is a</Heading>
            <Heading w='100%' textAlign='left' fontSize={["32px", "52px"]} color='red.600'>software developer</Heading>
            <Heading w='100%' textAlign='left' fontSize={["28px", "40px"]} variant="italic" >based in</Heading>
            <Heading w='100%' textAlign='left' fontSize={["32px", "52px"]} >Providence, RI</Heading>
            <Divider orientation="horizontal" color='blackAlpha' />
            <List spacing={3}>  
              <ListItem fontSize={["18px", "30px"]}>
                <ListIcon as={GradCap}  />
                {'  '}Computer Science and Philosophy graduate from the University of Maryland, College Park
              </ListItem>
              <ListItem fontSize={["18px", "30px"]}>
                <ListIcon as={Coder}  />
                {'  '}Experienced with JavaScript, React (Web and Native), HTML, CSS, Node.js, and Gatsby.js
              </ListItem>
            </List>
          
           
          </VStack>
        </Flex>
        <Flex flexDirection='col' w={['100vw','50vw']} h='100p'>

        </Flex>
      </Flex>
  )
}

export default IndexPage
