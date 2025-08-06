import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Footer from './footer';

const meta: Meta<typeof Footer> = {
  title: 'COMMON/Footer',
  component: Footer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Primary: Story = {
  args: {
    className: '',
  },
};

export const CustomClass: Story = {
  args: {
    className: 'text-sm',
  },
};
