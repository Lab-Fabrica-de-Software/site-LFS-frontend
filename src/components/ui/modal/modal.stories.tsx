import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ModalHeader, ModalOverlay, ModalRoot } from './modal';


const meta = {
  title: 'UI/Modal', 
  component: ModalRoot,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ModalRoot>;

export default meta;
type Story = StoryObj<typeof ModalRoot>;

export const Modal: Story = {
  args: {
    
    
  },
};
