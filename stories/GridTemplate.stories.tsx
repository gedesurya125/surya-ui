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

interface TestingProps extends GridTemplateProps {
  variant:
    | 'inside.autoColumns'
    | 'outside.autoColumns'
    | 'inside.templateColumns'
    | 'outside.templateColumns';
  gridColumnStart: string[] | string | number[] | number;
  gridColumnEnd: string[] | string | number[] | number;
  bg: string;
  height: string | number;
}

/**
 * Template 1
 */
const Template: Story<TestingProps> = (args) => {
  const { variant, bg, height, gridColumnStart, gridColumnEnd } = args;
  return (
    <ThemeProvider theme={theme}>
      <GridTemplate variant={variant}>
        <Box
          sx={{
            gridColumnStart,
            gridColumnEnd,
            bg,
            height,
          }}
        />
      </GridTemplate>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  variant: 'outside.templateColumns',
  gridColumnStart: 1,
  gridColumnEnd: 13,
  bg: 'blue',
  height: '30rem',
};

/**
 * Template 2
 */

const Template2: Story<TestingProps> = (args) => {
  const { variant, bg, height, gridColumnStart, gridColumnEnd } = args;

  return (
    <ThemeProvider theme={theme}>
      <GridTemplate>
        <GridTemplate variant={variant}>
          <Box
            sx={{
              gridColumnStart,
              gridColumnEnd,
              bg,
              height,
            }}
          />
        </GridTemplate>
      </GridTemplate>
    </ThemeProvider>
  );
};

export const NestedGridTemplate = Template2.bind({});
NestedGridTemplate.args = {
  variant: 'inside.autoColumns',
  gridColumnStart: 1,
  gridColumnEnd: 'span 4',
  bg: 'blue',
  height: '30rem',
};
