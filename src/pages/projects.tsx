import { Box, Heading, Text } from '@chakra-ui/react'

export default function Projects() {
  return (
    <Box p={8}>
      <Heading as="h2" size="xl" mb={4}>Projects</Heading>
      <Text>
        {/* List your projects here */}
        Project 1, Project 2, ...
      </Text>
    </Box>
  )
}