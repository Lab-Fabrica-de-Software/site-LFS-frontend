import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Footer from '.';

const meta: Meta<typeof Footer> = {
  title: 'COMMON-COMPONENTS/Footer',
  component: Footer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
  },
};