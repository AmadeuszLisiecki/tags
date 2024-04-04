import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { PaginationWrapper } from '../../components/wrappers/PaginationWrapper';

const meta = {
  title: 'Components/PaginationWrapper',
  component: PaginationWrapper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onChange: fn() },
} satisfies Meta<typeof PaginationWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Page1From2: Story = {
  args: {
    page: 1,
    count: 2,
  },
};

export const Page2From2: Story = {
  args: {
    page: 2,
    count: 2,
  },
};

export const Page1From3: Story = {
  args: {
    page: 1,
    count: 3,
  },
};

export const Page2From3: Story = {
  args: {
    page: 2,
    count: 3,
  },
};

export const Page3From3: Story = {
  args: {
    page: 3,
    count: 3,
  },
};