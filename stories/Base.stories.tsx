import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ThemeProvider } from '../src/components/ThemeProvider';

// Extrnal Components
import { Box, Heading, Paragraph } from 'theme-ui';
import type { BoxProps } from 'theme-ui';
import { theme } from '../src/components/theme/theme';
// Meta
const baseMeta: Meta = {
  title: 'component/ThemeProvider',
  component: ThemeProvider,
  parameters: {
    layout: 'fullscreen',
  },
};

export default baseMeta;

// Template 1
const Template: Story<BoxProps> = (args) => (
  <ThemeProvider theme={theme}>
    <Heading
      as="h4"
      sx={{ fontSize: '2rem', width: '30rem', fontWeight: 'normal' }}
    >
      Try to resize the window and see responsivness of rem value
    </Heading>
    <Box {...args} />
  </ThemeProvider>
);

// Default Test for template 1
export const ThemeProviderDefault = Template.bind({});
ThemeProviderDefault.args = {
  sx: { width: '3rem', aspectRatio: '1/1', bg: 'blue', mt: '3rem' },
};
