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

export const Primary: Story = {
  args: {
    projects: [
      {
        id: '1',
        title: 'Project One',
        description: 'Description for project one.',
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
        title: 'Project Two',
        description: 'Description for project two.',
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
        title: 'Project Three',
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
        description: 'Description for project four.',
        links: [
          {
            name: 'Teste',
            url: 'Teste'
          }
        ],
        status: "completed"
      },
    ],
    limit: 3,
  },
};
