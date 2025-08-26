import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { FormSection } from '.';

const meta = {
  title: 'SECTIONS/ContactForm', 
  component: FormSection,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof FormSection>;

export default meta;
type Story = StoryObj<typeof FormSection>;

export const ContactForm: Story = {
  args: {
  },
};
