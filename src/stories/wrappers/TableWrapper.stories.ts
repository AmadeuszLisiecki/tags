import type { Meta, StoryObj } from '@storybook/react';

import { TableWrapper } from '../../components/wrappers/TableWrapper';
import { 
  TAGS_DESC, 
  TAGS_DESC_FIRST_10, 
  TAGS_DESC_FIRST_15, 
  TAGS_DESC_LAST_10, 
  TAGS_DESC_LAST_15, 
  TAGS_DESC_MIDDLE_10,
  TAGS_ASC, 
  TAGS_ASC_FIRST_10, 
  TAGS_ASC_FIRST_15, 
  TAGS_ASC_LAST_10, 
  TAGS_ASC_LAST_15, 
  TAGS_ASC_MIDDLE_10,
} from '../../helpers/constants';

const meta = {
  title: 'Components/TableWrapper',
  component: TableWrapper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TableWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllDesc: Story = {
  args: {
    tags: TAGS_DESC,
  },
};

export const First15Desc: Story = {
  args: {
    tags: TAGS_DESC_FIRST_15,
  },
};

export const Last15Desc: Story = {
  args: {
    tags: TAGS_DESC_LAST_15,
  },
};

export const First10Desc: Story = {
  args: {
    tags: TAGS_DESC_FIRST_10,
  },
};

export const Middle10Desc: Story = {
  args: {
    tags: TAGS_DESC_MIDDLE_10,
  },
};

export const Last10Desc: Story = {
  args: {
    tags: TAGS_DESC_LAST_10,
  },
};

export const AllAsc: Story = {
  args: {
    tags: TAGS_ASC,
  },
};

export const First15Asc: Story = {
  args: {
    tags: TAGS_ASC_FIRST_15,
  },
};

export const Last15Asc: Story = {
  args: {
    tags: TAGS_ASC_LAST_15,
  },
};

export const First10Asc: Story = {
  args: {
    tags: TAGS_ASC_FIRST_10,
  },
};

export const Middle10Asc: Story = {
  args: {
    tags: TAGS_ASC_MIDDLE_10,
  },
};

export const Last10Asc: Story = {
  args: {
    tags: TAGS_ASC_LAST_10,
  },
};
