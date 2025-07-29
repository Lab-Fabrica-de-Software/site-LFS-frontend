import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import PartnerCard  from './partnercard';

const meta = {
  title: 'COMMON/PartnerCard',
  component: PartnerCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'], 
   } satisfies Meta<typeof PartnerCard>;

export default meta;
type Story = StoryObj<typeof PartnerCard>;

export const Primary: Story = {
  args: {
  },
};

export const CustomClass: Story = {
  args: {
  },
};
