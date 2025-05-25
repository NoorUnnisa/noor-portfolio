import { Box, Flex, HStack, Link, IconButton, useColorMode } from '@chakra-ui/react'
import NextLink from 'next/link'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Resume', path: '/resume' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Education', path: '/education' },
  { name: 'Blog', path: '/blog' },
]

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box bg={colorMode === 'dark' ? 'black' : 'white'} px={4} shadow="md">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <HStack spacing={8} alignItems="center">
          {links.map(link => (
            <Link
              as={NextLink}
              key={link.name}
              href={link.path}
              px={2}
              py={1}
              rounded="md"
              _hover={{ textDecoration: 'none', bg: colorMode === 'dark' ? 'gray.700' : 'gray.200' }}
              fontWeight="medium"
            >
              {link.name}
            </Link>
          ))}
        </HStack>
        <IconButton
          size="md"
          aria-label="Toggle color mode"
          onClick={toggleColorMode}
          icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
        />
      </Flex>
    </Box>
  )
}