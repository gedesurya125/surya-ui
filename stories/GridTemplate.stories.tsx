import React from 'react';
import { Meta, Story } from '@storybook/react';

// Depedency components
import { ThemeProvider } from '../src/components/ThemeProvider';
import { theme } from '../src/components/theme/theme';
import { Box } from 'theme-ui';

// Tested components
import { GridTemplate } from '../src/components/GridTemplate';
import type { GridTemplateProps } from '../src/components/GridTemplate';

const meta: Meta = {
  title: 'component/GridTemplate',
  component: GridTemplate,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'inside.autoColumns',
        'outside.autoColumns',
        'inside.templateColumns',
        'outside.templateColumns',
      ],
    },
  },
};

export default meta;

const Template: Story<GridTemplateProps> = (args) => (
  <ThemeProvider theme={theme}>
    <GridTemplate {...args}>
      {/* <SampleChildren {...args.sampleChildrenProps} /> */}
      <Box
        sx={{
          gridColumn: [
            '1 / span 12',
            '1 / span 12',
            '1 / span 24',
            '1 / span 24',
            '1 / span 24',
            '1 / span 24',
          ],
          bg: 'blue',
          height: '30rem',
        }}
      />
    </GridTemplate>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'outside.autoColumns',
};
