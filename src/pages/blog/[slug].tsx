import { useRouter } from 'next/router'
import { Box, Heading, Text } from '@chakra-ui/react'

export default function BlogPost() {
  const router = useRouter()
  const { slug } = router.query

  return (
    <Box p={8}>
      <Heading as="h2" size="xl" mb={4}>
        Blog Post: {slug}
      </Heading>
      <Text>
        {/* Render blog post content based on slug */}
        Coming soon!
      </Text>
    </Box>
  )
}