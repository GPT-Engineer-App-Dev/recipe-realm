import { Container, Text, VStack, Box, Heading, Button, Image, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Box as="header" textAlign="center" py={10}>
        <Heading as="h1" size="2xl" mb={4}>Welcome to Recipe Haven</Heading>
        <Text fontSize="xl" mb={6}>Discover and share amazing recipes from around the world.</Text>
        <Button as={Link} to="/submit-recipe" colorScheme="teal" size="lg">Submit Your Recipe</Button>
      </Box>

      <Box as="section" py={10}>
        <Heading as="h2" size="xl" mb={6} textAlign="center">Popular Recipes</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Recipe 1" />
            <Box p={6}>
              <Heading as="h3" size="md" mb={2}>Recipe Title 1</Heading>
              <Text>Short description of the recipe.</Text>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Recipe 2" />
            <Box p={6}>
              <Heading as="h3" size="md" mb={2}>Recipe Title 2</Heading>
              <Text>Short description of the recipe.</Text>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Recipe 3" />
            <Box p={6}>
              <Heading as="h3" size="md" mb={2}>Recipe Title 3</Heading>
              <Text>Short description of the recipe.</Text>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Index;