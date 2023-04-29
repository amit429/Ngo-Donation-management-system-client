import { Box, 
    VStack, 
    Text, 
    Button,
    Image,
    Icon,
    useColorModeValue,
    chakra,
    Heading,
    Flex,


} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import about_img from "../../assets/about-image.png";
import React from "react";
import "./About.css";

export default function About() {
    const bg = useColorModeValue("white", "gray.800");
  return (
    <>

<Box pos="relative" overflow="hidden" bg={bg} mt={10} mr={{base: "none", md: 40}}>
      <Box maxW="7xl" mx="auto">
        <Box
          pos="relative"
          pb={{
            base: 8,
            sm: 16,
            md: 20,
            lg: 28,
            xl: 32,
          }}
          maxW={{
            lg: "2xl",
          }}
          w={{
            lg: "full",
          }}
          zIndex={1}
          bg={bg}
          border="solid 1px transparent"
        >
          <Icon
            display={{
              base: "none",
              lg: "block",
            }}
            position="absolute"
            right={0}
            top={0}
            bottom={0}
            h="full"
            w={48}
            color={bg}
            transform="translateX(50%)"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </Icon>
          <Box
            mx="auto"
            maxW={{
              base: "7xl",
            }}
            px={{
              base: 4,
              sm: 6,
              lg: 8,
            }}
            mt={{
              base: 10,
              sm: 12,
              md: 16,
              lg: 20,
              xl: 28,
            }}
          >
            <Box
              w="full"
              textAlign={{
                sm: "center",
                lg: "left",
              }}
              justifyContent="center"
              alignItems="center"
            >
              <chakra.h1
                fontSize={{
                  base: "4xl",
                  sm: "5xl",
                  md: "6xl",
                }}
                letterSpacing="tight"
                lineHeight="short"
                fontWeight="extrabold"
                color="gray.900"
                _dark={{
                  color: "white",
                }}
              >
                <chakra.span
                  display={{
                    base: "block",
                    xl: "inline",
                  }}
                >
                  About Us{" "}
                </chakra.span>
              </chakra.h1>
              <chakra.p
                mt={{
                  base: 3,
                  sm: 5,
                  md: 5,
                }}
                fontSize={{
                  sm: "lg",
                  md: "md",
                }}
                maxW={{
                  sm: "xl",
                }}
                mx={{
                  sm: "auto",
                  lg: 0,
                }}
                color="gray.500"
              >
                Helping Hands is a non-governmental organization (NGO) that aims to make a difference in the lives of underprivileged communities around the world. The NGO has a strong focus on alleviating poverty, providing education and healthcare, and offering disaster relief.<br/><br/>
                In their efforts to combat poverty, Helping Hands works to empower communities by providing access to education and vocational training, as well as by creating income-generating opportunities. They also provide basic necessities like food, water, and shelter to those in need.<br/><br/>
                Helping Hands also provides healthcare services to communities that lack access to basic medical care. They have set up clinics and mobile medical units to provide medical checkups, vaccinations, and other health services.
              </chakra.p>
              <Box
                mt={{
                  base: 5,
                  sm: 8,
                }}
                display={{
                  sm: "flex",
                }}
                justifyContent={{
                  sm: "center",
                  lg: "start",
                }}
              >
                <Box rounded="sm" shadow="sm">
                  <chakra.a
                    w="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    border="solid 1px transparent"
                    fontSize={{
                      base: "md",
                      md: "lg",
                    }}
                    rounded="md"
                    color="white"
                    bg="purple.500"
                    px={{
                      base: 8,
                      md: 10,
                    }}
                    py={{
                      base: 3,
                      md: 4,
                    }}
                    cursor="pointer"
                  >
                    Read More
                  </chakra.a>
                </Box>
                
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        position={{
          lg: "absolute",
        }}
        top={{
          lg: 0,
        }}
        bottom={{
          lg: 0,
        }}
        right={{
          lg: 0,
        }}
        w={{
          lg: "50%",
        }}
        border="solid 1px transparent"
      >
        <Image
          h={[56, 72, 96, 650]}
          w="full"
          fit="cover"
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
          loading="lazy"
        />
      </Box>
    </Box>
      {/* <Box className="about">
        <Box className="about-image">
          <img src={about_img} alt="about-img" />
        </Box>

        <Box className="about-desc">
          <Box>
            <Text
              style={{
                fontSize: "2.3rem",
                fontWeight: "700",
                textAlign: "left",
                color: "white",
              }}
            >
              About Us
            </Text>
          </Box>

          <Box>
            <Text
              style={{
                fontSize: "0.9rem",
                fontFamily: "inherit",
                fontWeight: "500",
                textAlign: "left",
                marginTop: "1rem",
                color: "#3C4048",
                lineHeight: "1.5rem",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry.Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book.
            </Text>
          </Box>

          <Box>
            <Button
              rightIcon={<ArrowForwardIcon />}
              colorScheme="pink"
              variant="solid"
              style={{
                marginTop: "1.5rem",
              }}
            >
              Read More
            </Button>
          </Box>
        </Box>
      </Box> */}
    </>
  );
}
