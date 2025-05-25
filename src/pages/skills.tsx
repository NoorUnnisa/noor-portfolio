import { Box, Heading, List, ListItem } from '@chakra-ui/react'

export default function Skills() {
  return (
    <Box p={8}>
      <Heading as="h2" size="xl" mb={4}>Skills</Heading>
      <List spacing={2}>
        <ListItem>JavaScript / TypeScript</ListItem>
        <ListItem>React / Next.js</ListItem>
        <ListItem>Node.js / Express</ListItem>
        <ListItem>Python</ListItem>
        <ListItem>Machine Learning (AI)</ListItem>
        {/* Add more skills */}
      </List>
    </Box>
  )
}