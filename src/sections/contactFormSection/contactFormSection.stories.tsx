import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ContactFormSection } from '.';

const meta = {
  title: 'SECTIONS/ContactForm', 
  component: ContactFormSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags:['autodocs']
} satisfies Meta<typeof ContactFormSection>;

export default meta;
type Story = StoryObj<typeof ContactFormSection>;

export const Default: Story = {
  args: {
  },
};
