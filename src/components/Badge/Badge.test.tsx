import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Badge } from "./index";

describe("Badge 컴포넌트", () => {
  // 기본 렌더링 테스트
  it("기본 속성으로 렌더링되어야 합니다", () => {
    render(<Badge>테스트 뱃지</Badge>);
    const badge = screen.getByText("테스트 뱃지");

    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass("badge");
    expect(badge).toHaveClass("badge-medium");
    expect(badge).toHaveClass("badge-radius-circle");
    expect(badge).toHaveClass("badge-theme-primary");
  });

  // 크기 테스트
  describe("크기 속성", () => {
    it("x-small 크기로 렌더링되어야 합니다", () => {
      render(<Badge size="x-small">X-Small</Badge>);
      const badge = screen.getByText("X-Small");

      expect(badge).toHaveClass("badge-x-small");
    });

    it("small 크기로 렌더링되어야 합니다", () => {
      render(<Badge size="small">Small</Badge>);
      const badge = screen.getByText("Small");

      expect(badge).toHaveClass("badge-small");
    });

    it("medium 크기로 렌더링되어야 합니다", () => {
      render(<Badge size="medium">Medium</Badge>);
      const badge = screen.getByText("Medium");

      expect(badge).toHaveClass("badge-medium");
    });

    it("large 크기로 렌더링되어야 합니다", () => {
      render(<Badge size="large">Large</Badge>);
      const badge = screen.getByText("Large");

      expect(badge).toHaveClass("badge-large");
    });
  });

  // radius 테스트
  describe("radius 속성", () => {
    it("none radius로 렌더링되어야 합니다", () => {
      render(<Badge radius="none">None</Badge>);
      const badge = screen.getByText("None");

      expect(badge).toHaveClass("badge-radius-none");
    });

    it("100 radius로 렌더링되어야 합니다", () => {
      render(<Badge radius="100">100</Badge>);
      const badge = screen.getByText("100");

      expect(badge).toHaveClass("badge-radius-100");
    });

    it("200 radius로 렌더링되어야 합니다", () => {
      render(<Badge radius="200">200</Badge>);
      const badge = screen.getByText("200");

      expect(badge).toHaveClass("badge-radius-200");
    });

    it("300 radius로 렌더링되어야 합니다", () => {
      render(<Badge radius="300">300</Badge>);
      const badge = screen.getByText("300");

      expect(badge).toHaveClass("badge-radius-300");
    });

    it("circle radius로 렌더링되어야 합니다", () => {
      render(<Badge radius="circle">Circle</Badge>);
      const badge = screen.getByText("Circle");

      expect(badge).toHaveClass("badge-radius-circle");
    });
  });

  // 테마 테스트
  describe("테마 속성", () => {
    it("primary 테마로 렌더링되어야 합니다", () => {
      render(<Badge theme="primary">Primary</Badge>);
      const badge = screen.getByText("Primary");

      expect(badge).toHaveClass("badge-theme-primary");
    });

    it("secondary 테마로 렌더링되어야 합니다", () => {
      render(<Badge theme="secondary">Secondary</Badge>);
      const badge = screen.getByText("Secondary");

      expect(badge).toHaveClass("badge-theme-secondary");
    });

    it("success 테마로 렌더링되어야 합니다", () => {
      render(<Badge theme="success">Success</Badge>);
      const badge = screen.getByText("Success");

      expect(badge).toHaveClass("badge-theme-success");
    });

    it("warning 테마로 렌더링되어야 합니다", () => {
      render(<Badge theme="warning">Warning</Badge>);
      const badge = screen.getByText("Warning");

      expect(badge).toHaveClass("badge-theme-warning");
    });

    it("danger 테마로 렌더링되어야 합니다", () => {
      render(<Badge theme="danger">Danger</Badge>);
      const badge = screen.getByText("Danger");

      expect(badge).toHaveClass("badge-theme-danger");
    });

    it("info 테마로 렌더링되어야 합니다", () => {
      render(<Badge theme="info">Info</Badge>);
      const badge = screen.getByText("Info");

      expect(badge).toHaveClass("badge-theme-info");
    });
  });

  // 커스텀 스타일 테스트
  describe("커스텀 스타일", () => {
    it("커스텀 배경색이 적용되어야 합니다", () => {
      render(<Badge backgroundColor="#FF0000">커스텀 배경색</Badge>);
      const badge = screen.getByText("커스텀 배경색");

      expect(badge).toHaveStyle("background-color: #FF0000");
    });

    it("커스텀 테두리 색상이 적용되어야 합니다", () => {
      render(<Badge borderColor="#00FF00">커스텀 테두리</Badge>);
      const badge = screen.getByText("커스텀 테두리");

      expect(badge).toHaveStyle("border-color: #00FF00");
    });

    it("커스텀 텍스트 색상이 적용되어야 합니다", () => {
      render(<Badge color="#0000FF">커스텀 텍스트 색상</Badge>);
      const badge = screen.getByText("커스텀 텍스트 색상");

      expect(badge).toHaveStyle("color: #0000FF");
    });

    it("커스텀 테두리 두께가 적용되어야 합니다", () => {
      render(<Badge borderWidth="2px">커스텀 테두리 두께</Badge>);
      const badge = screen.getByText("커스텀 테두리 두께");

      expect(badge).toHaveStyle("border-width: 2px");
    });
  });

  // 조합 테스트
  it("여러 속성을 조합하여 렌더링되어야 합니다", () => {
    render(
      <Badge theme="success" size="small" radius="100">
        조합 테스트
      </Badge>
    );

    const badge = screen.getByText("조합 테스트");

    expect(badge).toHaveClass("badge");
    expect(badge).toHaveClass("badge-theme-success");
    expect(badge).toHaveClass("badge-small");
    expect(badge).toHaveClass("badge-radius-100");
  });
});
