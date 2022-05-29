import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Base, ThemeProviderProps } from '../src/components/Base';

// Extrnal Components
import { Box } from 'theme-ui';

// Meta
const baseMeta: Meta = {
  title: 'component/Base',
  component: Base,
};

export default baseMeta;

// Sample for testing purposes
const SampleChildren = () => {
  return <Box sx={{ width: '1rem', aspectRatio: '1/1', bg: 'blue' }}></Box>;
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
