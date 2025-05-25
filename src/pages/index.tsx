import { Box, Heading, Text } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box p={8}>
      <Heading as="h1" size="2xl" mb={4}>
        Hi, I'm NoorUnnisa
      </Heading>
      <Text fontSize="xl">
        Full Stack Developer & Aspiring AI Engineer. Welcome to my portfolio!
      </Text>
    </Box>
  )
}