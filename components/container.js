import { Box } from '@chakra-ui/core';

const Container = ({ children, ...rest }) => (
    <Box mx="auto" maxWidth="1040px" px="20px" {...rest}>
        {children}
    </Box>
);

export default Container;
