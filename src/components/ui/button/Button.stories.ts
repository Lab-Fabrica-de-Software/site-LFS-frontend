import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from '.';


const meta = {
  title: 'UI-COMPONENTS/Button',
  component: Button,
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

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