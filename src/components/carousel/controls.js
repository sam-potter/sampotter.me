import { IconButton, Flex, Text } from '@chakra-ui/core';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const Controls = ({ currentSlide, photos, prevSlide, nextSlide, ...rest }) => (
    <Flex
        p="12px 5px"
        top="0"
        left="0"
        w="full"
        h="full"
        pos="absolute"
        direction="column"
        pointerEvents="none"
        justify="space-between"
        {...rest}
    >
        <Flex justify="flex-end">
            <Flex
                py="2px"
                px="8px"
                bg="rgba(255, 255, 255, 0.7)"
                css={{ backdropFilter: 'blur(5px)' }}
                borderRadius="0.25rem"
            >
                <Text>
                    {currentSlide + 1} / {photos.length}
                </Text>
            </Flex>
        </Flex>
        <Flex
            justify="space-between"
            pointerEvents="visible"
            display={{ base: 'none', md: 'flex' }}
        >
            <IconButton
                size="sm"
                variant="blurred"
                onClick={prevSlide}
                isDisabled={currentSlide <= 0}
                icon={<FiChevronLeft size="22px" />}
            />
            <IconButton
                size="sm"
                variant="blurred"
                onClick={nextSlide}
                isDisabled={currentSlide >= photos.length - 1}
                icon={<FiChevronRight size="22px" />}
            />
        </Flex>
    </Flex>
);

export default Controls;
