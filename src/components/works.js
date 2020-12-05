import { Box, Flex, Heading, Text, Button } from '@chakra-ui/core';

import Container from '@/components/container';
import Carousel from '@/components/carousel';

const Works = () => (
  <Box bg="white">
    <SportingLand />
    {/* <RetailSafari /> */}
    <Osca />
  </Box>
);

const SportingLand = () => (
  <Box>
    <Box bg="linear-gradient(#EDF2F7 50%, transparent 50%)">
      <Container px={{ base: 0, md: 'gap' }}>
        <Carousel
          photos={[
            {
              src: '/images/sportingland/desktop.jpg',
              alt: 'sporting.land UI interface',
              width: 1440,
              height: 900,
              priority: true,
              quality: 100,
            },
            {
              src: '/images/sportingland/mobile.jpg',
              alt: 'sporting.land UI interface',
              width: 1440,
              height: 900,
              quality: 100,
            },
          ]}
        />
      </Container>
    </Box>
    <Container>
      <Flex display={{ base: 'block', md: 'flex' }} pt="gap" pb="150px">
        <Box flex="1">
          <Heading size="lg">sporting.land</Heading>
          <Text color="gray.600" my={2}>
            Startup /{' '}
            <Button
              as="a"
              variant="link"
              target="_blank"
              rel="noopener"
              href="https://sporting.land/"
            >
              Visit Site
            </Button>
          </Text>
        </Box>
        <Box flex="2">
          <Text>
            sporting.land is my first attempt at bootstrapping a startup. We are a booking system
            that allows sporting venues to manage their facilities. Currently, we are still in a
            pre-launch phase as we establish an MVP with the help of over 20 venues, across 6
            different sports.
          </Text>
        </Box>
      </Flex>
    </Container>
  </Box>
);

const Osca = () => (
  <Box>
    <Container px={{ base: 0, md: 'gap' }}>
      <Carousel
        photos={[
          {
            src: '/images/osca/mobile.jpg',
            alt: 'Old Scotch Collegians Association UI Design',
            width: 1440,
            height: 900,
            quality: 100,
          },
          {
            src: '/images/osca/desktop.jpg',
            alt: 'Old Scotch Collegians Association UI Design',
            width: 1440,
            height: 900,
            quality: 100,
          },
        ]}
      />
    </Container>
    <Container>
      <Flex display={{ base: 'block', md: 'flex' }} pt="gap" pb="150px">
        <Box flex="1">
          <Heading size="lg">Old Scotch Collegians</Heading>
          <Text color="gray.600" my={2}>
            Freelance Web Design /{' '}
            <Button
              as="a"
              variant="link"
              target="_blank"
              rel="noopener"
              href="https://www.oscanet.com.au/"
            >
              Visit Site
            </Button>
          </Text>
        </Box>
        <Box flex="2">
          <Text>
            The Old Scotch Collegians is the community association for all Scotch College graduates.
            I was responsible for revitalising the associations online presence, starting with a
            redesign of their main website. Acting as their gateway to the public, it was vital that
            the site embodied the values of OSCA, whilst employing modern and intuitive interfaces
            that could be used by Old Boys of all ages.
          </Text>
        </Box>
      </Flex>
    </Container>
  </Box>
);

const RetailSafari = () => (
  <Box id="retail-safari">
    <Container px={{ base: 0, md: 'gap' }}>
      <Carousel
        photos={[
          {
            src: '/images/podac/background/full.jpg',
            alt: 'Podac - Chrome Extension - Homepage',
            width: 1020,
            height: 475,
            quality: 100,
          },
          {
            src: '/images/podac/bookmark/full.jpg',
            alt: 'Podac - Chrome Extension - Bookmarks interface',
            width: 1020,
            height: 475,
            quality: 100,
          },
        ]}
      />
    </Container>
    <Container>
      <Flex display={{ base: 'block', md: 'flex' }} pt="gap" pb="150px" flexWrap="nowrap">
        <Box flex="1">
          <Heading size="lg">Retail Safari</Heading>
          <Text color="gray.600" my={2}>
            Current Employer /{' '}
            <Button
              as="a"
              variant="link"
              target="_blank"
              rel="noopener"
              href="https://www.retailsafari.com.au/"
            >
              Visit Site
            </Button>
          </Text>
        </Box>
        <Box flex="2">
          <Text>
            Retail Safari is an Australian marketing agency connecting businesses with consumers.
            Since November 2019, I have been responsible for leading the team's adoption of newer
            developer technologies for both internal and external business tools. I have now
            overseen the development, deployment, and maintenance of 2 major React PWA's used by
            over 600 employees across the country.
          </Text>
        </Box>
      </Flex>
    </Container>
  </Box>
);

export default Works;
