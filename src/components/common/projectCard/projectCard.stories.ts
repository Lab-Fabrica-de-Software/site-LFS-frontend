import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ProjectCard from './projectCard';

const meta: Meta<typeof ProjectCard> = {
  title: 'COMMON/ProjectCard',
  component: ProjectCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

export const Primary: Story = {
  args: {
  },
};

export const CustomClass: Story = {
  args: {
  },
};
