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
    text: 'Tag',
    className:'',
  },
};

export const CustomClass: Story = {
  args: {
    text: 'Custom Class',
    className: 'text-sm',
  },
};
