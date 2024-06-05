import { useState } from "react";
import { Container, Box, Heading, FormControl, FormLabel, Input, Textarea, Button, Image, VStack } from "@chakra-ui/react";

const SubmitRecipe = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ title, ingredients, instructions, image });
  };

  return (
    <Container maxW="container.md" p={4}>
      <Box as="header" textAlign="center" py={10}>
        <Heading as="h1" size="2xl" mb={4}>Submit Your Recipe</Heading>
      </Box>
      <Box as="form" onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="title" isRequired>
            <FormLabel>Recipe Title</FormLabel>
            <Input 
              type="text" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              placeholder="Enter the recipe title" 
            />
          </FormControl>
          <FormControl id="ingredients" isRequired>
            <FormLabel>Ingredients</FormLabel>
            <Textarea 
              value={ingredients} 
              onChange={(e) => setIngredients(e.target.value)} 
              placeholder="List the ingredients" 
            />
          </FormControl>
          <FormControl id="instructions" isRequired>
            <FormLabel>Instructions</FormLabel>
            <Textarea 
              value={instructions} 
              onChange={(e) => setInstructions(e.target.value)} 
              placeholder="Describe the preparation steps" 
            />
          </FormControl>
          <FormControl id="image">
            <FormLabel>Image Upload</FormLabel>
            <Input 
              type="file" 
              accept="image/*" 
              onChange={handleImageChange} 
            />
            {image && <Image src={image} alt="Recipe Image" mt={4} />}
          </FormControl>
          <Button type="submit" colorScheme="teal" size="lg" width="full">Submit Recipe</Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default SubmitRecipe;