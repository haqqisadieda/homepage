import { Container, Badge, Link, List, ListItem, Icon } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "@/components/articles";
import { AiFillGithub } from "react-icons/ai";

const Work = () => {
  return (
    <Layout title="Lawanglangit">
      <Container>
        <Title>
          Lawanglangit <Badge>2022</Badge>
        </Title>
        <P>
          A prototype fundraising application, first fullstack app for propose
          purpose.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="http://lawanglangit-homepage.vercel.app/" isExternal>
              http://lawanglangit-homepage.vercel.app/{" "}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source Code</Meta>
            <Link
              href="https://github.com/haqqisadieda/lawanglangit-homepage"
              display="inline-flex"
              alignItems="center"
            >
              <Icon as={AiFillGithub} w={4} h={4} mr={1} />
              Github
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NextJS, Tailwind, Vercel</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/work1.png" alt="Lawanglangit" />
      </Container>
    </Layout>
  );
};

export default Work;
