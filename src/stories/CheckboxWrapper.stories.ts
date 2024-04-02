import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { CheckboxWrapper } from '../components/wrappers/CheckboxWrapper';

const meta = {
  title: 'Example/CheckboxWrapper',
  component: CheckboxWrapper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onChange: fn() },
} satisfies Meta<typeof CheckboxWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checked: Story = {
  args: {
    isChecked: true,
  },
};

export const Unchecked: Story = {
  args: {
    isChecked: false,
  },
};
