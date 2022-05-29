import React, { FC } from 'react';
import { Meta, Story } from '@storybook/react';
import { Base, ThemeProviderProps } from '../src/components/Base';
import type { BoxProps, SxProp } from 'theme-ui';

// Extrnal Components
import { Box } from 'theme-ui';

// Local Components
import { Grid } from '../src/components/Grid';

// Meta
const baseMeta: Meta = {
  title: 'component/Base',
  component: Base,
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
  <Base {...args}>
    <SampleChildren />
  </Base>
);

// Default Test for template 1
export const BaseDefault = Template.bind({});
BaseDefault.args = {};

interface ThemeProvider2Props extends ThemeProviderProps {
  sx?: SxProp['sx'];
}
// Template 2
const GridChildrenTemplates: Story<ThemeProvider2Props> = (args) => (
  <Base {...args}>
    <Grid>
      <SampleChildren
        sx={{
          ...args.sx,
        }}
      />
    </Grid>
  </Base>
);
// Test for template 2
export const BaseDefault2 = GridChildrenTemplates.bind({});
BaseDefault2.args = {
  sx: {
    gridColumn: '1/13',
    width: '100%',
  },
};
