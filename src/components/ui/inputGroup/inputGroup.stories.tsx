
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import InputExemple from './inputGroup';

const meta = {
  title: 'UI/Input',
  component: InputExemple,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'], 
   } satisfies Meta<typeof InputExemple>;

export default meta;
type Story = StoryObj<typeof InputExemple>;

export const Primary: Story = {
  args: {
   labelText:"Input",
   type:"text",
   id:'1',
  },
};

