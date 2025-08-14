import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ProjectsSection from '.';

const meta: Meta<typeof ProjectsSection> = {
  title: 'SECTIONS/ProjectsSection',

  component: ProjectsSection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProjectsSection>;

export const Primary: Story = {
  args: {
    projects: [
        {
            id: '1',
            title: 'Project One',
            description: 'Description for project one.',
            image: '/images/project1.png',
            link: 'https://example.com/project1',
        },
        {
            id: '2',
            title: 'Project Two',
            description: 'Description for project two.',
            image: '/images/project2.png',
            link: 'https://example.com/project2',
        },
        {
            id: '3',
            title: 'Project Three',
            description: 'Description for project three.',
            image: '/images/project3.png',
            link: 'https://example.com/project3',
        },
    ],
  },
};
