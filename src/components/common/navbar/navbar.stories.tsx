import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Navbar from './navbar';

const meta: Meta<typeof Navbar> = {
  title: 'COMMON/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Navbar>;


export const ComWrapper: Story = {
  args: {
  },
};