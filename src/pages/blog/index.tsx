import { Box, Heading, Text } from '@chakra-ui/react'

export default function Blog() {
  return (
    <Box p={8}>
      <Heading as="h2" size="xl" mb={4}>Blog</Heading>
      <Text>
        {/* List or render your blog posts here */}
        Blog coming soon!
      </Text>
    </Box>
  )
}