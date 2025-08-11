import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Tag from './tag';



const meta = {
  title: 'UI/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'], 
   } satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof Tag>;

export const Primary: Story = {
  args: {
    children: <span>Tag Example</span>,
  },
};

export const Disabled: Story = {
  args: {
    children: <span>Tag Example</span>,
    type: 'disabled',
  },
};

export const InProgress: Story = {
  args: {
    children: <span>Tag Example</span>,
    type: 'inProgress',
  },
};

