import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./index";

// BadgeTestPage를 모킹합니다
vi.mock("../BadgeTestPage", () => ({
  default: () => <div data-testid="badge-test-page">Mocked BadgeTestPage</div>,
}));

describe("App 컴포넌트", () => {
  it("BadgeTestPage를 렌더링해야 합니다", () => {
    render(<App />);

    // BadgeTestPage가 렌더링되었는지 확인
    const badgeTestPage = screen.getByTestId("badge-test-page");
    expect(badgeTestPage).toBeInTheDocument();
    expect(badgeTestPage).toHaveTextContent("Mocked BadgeTestPage");

    // app 클래스를 가진 div가 있는지 확인
    const appDiv = screen.getByText("Mocked BadgeTestPage").parentElement;
    expect(appDiv).toHaveClass("app");
  });
});
