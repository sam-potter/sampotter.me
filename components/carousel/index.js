import { Box, Flex } from '@chakra-ui/core';
import { useState, useEffect, useRef } from 'react';
// import { InView } from 'react-intersection-observer';

import Controls from './controls';
import Image from '../image';
// import Toast from './swipe-toast';

const Carousel = ({ photos }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    // const [showToast, setShowToast] = useState(false);

    const carousel = useRef();
    // const toast = useRef();

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
        // if (showToast) {
        //     // toast.current.dismiss();
        //     setTimeout(() => setShowToast(false), 1250);
        // }
        const s = Math.round(e.target.scrollLeft / e.target.offsetWidth);
        currentSlide !== s && setCurrentSlide(s);
    };

    return (
        // <InView onChange={setShowToast} threshold={1} triggerOnce>
        <Box position="relative">
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
                {/* <Box
                        pos="absolute"
                        left="5px"
                        bottom="5px"
                        zIndex="1"
                        display={{ base: 'block', md: 'none' }}
                    >
                        {showToast && <Toast ref={toast} />}
                    </Box> */}
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
        // </InView>
    );
};

export default Carousel;
