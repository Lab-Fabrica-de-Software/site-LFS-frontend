import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ProjectsSection from '.';

const meta: Meta<typeof ProjectsSection> = {
  title: 'SECTIONS/ProjectsSection',

  component: ProjectsSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProjectsSection>;

export const WithLimit: Story = {
  args: {
    limit: 3,
  },
};

export const WithoutLimit: Story = {
  args: {
    limit: undefined,
  },
};
