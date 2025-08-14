import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ModalRoot, ModalOverlay, ModalHeader } from '.';


const meta = {
  title: 'UI-COMPONENTS/Modal', 
  component: ModalOverlay,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ModalOverlay>;

export default meta;
type Story = StoryObj<typeof ModalOverlay>;

export const Modal: Story = {
  args: {
    children: (
      <ModalRoot>
          <ModalHeader onDimiss={() => {}}>Modal Header</ModalHeader>
          <div className="py-">
            This is a simple modal content.
          </div>
      </ModalRoot>
    )
  },
};
