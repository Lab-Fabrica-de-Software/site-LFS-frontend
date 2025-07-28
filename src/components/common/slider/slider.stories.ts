import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Slider from './Slider';

const meta = {
  title: 'COMMON/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'], 
   } satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof Slider>;

export const Primary: Story = {
  args: {
    className:'',
  },
};

export const CustomClass: Story = {
  args: {
    className: 'text-sm',
  },
};
