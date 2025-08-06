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

export const Primary: Story = {
  args: {
    username: 'Image',
    image: 'https://picsum.photos/id/237/200/300',
    href: "/"
  },
};




