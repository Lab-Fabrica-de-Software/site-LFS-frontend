import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ProjectModal } from '.';

const meta = {
    title: 'COMMON-COMPONENTS/ProjectModal',
    component: ProjectModal,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ProjectModal>;

export default meta;
type Story = StoryObj<typeof ProjectModal>;

export const Primary: Story = {
    args: {
        project: {
            id: "1",
            title: "Test",
            description: "Do et duis occaecat adipisicing cillum voluptate amet ullamco ipsum laboris laborum.",
            status: "in-progress",
            stacks: ["Next.js", "TailwindCSS"],
            visibility: "public",
            repository: "https://github.com",
            collaborators: [
                {
                    id: "1",
                    image: "https://picsum.photos/id/237/200/300",
                    name: "Test",
                    githubUrl: "https://github.com"
                }
            ],
            homepage: "https://teste.com",
            links: [
                {
                    name: "Teste",
                    url: "https://teste.com"
                }
            ]
        }
    },
};
