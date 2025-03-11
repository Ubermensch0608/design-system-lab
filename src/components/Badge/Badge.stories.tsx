import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./index";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    radius: {
      control: { type: "select" },
      options: ["none", "100", "200", "300", "circle"],
    },
    size: {
      control: { type: "select" },
      options: ["xs", "s", "m", "l"],
    },
    backgroundColor: {
      control: "color",
    },
    borderColor: {
      control: "color",
    },
    color: {
      control: "color",
    },
    // as 속성은 사용하지 않는다
    as: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

/**
 * BadgeProps interface 참조
 * @see BadgeProps
 * 경로 : src/components/Badge/index.tsx
 */
export const Default: Story = {
  args: {
    size: "s",
    color: "white",
    backgroundColor: "var(--Colors-Sky-400, #00ABFF)",
    borderColor: "var(--Colors-Sky-400, #00ABFF)",
    radius: "none",
    children: "기본 뱃지",
  },
};

export const Radius: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px" }}>
      <Badge radius="none">None</Badge>
      <Badge radius="100">100</Badge>
      <Badge radius="200">200</Badge>
      <Badge radius="300">300</Badge>
      <Badge radius="circle">Circle</Badge>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <Badge size="xs">XS</Badge>
      <Badge size="s">S</Badge>
      <Badge size="m">M</Badge>
      <Badge size="l">L</Badge>
    </div>
  ),
};

export const CustomStyles: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <Badge backgroundColor="#8B5CF6" color="white">
        커스텀 배경색
      </Badge>
      <Badge
        backgroundColor="transparent"
        borderColor="#8B5CF6"
        color="#8B5CF6"
      >
        커스텀 테두리
      </Badge>
      <Badge backgroundColor="#FFFBEB" color="#F59E0B" borderColor="#F59E0B">
        커스텀 조합
      </Badge>
      <Badge
        style={{
          background: "linear-gradient(90deg, #3B82F6 0%, #8B5CF6 100%)",
        }}
        color="white"
      >
        그라데이션
      </Badge>
    </div>
  ),
};

export const Combinations: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <Badge size="s" radius="100">
        Small Primary Rounded
      </Badge>
      <Badge size="m" radius="200">
        Medium Success Rounded
      </Badge>
      <Badge size="l" radius="300">
        Large Danger Rounded
      </Badge>
      <Badge size="m" radius="circle">
        Warning Circle
      </Badge>
    </div>
  ),
};
