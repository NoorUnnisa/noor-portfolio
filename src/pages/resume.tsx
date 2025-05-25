import { Box, Heading, Text } from '@chakra-ui/react'

export default function Resume() {
  return (
    <Box p={8}>
      <Heading as="h2" size="xl" mb={4}>Resume</Heading>
      <Text>
        {/* Add your resume or a link to download it */}
        Download my <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer">resume</a>.
      </Text>
    </Box>
  )
}