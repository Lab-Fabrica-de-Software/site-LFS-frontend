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

export const Completed: Story = {
  args: {
    project: {
      id: "1",
      images: ["https://picsum.photos/id/237/200/300"],
      title: "Project Card",
      description: "Duis id est do reprehenderit mollit do dolor.",
      collaborators: [
        {
          id: "1",
          name: "Test",
          image: "https://picsum.photos/id/237/200/300",
          githubUrl: "https://github.com"
        },
        {
          id: "2",
          name: "Test",
          image: "https://picsum.photos/id/237/200/300",
          githubUrl: "https://github.com"
        },
        {
          id: "3",
          name: "Test",
          image: "https://picsum.photos/id/237/200/300",
          githubUrl: "https://github.com"
        },
        {
          id: "",
          name: "Test",
          image: "https://picsum.photos/id/237/200/300",
          githubUrl: "https://github.com"
        }
      ],
      status: "completed",
    },
    onClick: () => alert()
  },
};

export const InProgress: Story = {
  args: {
    project: {
      id: "1",
      images: ["https://picsum.photos/id/237/200/300"],
      title: "Project Card",
      description: "Duis id est do reprehenderit mollit do dolor.",
      collaborators: [
        {
          id: "1",
          name: "Test",
          image: "https://picsum.photos/id/237/200/300",
          githubUrl: "https://github.com"
        },
        {
          id: "2",
          name: "Test",
          image: "https://picsum.photos/id/237/200/300",
          githubUrl: "https://github.com"
        },
        {
          id: "3",
          name: "Test",
          image: "https://picsum.photos/id/237/200/300",
          githubUrl: "https://github.com"
        },
        {
          id: "",
          name: "Test",
          image: "https://picsum.photos/id/237/200/300",
          githubUrl: "https://github.com"
        }
      ],
      status: "in-progress",
    },
    onClick: () => alert()
  },
};


export const NotStarted: Story = {
  args: {
    project: {
      id: "1",
      images: ["https://picsum.photos/id/237/200/300"],
      title: "Project Card",
      description: "Duis id est do reprehenderit mollit do dolor.",
      collaborators: [
        {
          id: "1",
          name: "Test",
          image: "https://picsum.photos/id/237/200/300",
          githubUrl: "https://github.com"
        },
        {
          id: "2",
          name: "Test",
          image: "https://picsum.photos/id/237/200/300",
          githubUrl: "https://github.com"
        },
        {
          id: "3",
          name: "Test",
          image: "https://picsum.photos/id/237/200/300",
          githubUrl: "https://github.com"
        },
        {
          id: "",
          name: "Test",
          image: "https://picsum.photos/id/237/200/300",
          githubUrl: "https://github.com"
        }
      ],
      status: "not-started",
    },
    onClick: () => alert()
  },
};

export const Disabled: Story = {
  args: {
    project: {
      id: "1",
      images: ["https://picsum.photos/id/237/200/300"],
      title: "Project Card",
      description: "Duis id est do reprehenderit mollit do dolor.",
      collaborators: [
        {
          id: "1",
          name: "Test",
          image: "https://picsum.photos/id/237/200/300",
          githubUrl: "https://github.com"
        },
        {
          id: "2",
          name: "Test",
          image: "https://picsum.photos/id/237/200/300",
          githubUrl: "https://github.com"
        },
        {
          id: "3",
          name: "Test",
          image: "https://picsum.photos/id/237/200/300",
          githubUrl: "https://github.com"
        },
        {
          id: "",
          name: "Test",
          image: "https://picsum.photos/id/237/200/300",
          githubUrl: "https://github.com"
        }
      ],
      status: "in-progress",
    },
  },
};



