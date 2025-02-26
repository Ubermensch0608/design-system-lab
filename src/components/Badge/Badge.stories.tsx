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
    theme: {
      control: { type: "select" },
      options: ["primary", "secondary", "success", "warning", "danger", "info"],
    },
    size: {
      control: { type: "select" },
      options: ["x-small", "small", "medium", "large"],
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
    borderWidth: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "기본 뱃지",
    theme: "primary",
    size: "medium",
    radius: "circle",
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

export const Themes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <Badge theme="primary">Primary</Badge>
      <Badge theme="secondary">Secondary</Badge>
      <Badge theme="success">Success</Badge>
      <Badge theme="warning">Warning</Badge>
      <Badge theme="danger">Danger</Badge>
      <Badge theme="info">Info</Badge>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <Badge size="x-small">X-Small</Badge>
      <Badge size="small">Small</Badge>
      <Badge size="medium">Medium</Badge>
      <Badge size="large">Large</Badge>
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
        backgroundColor="#FEF2F2"
        color="#EF4444"
        borderWidth="2px"
        borderColor="#EF4444"
      >
        두꺼운 테두리
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
      <Badge theme="primary" size="small" radius="100">
        Small Primary Rounded
      </Badge>
      <Badge theme="success" size="medium" radius="200">
        Medium Success Rounded
      </Badge>
      <Badge theme="danger" size="large" radius="300">
        Large Danger Rounded
      </Badge>
      <Badge theme="warning" size="medium" radius="circle">
        Warning Circle
      </Badge>
    </div>
  ),
};
