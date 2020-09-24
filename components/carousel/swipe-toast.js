import gsap from 'gsap';
import { Flex, Icon, Text } from '@chakra-ui/core';
import { useEffect, forwardRef, useImperativeHandle } from 'react';
import { FiChevronLeft } from 'react-icons/fi';

const Toast = forwardRef((props, ref) => {
    useEffect(() => {
        // const from = { duration: 0.2, delay: 1.3, autoAlpha: 0, x: -3 };
        // const to = { autoAlpha: 1, x: 0 };
        // gsap.fromTo(ref.current, from, to);
    }, []);

    const dismiss = () => {
        const opts = { duration: 0.25, autoAlpha: 0, ease: 'power2.inOut' };
        gsap.to(ref.current, opts);
    };

    useImperativeHandle(ref, () => ({ dismiss }));

    return (
        <Flex
            ref={ref}
            py="4px"
            px="gap-half"
            align="center"
            borderRadius="0.25rem"
            bg="rgba(255, 255, 255, 0.7)"
            css={{ backdropFilter: 'blur(5px)' }}
        >
            <Icon as={FiChevronLeft} alignItems="center" mr="8px" mt="1px" />
            <Text>Swipe between images</Text>
        </Flex>
    );
});

export default Toast;
