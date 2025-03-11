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
    expect(badge).toHaveClass("badge-s");
    expect(badge).toHaveClass("badge-radius-none");
  });

  // 크기 테스트
  describe("크기 속성", () => {
    it("x-small 크기로 렌더링되어야 합니다", () => {
      render(<Badge size="xs">X-Small</Badge>);
      const badge = screen.getByText("X-Small");

      expect(badge).toHaveClass("badge-xs");
    });

    it("small 크기로 렌더링되어야 합니다", () => {
      render(<Badge size="s">Small</Badge>);
      const badge = screen.getByText("Small");

      expect(badge).toHaveClass("badge-s");
    });

    it("medium 크기로 렌더링되어야 합니다", () => {
      render(<Badge size="m">Medium</Badge>);
      const badge = screen.getByText("Medium");

      expect(badge).toHaveClass("badge-m");
    });

    it("large 크기로 렌더링되어야 합니다", () => {
      render(<Badge size="l">Large</Badge>);
      const badge = screen.getByText("Large");

      expect(badge).toHaveClass("badge-l");
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
  });

  // 조합 테스트
  it("여러 속성을 조합하여 렌더링되어야 합니다", () => {
    render(
      <Badge size="s" radius="100">
        조합 테스트
      </Badge>
    );

    const badge = screen.getByText("조합 테스트");

    expect(badge).toHaveClass("badge");
    expect(badge).toHaveClass("badge-s");
    expect(badge).toHaveClass("badge-radius-100");
  });
});
