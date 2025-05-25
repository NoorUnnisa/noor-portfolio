import { Box, Heading, Text } from '@chakra-ui/react'

export default function Contact() {
  return (
    <Box p={8}>
      <Heading as="h2" size="xl" mb={4}>Contact</Heading>
      <Text>
        {/* Add your contact details or a contact form here */}
        Email: your.email@example.com
      </Text>
    </Box>
  )
}