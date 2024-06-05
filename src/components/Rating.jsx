import { useState } from "react";
import { HStack, IconButton } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const Rating = ({ rating, setRating }) => {
  const [hover, setHover] = useState(null);

  return (
    <HStack>
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;

        return (
          <IconButton
            key={index}
            icon={<StarIcon />}
            color={ratingValue <= (hover || rating) ? "teal.500" : "gray.300"}
            onClick={() => setRating(ratingValue)}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(null)}
            variant="ghost"
            aria-label={`${ratingValue} Stars`}
          />
        );
      })}
    </HStack>
  );
};

export default Rating;