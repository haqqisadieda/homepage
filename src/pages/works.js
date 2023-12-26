import { Container, Box, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "@/components/section";
import Layout from "@/components/articles";
import { WorkGridItem } from "@/components/gridItem";

import thumbWork1 from "../../public/images/works/work1.png";

const Work = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="lawanglangit"
              title="Lawang Langit"
              thumbnail={thumbWork1}
            >
              Lawang Langit Homepage for Fundarising purpose, this just
              prototype so it&apos;s not complete yet. My first Frontend
              project.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Work;
