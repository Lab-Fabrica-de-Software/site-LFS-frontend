import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import UserButton from './userButton';

const meta = {
  title: 'COMMON/UserButton',
  component: UserButton,
  parameters: {
    layout: 'centered',
  }, 
  tags: ['autodocs'], 
   } satisfies Meta<typeof UserButton>;

export default meta;
type Story = StoryObj<typeof UserButton>;

export const Clickable: Story = {
  args: {
    username: 'Image',
    image: 'https://via.placeholder.com/150',
    onClick: () => alert('User button clicked!'),   
  },
};

export const Disabled: Story = {
  args: {
    username: 'Image',
    image: 'https://via.placeholder.com/150',
  },
};



