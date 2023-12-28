import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";

import Section from "@/components/section";
import Paragraph from "@/components/paragraph";
import Layout from "@/components/articles";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "@/components/bio";
import NextLink from "next/link";
import { GridItem } from "@/components/gridItem";
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

export default function Home() {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a Fullstack Developer from Indonesia.
        </Box>

        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Pandega Haqqi Sadieda
            </Heading>
            <p>Tutorial Hunter, Always Learning and Open to Work.</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderRadius="full"
              borderWidth={2}
              maxWidth="100px"
              display="inline-block"
              src="/images/profile.jpg"
              alt="Profile image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Pandega is a Tutorial Hunter and Open to Work. For now I work for
            PT. Bina San Prima as Staff System Development. My current task is
            to inform IT Development if there are some errors or data changings
            from Branch Office. On weekend he usually learning how to code,
            playing some games, and reading some books. Currently, he is
            learning Fullstack Development especially Javascript. You can see
            his journey of learning in his{" "}
            <Link href="https://github.com/haqqisadieda" isExternal>
              Github
            </Link>
            {""}.
          </Paragraph>
          <Box align="center" my={4}>
            <Link as={NextLink} href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Journey
              </Button>
            </Link>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1994</BioYear>
            Born in Sumedang, Indonesia.
          </BioSection>
          <BioSection>
            <BioYear>2015</BioYear>
            Intern at PT. Dirgantara Indonesia as Junior Web Developer.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Complete Bachelor Degree at STMIK Amik Bandung
          </BioSection>
          <BioSection>
            <BioYear>2022 to present</BioYear>
            Staff System Development at PT. Bina San Prima
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>Music, Games, Reading, and Coding.</Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Online
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/haqqisadieda" isExternal>
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @haqqisadieda
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/pandegahaqqisadieda/"
                isExternal
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoLinkedin />}
                >
                  Pandega Haqqi Sadieda
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.instagram.com/pndg__/" isExternal>
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoInstagram />}
                >
                  @pndg__
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
}
