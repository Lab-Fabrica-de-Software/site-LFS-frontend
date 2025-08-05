import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { InputField, InputGroup, SelectField, TextAreaField } from './inputGroup';
import { User } from 'lucide-react';

const meta = {
  title: 'UI/InputGroup',
  component: InputGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof InputGroup>;

export const Input: Story = {
  args: {
    inputLabel: 'Label',
    inputIcon: <User className="w-4 h-4" />,
    children: <InputField placeholder="Type here..." type='text '/>,
  },
};

export const TextArea: Story = {
  args: {
    inputLabel: 'Label',
    children: <TextAreaField placeholder="Type here..." />,
  },
};


export const Select: Story = {
  args: {
    inputLabel: 'Label',
    children: (
      <SelectField defaultValue="option1">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </SelectField>
    ),
  },
};
