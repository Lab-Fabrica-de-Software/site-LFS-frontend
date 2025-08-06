import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import LogoMarquee from './logoMarquee';

const meta = {
  title: 'COMMON/LogoMarquee',
  component: LogoMarquee,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A marquee component that displays logos in a scrolling format. It automatically detects overflow and switches between a static display and a scrolling marquee.',
      },
    }
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: [],
      description: 'Array of logo items to display in the marquee.',
    },
  },
} satisfies Meta<typeof LogoMarquee>;

export default meta;
type Story = StoryObj<typeof LogoMarquee>;

export const ManyItems: Story = {
  args: {
    items: [
      {
        name: "Abútua",
        logo: "/Abutua.png"
      },
      {
        name: "Fatec Itu",
        logo: "/FatecItu.png"
      },
      {
        name: "Fatec Sorocaba",
        logo: "/FatecSorocaba.png"
      },
      {
        name: "Abútua",
        logo: "/Abutua.png"
      },
      {
        name: "Fatec Itu",
        logo: "/FatecItu.png"
      },
      {
        name: "Fatec Sorocaba",
        logo: "/FatecSorocaba.png"
      },
      {
        name: "Abútua",
        logo: "/Abutua.png"
      },
      {
        name: "Fatec Itu",
        logo: "/FatecItu.png"
      },
      {
        name: "Fatec Sorocaba",
        logo: "/FatecSorocaba.png"
      },
      {
        name: "Abútua",
        logo: "/Abutua.png"
      },
      {
        name: "Fatec Itu",
        logo: "/FatecItu.png"
      },
      {
        name: "Fatec Sorocaba",
        logo: "/FatecSorocaba.png"
      },
      {
        name: "Abútua",
        logo: "/Abutua.png"
      },
      {
        name: "Fatec Itu",
        logo: "/FatecItu.png"
      },
      {
        name: "Fatec Sorocaba",
        logo: "/FatecSorocaba.png"
      },
      {
        name: "Abútua",
        logo: "/Abutua.png"
      },
      {
        name: "Fatec Itu",
        logo: "/FatecItu.png"
      },
      {
        name: "Fatec Sorocaba",
        logo: "/FatecSorocaba.png"
      },
    ]
  },
};

export const FewItems: Story = {
  args: {
    items: [
      {
        name: "Abútua",
        logo: "/Abutua.png"
      },
      {
        name: "Fatec Itu",
        logo: "/FatecItu.png"
      },
      {
        name: "Fatec Sorocaba",
        logo: "/FatecSorocaba.png"
      },
    ]
  },
};

