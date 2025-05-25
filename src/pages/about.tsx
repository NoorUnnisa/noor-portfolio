import { Box, Heading, Text } from '@chakra-ui/react'

export default function About() {
  return (
    <Box p={8}>
      <Heading as="h2" size="xl" mb={4}>About Me</Heading>
      <Text>
        {/* Add your bio here */}
        I am a passionate Full Stack Developer and AI enthusiast...
      </Text>
    </Box>
  )
}