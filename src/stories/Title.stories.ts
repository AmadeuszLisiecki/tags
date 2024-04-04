import type { Meta, StoryObj } from '@storybook/react';

import { Title } from '../components/Title';
import { TITLES } from '../helpers/constants';

const meta = {
  title: 'Components/Title',
  component: Title,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Fetching: Story = {
  args: {
    children: TITLES.FETCHING,
  },
};

export const Error: Story = {
  args: {
    children: TITLES.ERROR,
  },
};

export const Displayed: Story = {
  args: {
    children: TITLES.LOADED,
  },
};

export const BadSort: Story = {
  args: {
    children: TITLES.BAD_SORT,
  },
};

export const BadPage: Story = {
  args: {
    children: TITLES.BAD_PAGE,
  },
};

export const BadPages: Story = {
  args: {
    children: TITLES.BAD_PAGES,
  },
};

export const BadPagesAndPageConfig: Story = {
  args: {
    children: TITLES.INCORRECT_PAGES_CONFIG,
  },
};