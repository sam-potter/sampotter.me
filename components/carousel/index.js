import { Box, Flex } from '@chakra-ui/core';
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

import Controls from './controls';
import Image from '../image';
import Toast from './toast';
import { AnimatePresence } from 'framer-motion';

const useToast = () => {
    const [shouldShow, setVisibility] = useState(true);

    useEffect(() => {
        const dismissedBefore = localStorage.getItem('toastDismissed');
        dismissedBefore && setVisibility(false);
    });

    const dismissToast = () => {
        localStorage.setItem('toastDismissed', true);
        setVisibility(false);
    };

    return { shouldShow, dismissToast };
};

const Carousel = ({ photos }) => {
    const { ref, inView } = useInView({ threshold: 1, triggerOnce: true });
    const { shouldShow, dismissToast } = useToast();
    const [currentSlide, setCurrentSlide] = useState(0);

    const carousel = useRef();

    useEffect(() => {
        carousel.current.addEventListener('scroll', onScroll);
        return () => carousel.current.removeEventListener('scroll', onScroll);
    });

    const nextSlide = () => {
        const target = currentSlide + 1;
        carousel.current.scrollLeft = target * carousel.current.offsetWidth;
    };

    const prevSlide = () => {
        const target = currentSlide - 1;
        carousel.current.scrollLeft = target * carousel.current.offsetWidth;
    };

    const onScroll = e => {
        inView && shouldShow && dismissToast();
        const s = Math.round(e.target.scrollLeft / e.target.offsetWidth);
        currentSlide !== s && setCurrentSlide(s);
    };

    return (
        <Box position="relative" ref={ref}>
            <Flex
                h="full"
                w="full"
                ref={carousel}
                overflow="auto"
                position="relative"
                css={{
                    scrollbarWidth: 'none',
                    scrollBehavior: 'smooth',
                    scrollSnapType: 'x mandatory',
                }}
            >
                <Box
                    pos="absolute"
                    left="5px"
                    bottom="5px"
                    zIndex="1"
                    // display={{ base: 'block', md: 'none' }}
                >
                    <AnimatePresence>{inView && shouldShow && <Toast />}</AnimatePresence>
                </Box>
                {photos.map(props => (
                    <Box
                        w="full"
                        h="full"
                        flex="0 0 100%"
                        css={{ scrollSnapAlign: 'center' }}
                        key={props.src}
                    >
                        <Image {...props} />
                    </Box>
                ))}
            </Flex>
            <Controls
                photos={photos}
                prevSlide={prevSlide}
                nextSlide={nextSlide}
                currentSlide={currentSlide}
            />
        </Box>
    );
};

export default Carousel;
