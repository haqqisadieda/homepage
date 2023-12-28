import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "@/components/articles";
import Section from "@/components/section";
import { GridItem } from "../components/gridItem";

import thumbWork1 from "../../public/images/works/work1.png";

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h4" fontSize={20} mb={4}>
        Popular Posts
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem title="Lawanglangit" thumbnail={thumbWork1} href="/works" />
          <GridItem title="Lawanglangit" thumbnail={thumbWork1} href="/works" />
          <GridItem title="Lawanglangit" thumbnail={thumbWork1} href="/works" />
          <GridItem title="Lawanglangit" thumbnail={thumbWork1} href="/works" />
          <GridItem title="Lawanglangit" thumbnail={thumbWork1} href="/works" />
          <GridItem title="Lawanglangit" thumbnail={thumbWork1} href="/works" />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
);

export default Posts;
