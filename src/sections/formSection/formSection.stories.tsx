import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {FormSection } from '.';
import { Mail } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const meta: Meta<typeof FormSection> = {
  title: 'SECTION/Form',
  component: FormSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FormSection>;


export const Default: Story = {
  args: {
    areaInteresse:[
    { id: "1", text: "Option1" },
    { id: "2", text: "Option2" },
  ],
  contatos: [
     {
      title: "labfabricadesoftware.recruit@gmail.com",
      icon: Mail,
      href: "http://mail:labfabricadesoftware.recruit@gmail.com",
    },
    {
      title: "LinkedIn",
      icon: FaLinkedin,
      href: "https://www.linkedin.com/company/laboratório-fábrica-de-software/",
    },
    {
      title: "Github",
      icon: FaGithub,
      href: "github.com/Lab-Fabrica-de-Software",
    },
    
  ],
  },
};