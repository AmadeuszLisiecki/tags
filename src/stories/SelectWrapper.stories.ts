import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { SelectWrapper } from '../components/wrappers/SelectWrapper';

const meta = {
  title: 'Example/SelectWrapper',
  component: SelectWrapper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onChange: fn() },
} satisfies Meta<typeof SelectWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

const PAGES = ['1', '2', '3'];

export const Selected1: Story = {
  args: {
    possiblePagesCounts: PAGES,
    selectedPagesCount: PAGES[0],
  },
};

export const Selected2: Story = {
  args: {
    possiblePagesCounts: PAGES,
    selectedPagesCount: PAGES[1],
  },
};

export const Selected3: Story = {
  args: {
    possiblePagesCounts: PAGES,
    selectedPagesCount: PAGES[2],
  },
};