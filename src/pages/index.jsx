import { ArrowDownIcon, AttachmentIcon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
  Fade,
  Flex,
  Heading,
  HStack,
  Link,
  List,
  ListIcon,
  ListItem,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import Emoji from "a11y-react-emoji";
import React, { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
import { projectDataList } from "../assets/project-data";
import Resume from "../assets/resume.pdf";
import { ProjectCard } from "../components/project-card";

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
  const [isMobileScreen] = useMediaQuery("(max-width: 30em)");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showScrollHint, setScrollHint] = useState(false);
  const [mainHeight, setMainHeight] = useState("100vh");

  useEffect(() => {
    if (isMobileScreen) {
      let scrollTimeout;
      const onScroll = () => {
        setTimeout(() => {
          if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
          }
          scrollTimeout = window.requestAnimationFrame(() =>
            setScrollPosition(window.scrollY)
          );
        }, [500]);
      };
      window.addEventListener("scroll", onScroll);
      setMainHeight(`${window.innerHeight}px`);

      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    }
    return () => {};
  }, [isMobileScreen]);

  useEffect(() => {
    const onTimeout = () => {
      setScrollHint(true);
    };
    if (isMobileScreen && scrollPosition <= 20) {
      setTimeout(onTimeout, [2000]);
    } else {
      setScrollHint(false);
    }
    return () => clearTimeout(onTimeout);
  }, [isMobileScreen, scrollPosition]);

  return (
    <Flex
      flexDirection={["column", "column", "row"]}
      wrap="true"
      w="100vw"
      h="100%"
      gap={["24px", "32px", "0px"]}
    >
      <Flex
        flexDirection="column"
        items="center"
        justify="center"
        w={["100%", "100%", "64%"]}
        h={[mainHeight, mainHeight, "100%"]}
        position={["relative", "relative", "fixed"]}
        top="0"
        left="0"
        pl={["5%", "5%", "10%"]}
        pr={["5%", "5%", "10%"]}
      >
        <VStack spacing={["10px", "20px"]} w="100%">
          <Heading w="100%" textAlign="left" fontSize={["60px", "72px"]}>
            Alex Melvin
          </Heading>
          <Text
            w="100%"
            textAlign="left"
            fontSize={["24px", "30px"]}
            variant="italic"
          >
            is a
          </Text>
          <Text
            w="100%"
            textAlign="left"
            fontSize={["32px", "40px"]}
            color="red.600"
          >
            software developer
          </Text>
          <Text
            w="100%"
            textAlign="left"
            fontSize={["24px", "30px"]}
            variant="italic"
          >
            based in
          </Text>
          <Heading w="100%" textAlign="left" fontSize={["20px", "40px"]}>
            Providence, RI
          </Heading>
          <Divider orientation="horizontal" color="blackAlpha" />
          <List spacing={3}>
            <ListItem fontSize={["16px", "20px"]}>
              <ListIcon as={CoderEmoji} />
              {"  "} Software Developer at Amica Mutual Insurance.
            </ListItem>
            <ListItem fontSize={["16px", "20px"]}>
              <ListIcon as={GradCapEmoji} />
              {"  "}Computer Science and Philosophy graduate from the University
              of Maryland, College Park
            </ListItem>
            <ListItem fontSize={["16px", "20px"]}>
              <ListIcon as={ReactEmoji} />
              {"  "}Skilled in front-end development with React, Redux,
              Typescript, HTML, and CSS.
            </ListItem>
          </List>
          <HStack w="100%" h="60px" spacing="20px">
            <Box
              height={["44px", "52px", "60px"]}
              width={["44px", "52px", "60px"]}
            >
              <SocialIcon
                style={{ height: "100%", width: "100%" }}
                url="https://www.linkedin.com/in/alex-melvin-075496204/"
              />
            </Box>
            <Box
              height={["44px", "52px", "60px"]}
              width={["44px", "52px", "60px"]}
            >
              <SocialIcon
                style={{ height: "100%", width: "100%" }}
                url="https://github.com/amelv"
              />
            </Box>
            <Box
              height={["44px", "52px", "60px"]}
              width={["44px", "52px", "60px"]}
            >
              <SocialIcon
                style={{ height: "100%", width: "100%" }}
                url="mailto:amelv@protonmail.com"
              />
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              height={["44px", "52px", "60px"]}
            >
              <Link
                color="cyan.500"
                isExternal
                fontSize={["18px", "24px"]}
                href={Resume}
                download="Alex Melvin Software Developer Resume"
              >
                Resume
                <AttachmentIcon mx="5px" />
              </Link>
            </Box>
          </HStack>
        </VStack>

        <Fade
          in={showScrollHint}
          style={{ zIndex: -1 }}
          transition="all 2s ease"
        >
          <VStack
            w="90%"
            position="absolute"
            alignItems="center"
            justifyContent="center"
            bottom="20px"
          >
            <Text>Projects Below</Text>
            <ArrowDownIcon />
          </VStack>
        </Fade>
      </Flex>
      <VStack
        spacing={["20px", "40px"]}
        position={["relative", "relative", "absolute"]}
        top="0"
        left={["0%", "0%", "64%"]}
        w={["100%", "100%", "36%"]}
        h="100p"
        pl={["10%", "5%", "0%"]}
        pr="10%"
      >
        <Heading w="100%" textAlign="center" fontSize={["32px", "52px"]}>
          Projects
        </Heading>
        <Divider orientation="horizontal" color="blackAlpha" />
        {projectDataList.map((project) => (
          <ProjectCard {...project} />
        ))}
      </VStack>
    </Flex>
  );
};

export default IndexPage;
