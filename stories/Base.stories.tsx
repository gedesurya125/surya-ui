import React, { FC } from 'react';
import { Meta, Story } from '@storybook/react';
import {
  ThemeProvider,
  ThemeProviderProps,
} from '../src/components/ThemeProvider';
import type { BoxProps, SxProp } from 'theme-ui';

// Extrnal Components
import { Box } from 'theme-ui';

// Local Components
import { Grid } from '../src/components/Grid';

// Meta
const baseMeta: Meta = {
  title: 'component/ThemeProvider',
  component: ThemeProvider,
  parameters: {
    layout: 'fullscreen',
  },
};

export default baseMeta;

// Sample for testing purposes
interface SampleChildrenProps extends BoxProps {
  children?: React.ReactNode;
}
const SampleChildren: FC<SampleChildrenProps> = ({
  children,
  sx,
  ...props
}) => {
  return (
    <Box
      sx={{ width: '1rem', aspectRatio: '1/1', bg: 'blue', ...sx }}
      {...props}
    >
      {children}
    </Box>
  );
};

// Template 1
const Template: Story<ThemeProviderProps> = (args) => (
  <ThemeProvider {...args}>
    <SampleChildren />
  </ThemeProvider>
);

// Default Test for template 1
export const ThemeProviderDefault = Template.bind({});
ThemeProviderDefault.args = {};

interface ThemeProvider2Props extends ThemeProviderProps {
  sx?: SxProp['sx'];
}
// Template 2
const GridChildrenTemplates: Story<ThemeProvider2Props> = (args) => (
  <ThemeProvider {...args}>
    <Grid>
      <SampleChildren
        sx={{
          ...args.sx,
        }}
      />
    </Grid>
  </ThemeProvider>
);
// Test for template 2
export const ThemeProviderDefault2 = GridChildrenTemplates.bind({});
ThemeProviderDefault2.args = {
  sx: {
    gridColumn: '1/13',
    width: '100%',
  },
};
