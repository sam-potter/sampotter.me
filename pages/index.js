import { MdContentCopy } from 'react-icons/md';
import { FcCheckmark } from 'react-icons/fc';
import { Box, Heading, Text, Tooltip, Button, useClipboard } from '@chakra-ui/core';

import Works from '@/components/works';
import Container from '@/components/container';

const About = () => {
    const { onCopy, hasCopied } = useClipboard('sam.potter@hotmail.com');

    return (
        <Box bg="gray.100">
            <Container py="100px">
                <Box maxWidth="450px">
                    <Heading size="lg">
                        Hey, I'm{' '}
                        <Text color="primary" display="inline">
                            Sam Potter
                        </Text>
                    </Heading>
                    <Text my="gap">
                        I’m a full-stack web developer from Melbourne, currently working part-time
                        at{' '}
                        <Button
                            as="a"
                            variant="link"
                            href="https://www.retailsafari.com.au/"
                            target="_blank"
                        >
                            Retail Safari
                        </Button>
                        . On my off days, I'm available for freelance web development, design, and
                        consultation, so feel free to get in touch.
                    </Text>
                    <Tooltip
                        hasArrow
                        placement="auto"
                        closeOnClick={false}
                        label={hasCopied ? 'Email copied to clipboard' : 'Copy email'}
                    >
                        <Button
                            onClick={onCopy}
                            variant="secondary"
                            justifyContent="space-between"
                            w={{ base: 'full', sm: 'auto' }}
                            iconSpacing={{ base: 0, sm: 'gap' }}
                            rightIcon={hasCopied ? <FcCheckmark /> : <MdContentCopy />}
                        >
                            <Text>sam.potter@hotmail.com</Text>
                        </Button>
                    </Tooltip>
                </Box>
            </Container>
        </Box>
    );
};

const Home = () => (
    <>
        <About />
        <Works />
    </>
);

export default Home;
