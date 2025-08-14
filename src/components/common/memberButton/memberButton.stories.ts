import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import MemberButton from '.';

const meta: Meta<typeof MemberButton> = {
  title: 'COMMON-COMPONENTS/MemberButton',
  component: MemberButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MemberButton>;

export const Primary: Story = {
  args: {
    member: {
      id: "1",
      name: "Test",
      image: "https://picsum.photos/id/237/200/300",
      githubUrl: "https://github.com"
    }
  },
};
