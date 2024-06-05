import { Box, Flex, Link, Spacer, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4} py={2} color="white">
      <Flex align="center" maxW="container.xl" mx="auto">
        <Link as={RouterLink} to="/" fontSize="xl" fontWeight="bold" mr={5}>
          Recipe Haven
        </Link>
        <Spacer />
        <Flex>
          <Link as={RouterLink} to="/" mr={4}>
            Home
          </Link>
          <Link as={RouterLink} to="/recipes" mr={4}>
            Recipes
          </Link>
          <Link as={RouterLink} to="/submit-recipe" mr={4}>
            Submit Recipe
          </Link>
          <Link as={RouterLink} to="/contact" mr={4}>
            Contact
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;