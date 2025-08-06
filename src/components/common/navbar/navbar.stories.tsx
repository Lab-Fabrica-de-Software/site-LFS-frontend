import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Navbar from './navbar';

const meta: Meta<typeof Navbar> = {
  title: 'COMMON/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Navbar>;


export const ComWrapper: Story = {
  render: (args) => (
    <div className="bg-black min-h-screen">
      <Navbar {...args} />
      <main className="p-6">
        <h1 className="text-2xl font-bold">Conteúdo da Navbar</h1>
        <p className="mt-2 text-lg">Isso simula uma página com a navbar fixa no topo;</p>
        <p className="mt-2">Coloquei "<span className="text-green-400">hover:text-green-400</span> transition" nos componentes da navbar, e "<span className="text-green-500">hover:bg-green-500</span> transition" no botão Ingresse já;</p>
        <p className="mt-2">Os ícones do Discord e do LinkedIn vem da biblioteca <strong>react-icons</strong>, que instalei;</p>
        <p className="mt-2">Versão mobile responsiva feita.</p>
      </main>
    </div>
  ),
};