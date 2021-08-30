import Image from 'next/image';
import {
  Box,
  chakra,
  Flex,
  Icon,
  IconButton,
  Stack,
  Tooltip,
  useColorMode,
} from '@chakra-ui/react';
import {
  RiWhatsappLine,
  RiInstagramLine,
  RiFacebookBoxFill,
} from 'react-icons/ri';
import { FiMoon, FiSun } from 'react-icons/fi';
import Head from 'next/head';

function SwitchColorModeButton(): JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Tooltip
      hasArrow
      shouldWrapChildren
      label={colorMode === 'light' ? 'Dark mode' : 'Light mode'}
      placement="left"
    >
      <IconButton
        onClick={toggleColorMode}
        aria-label={colorMode === 'light' ? 'Dark mode' : 'Light mode'}
        icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
        variant="ghost"
      />
    </Tooltip>
  );
}

export default function Home(): JSX.Element {
  const { colorMode } = useColorMode();

  return (
    <>
      <Head>
        <title>Innovate Segurança Eletrônica e TI.</title>
      </Head>
      <Flex
        direction="column"
        width="100%"
        height="100%"
        minHeight="100vh"
        bgColor={colorMode === 'light' ? 'gray.50' : '#201E1F'}
        position="relative"
      >
        <Box position="absolute" top="1rem" right="1rem">
          <SwitchColorModeButton />
        </Box>
        <Flex
          className="1"
          direction="column"
          flex="1"
          alignItems="center"
          justifyContent="center"
          width="100%"
          maxW="820px"
          margin="0 auto"
          p={{ base: '2rem', md: '0' }}
        >
          <Image
            src={
              colorMode === 'light'
                ? '/img/logo-lightmode.png'
                : '/img/logo-darkmode.png'
            }
            width={800}
            height={175}
          />
          <Box marginTop="3rem">
            <Stack direction="row" spacing="2rem">
              <chakra.a
                display="block"
                target="_blank"
                href="https://api.whatsapp.com/send/?phone=5583988392487&text&app_absent=0"
                transition="all 0.2s ease"
                _hover={{
                  color: '#DC9B25',
                }}
              >
                <Icon as={RiWhatsappLine} boxSize="4rem" />
              </chakra.a>

              <chakra.a
                display="block"
                target="_blank"
                href="https://www.instagram.com/innovatejpa/"
                transition="all 0.2s ease"
                _hover={{
                  color: '#DC9B25',
                }}
              >
                <Icon as={RiInstagramLine} boxSize="4rem" />
              </chakra.a>

              <chakra.a
                display="block"
                target="_blank"
                href="https://www.facebook.com/innovate.jpa/"
                transition="all 0.2s ease"
                _hover={{
                  color: '#DC9B25',
                }}
              >
                <Icon as={RiFacebookBoxFill} boxSize="4rem" />
              </chakra.a>
            </Stack>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
