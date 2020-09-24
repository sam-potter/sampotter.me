import { extendTheme } from '@chakra-ui/core';

const custom = {
    colors: {
        primary: '#0070f3',
        'primary-hover': '#0070f3',
    },
    shadows: {
        md: '0 5px 10px rgba(0, 0, 0, 0.12)',
    },
    space: {
        gap: '24px',
        'gap-half': '12px',
    },
    components: {
        Button: {
            variants: {
                secondary: {
                    bg: 'white',
                    shadow: 'sm',
                    fontWeight: 400,
                },
                link: {
                    p: 0,
                    mx: 0,
                    h: 'auto',
                    color: 'primary',
                    fontWeight: 'normal',
                    verticalAlign: 'none',
                    _hover: { color: 'primary-hover' },
                },
                blurred: {
                    bg: 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(5px)',
                    pointer: 'cursor',
                },
            },
        },
    },
};

export default extendTheme(custom);
