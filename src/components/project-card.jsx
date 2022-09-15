import React from "react";
import {
  ChakraProvider,
  Box,
  Image,
  Badge,
  Text,
  Heading,
} from "@chakra-ui/react";
import { Link } from "gatsby";

export const ProjectCard = (props) => {
  return (
    <Box
      as={Link}
      to={props.url}
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Image src={props.imageUrl} alt="" />

      <Box p="6">
        <Badge borderRadius="full" px="2" colorScheme="teal">
          {props.status}
        </Badge>

        <Heading
          mt="1"
          fontWeight="semibold"
          as="h3"
          fontSize="2xl"
          lineHeight="tight"
          noOfLines={2}
        >
          {props.name}
        </Heading>

        <Text fontSize="lg">{props.caption}</Text>
      </Box>
    </Box>
  );
};
