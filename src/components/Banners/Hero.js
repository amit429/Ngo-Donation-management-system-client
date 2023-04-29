import React from "react";
import "./Hero.css";
import { Box, Text, Button, HStack, VStack , chakra , Flex , Stack , Heading, Image} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Hero_img from "../../assets/Hero-image.png";
import {
    motion,
    useScroll,
    useTransform,
  } from "framer-motion";

export default function Hero(props) {
  const navigate = useNavigate();
  return (
    <>
         <Stack
        as={motion.div}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          default: {
            duration: 1,
            ease: "easeInOut",
          },
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001
          }
        }}
        minH={"80vh"}
        direction={{ base: "column", md: "row" }}
        style={{
          padding: "2rem",
        }}
      >
        <Flex>
          <Box margin={"auto"}>
            <Image
              className="animation"
              src={props.gif}
            ></Image>
          </Box>
        </Flex>
        <Flex p={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              textAlign={{ base: "center", md: "left" }}
            >
              <Text
                as={"span"}
                position={"relative"}
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                textAlign={"center"}
              >
                Helping Hands
              </Text>
              <br />{" "}
              <Text color={"blue.900"} as={"span"} fontSize={{base: "xl", md: "3xl", lg: "4xl"}}>
                {props.text}
              </Text>{" "}
            </Heading>
            <Text fontSize={{ base: "sm", md: "md" }} color={"gray.500"}
              textAlign={{ base: "center", md: "left" }}
            >
             Helping Hands is an NGO dedicated to providing support and assistance to underprivileged communities in various parts of the world. The organization's focus is on addressing issues related to poverty, education, healthcare, and disaster relief. Helping Hands works towards creating sustainable solutions to these challenges by empowering individuals and communities with the necessary resources and tools.
            </Text>
          </Stack>
        </Flex>
      </Stack>
      {/* <Box className="main">
        <Box className="desc">
          <VStack>
            <Text
              style={{
                fontSize: "1.3rem",
                fontWeight: "bold",
                fontFamily: "sans-serif",
                marginLeft: "-12rem",
              }}
            >
              Welcome to the{" "}
              <span style={{ color: "#E7AB79" }}>Helping - Hands</span>
            </Text>

            <Text
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                fontFamily: "sans-serif",
                textAlign: "left",
              }}
            >
              Make someone's life better with a little contribution
            </Text>

            <Text
              style={{
                fontSize: "0.8rem",
                fontFamily: "inherit",
                textAlign: "left",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry.
            </Text>
            <Box className="buttons">
              <HStack spacing={19}>
                <Button
                  colorScheme="pink"
                  variant="solid"
                  style={{
                    marginLeft: "-10rem",
                  }}
                  onClick={() => {
                    navigate("/ngo");
                  }}
                >
                  Make a Donation
                </Button>

                <Button colorScheme="green">Volunteer for a Cause</Button>
              </HStack>
            </Box>
          </VStack>
        </Box>
        <Box className="img">
          <img src={Hero_img} alt="hero-img" width="600px" height="1000px" />
        </Box>
      </Box> */}
    </>
  );
}
