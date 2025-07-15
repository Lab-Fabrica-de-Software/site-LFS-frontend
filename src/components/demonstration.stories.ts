import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Demonstration from './demonstration';

const meta = {
  title: 'Tests/Demonstration',
  component: Demonstration,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'], 
   argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
    onClick: { action: 'clicked' },
  }, 
} satisfies Meta<typeof Demonstration>;

export default meta;
type Story = StoryObj<typeof Demonstration>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

export const CustomClass: Story = {
  args: {
    children: 'Custom Class',
    className: 'text-lg shadow-lg',
  },
};