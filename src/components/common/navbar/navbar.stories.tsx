import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {Navbar } from '.';

const meta: Meta<typeof Navbar> = {
  title: 'COMMON-COMPONENTS/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;


export const Default: Story = {
  args: {
  },
};