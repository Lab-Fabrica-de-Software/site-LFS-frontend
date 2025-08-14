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
        title: 'Project Four',
        description: 'Description for project three.',
        links: [
          {
            name: 'Teste',
            url: 'Teste'
          }
        ],
        status: "completed"
      },
      {
        id: '2',
        title: 'Project Four',
        description: 'Description for project three.',
        links: [
          {
            name: 'Teste',
            url: 'Teste'
          }
        ],
        status: "completed"
      },
      {
        id: '3',
        title: 'Project Four',
        description: 'Description for project three.',
        links: [
          {
            name: 'Teste',
            url: 'Teste'
          }
        ],
        status: "completed"
      },
      {
        id: '4',
        title: 'Project Four',
        description: 'Description for project three.',
        links: [
          {
            name: 'Teste',
            url: 'Teste'
          }
        ],
        status: "completed"
      },
    ],
  },
};
