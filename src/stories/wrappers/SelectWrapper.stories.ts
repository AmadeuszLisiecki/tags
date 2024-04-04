import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { SelectWrapper } from '../../components/wrappers/SelectWrapper';
import { POSSIBLE_PAGES } from '../../helpers/constants';

const meta = {
  title: 'Components/SelectWrapper',
  component: SelectWrapper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onChange: fn() },
} satisfies Meta<typeof SelectWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Selected1: Story = {
  args: {
    possiblePagesCounts: POSSIBLE_PAGES,
    selectedPagesCount: POSSIBLE_PAGES[0],
  },
};

export const Selected2: Story = {
  args: {
    possiblePagesCounts: POSSIBLE_PAGES,
    selectedPagesCount: POSSIBLE_PAGES[1],
  },
};

export const Selected3: Story = {
  args: {
    possiblePagesCounts: POSSIBLE_PAGES,
    selectedPagesCount: POSSIBLE_PAGES[2],
  },
};