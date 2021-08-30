import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = {
  styles: {
    global: {
      body: {
        padding: '0',
      },
    },
  },
  fonts: {
    body: 'Ubuntu, Helvetica, Arial, sans-serif',
    heading: 'Ubuntu, Helvetica, Arial, sans-serif',
    mono: 'monospace',
  },
  fontWeights: {
    normal: 400,
    regular: 400,
    semibold: 500,
    bold: 700,
  },
};

const customTheme = extendTheme({ config, theme });

export default customTheme;
