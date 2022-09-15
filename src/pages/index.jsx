import * as React from "react";
import {
  ChakraProvider,
  Box,
  Flex,
  Button,
  Divider,
  VStack,
  Text,
  Heading,
  List,
  ListItem,
  ListIcon,
  HStack,
} from "@chakra-ui/react";
import Emoji from "a11y-react-emoji";
import { ProjectCard } from "../components/project-card";
import { projectDataList } from "../assets/project-data";
import { SocialIcon } from "react-social-icons";

const GradCapEmoji = () => {
  return <Emoji symbol="🎓" label="graduation cap" />;
};

const CoderEmoji = () => {
  return <Emoji symbol="💻" label="coder" />;
};

const ReactEmoji = () => {
  return <Emoji symbol="⚛️" label="react.js" />;
};

// markup
const IndexPage = () => {
  return (
    <Flex
      flexDirection={["column", "row"]}
      wrap="true"
      w="100%"
      h="100%"
      gap={["32px", "0px"]}
    >
      <Flex
        flexDirection="column"
        items="center"
        justify="center"
        w={["100vw", "50vw"]}
        h="100%"
        pl="5vw"
        pr={["5vw", "0vw"]}
      >
        <VStack spacing={["10px", "20px"]} w="100%" ml="5vw">
          <Heading w="100%" textAlign="left" fontSize={["44px", "96px"]}>
            Alex Melvin
          </Heading>
          <Heading
            w="100%"
            textAlign="left"
            fontSize={["28px", "40px"]}
            variant="italic"
          >
            is a
          </Heading>
          <Heading
            w="100%"
            textAlign="left"
            fontSize={["32px", "52px"]}
            color="red.600"
          >
            software developer
          </Heading>
          <Heading
            w="100%"
            textAlign="left"
            fontSize={["28px", "40px"]}
            variant="italic"
          >
            based in
          </Heading>
          <Heading w="100%" textAlign="left" fontSize={["32px", "52px"]}>
            Providence, RI
          </Heading>
          <Divider orientation="horizontal" color="blackAlpha" />
          <List spacing={3}>
            <ListItem fontSize={["18px", "30px"]}>
              <ListIcon as={CoderEmoji} />
              {"  "} Software Developer at Amica Mutual Insurance.
            </ListItem>
            <ListItem fontSize={["18px", "30px"]}>
              <ListIcon as={GradCapEmoji} />
              {"  "}Computer Science and Philosophy graduate from the University
              of Maryland, College Park
            </ListItem>
            <ListItem fontSize={["18px", "30px"]}>
              <ListIcon as={ReactEmoji} />
              {"  "}Skilled in front-end development with React, Redux,
              Typescript, HTML, and CSS.
            </ListItem>
          </List>
          <HStack w="100%" h="60px" spacing="20px">
            <SocialIcon
              style={{ height: "60px", width: "60px" }}
              url="https://www.linkedin.com/in/alex-melvin-075496204/"
            />
            <SocialIcon
              style={{ height: "60px", width: "60px" }}
              url="https://github.com/amelv"
            />
            <SocialIcon
              style={{ height: "60px", width: "60px" }}
              url="mailto:amelv@protonmail.com"
            />
          </HStack>
        </VStack>
      </Flex>
      <Flex
        flexDirection="column"
        w={["100vw", "50vw"]}
        h="100p"
        pl="5vw"
        pr="5vw"
      >
        <VStack spacing={["20px", "40px"]} w="100%">
          <Heading w="100%" textAlign="center" fontSize={["32px", "52px"]}>
            Projects
          </Heading>
          <Divider orientation="horizontal" color="blackAlpha" />
          {projectDataList.map((project) => (
            <ProjectCard {...project} />
          ))}
        </VStack>
      </Flex>
    </Flex>
  );
};

export default IndexPage;
