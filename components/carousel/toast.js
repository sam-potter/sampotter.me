import { motion } from 'framer-motion';
import { Flex, Icon, Text } from '@chakra-ui/core';
import { FiChevronLeft } from 'react-icons/fi';

const MotionFlex = motion.custom(Flex);

const Toast = () => (
    <MotionFlex
        py="4px"
        px="gap-half"
        align="center"
        borderRadius="0.25rem"
        bg="rgba(255, 255, 255, 0.7)"
        css={{ backdropFilter: 'blur(5px)' }}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0, transition: { delay: 1.3 } }}
        exit={{ opacity: 0, x: -10 }}
        transition={{ duration: 0.2 }}
    >
        <Icon as={FiChevronLeft} alignItems="center" mr="8px" mt="1px" />
        <Text>Swipe between images</Text>
    </MotionFlex>
);

export default Toast;
