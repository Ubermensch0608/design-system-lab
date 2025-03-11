import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import BadgeTestPage from "./index";

// Badge 컴포넌트를 모킹합니다
vi.mock("../Badge", () => ({
  Badge: ({ children, ...props }: any) => (
    <div
      data-testid="badge-component"
      data-props={JSON.stringify(props)}
      className={`badge ${props.size ? `badge-${props.size}` : ""} ${
        props.radius ? `badge-radius-${props.radius}` : ""
      }`}
    >
      {children}
    </div>
  ),
}));

describe("BadgeTestPage 컴포넌트", () => {
  it("페이지 제목이 올바르게 렌더링되어야 합니다", () => {
    render(<BadgeTestPage />);

    const heading = screen.getByText("Badge 컴포넌트 테스트 페이지");
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe("H1");
  });

  it("모든 섹션이 렌더링되어야 합니다", () => {
    render(<BadgeTestPage />);

    // 모든 섹션 제목 확인
    const sectionHeadings = [
      "모서리 둥글기 (Radius)",
      "크기 (Sizes)",
      "커스텀 스타일 (Custom Styles)",
      "커스텀 스타일 + 기본 속성 조합",
    ];

    sectionHeadings.forEach((heading) => {
      const headingElement = screen.getByText(heading);
      expect(headingElement).toBeInTheDocument();
      expect(headingElement.tagName).toBe("H2");
    });
  });

  it("모서리 둥글기 섹션에 모든 radius 옵션이 포함되어야 합니다", () => {
    render(<BadgeTestPage />);

    const radiusOptions = ["None", "100", "200", "300", "Circle"];

    radiusOptions.forEach((option) => {
      const badge = screen.getByText(option);
      expect(badge).toBeInTheDocument();

      const badgeElement = badge.closest('[data-testid="badge-component"]');
      expect(badgeElement).toBeInTheDocument();

      const props = JSON.parse(
        badgeElement?.getAttribute("data-props") || "{}"
      );
      expect(props.radius).toBe(option.toLowerCase());
    });
  });

  it("크기 섹션에 모든 크기 옵션이 포함되어야 합니다", () => {
    render(<BadgeTestPage />);

    const sizeOptions = ["XS", "S", "M", "L"];

    sizeOptions.forEach((option) => {
      const badge = screen.getByText(option);
      expect(badge).toBeInTheDocument();

      const badgeElement = badge.closest('[data-testid="badge-component"]');
      expect(badgeElement).toBeInTheDocument();

      const props = JSON.parse(
        badgeElement?.getAttribute("data-props") || "{}"
      );
      const expectedSize = option.toLowerCase().replace("-", "-");
      expect(props.size).toBe(expectedSize);
    });
  });

  it("커스텀 스타일 섹션에 커스텀 스타일이 적용된 뱃지가 포함되어야 합니다", () => {
    render(<BadgeTestPage />);

    // 커스텀 배경색 뱃지 확인
    const customBgBadge = screen.getByText("커스텀 배경색");
    expect(customBgBadge).toBeInTheDocument();

    const customBgElement = customBgBadge.closest(
      '[data-testid="badge-component"]'
    );
    expect(customBgElement).toBeInTheDocument();

    const customBgProps = JSON.parse(
      customBgElement?.getAttribute("data-props") || "{}"
    );
    expect(customBgProps.backgroundColor).toBe("#8B5CF6");
    expect(customBgProps.color).toBe("white");
  });
});
