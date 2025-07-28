
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { InputField, InputIcon, InputRoot } from './inputGroup';


const meta = {
  title: 'UI/InputGroup/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'], 
   } satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof InputField>;

export const Primary: Story = {
    args: {
        type: "text"
    }
};



