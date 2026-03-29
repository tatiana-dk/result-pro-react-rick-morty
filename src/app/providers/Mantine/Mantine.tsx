import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import type { ReactNode } from 'react';

const theme = createTheme({
  colors: {
    // Add your color
    deepBlue: [
      '#eef3ff',
      '#dce4f5',
      '#b9c7e2',
      '#94a8d0',
      '#748dc1',
      '#5f7cb8',
      '#5474b4',
      '#44639f',
      '#39588f',
      '#2d4b81',
    ],
  }
});

export function Mantine({children}: {children: ReactNode}) {
    return (
        <MantineProvider theme={theme}>
            {children}
        </MantineProvider>
    );
}