import { describe, it, expect, vi, beforeEach, MockInstance } from "vitest";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// 모듈 모킹
vi.mock("react-dom/client", () => ({
  createRoot: vi.fn(() => ({
    render: vi.fn(),
  })),
}));

vi.mock("../../App.tsx", () => ({
  default: () => <div data-testid="mocked-app">Mocked App</div>,
}));

// 테스트 전에 document.getElementById를 모킹
beforeEach(() => {
  // DOM 요소 생성
  const rootElement = document.createElement("div");
  rootElement.id = "root";
  document.body.appendChild(rootElement);

  // getElementById 스파이 설정
  vi.spyOn(document, "getElementById").mockImplementation((id) => {
    if (id === "root") return rootElement;
    return null;
  });
});

describe("main.tsx", () => {
  it("root 요소에 App을 렌더링해야 합니다", async () => {
    // require() 대신 동적 임포트 사용
    await import("../../main.tsx");

    // createRoot가 호출되었는지 확인
    expect(createRoot).toHaveBeenCalled();

    // getElementById가 'root'로 호출되었는지 확인
    expect(document.getElementById).toHaveBeenCalledWith("root");

    // createRoot의 render 메서드가 StrictMode로 감싼 App으로 호출되었는지 확인
    // 타입 문제를 해결하기 위해 unknown으로 변환 후 사용
    const rootInstance = (
      createRoot as unknown as {
        mock: { results: Array<{ value: { render: MockInstance } }> };
      }
    ).mock.results[0].value;
    expect(rootInstance.render).toHaveBeenCalled();

    // render 호출 인자 확인 (첫 번째 인자가 JSX 요소)
    const renderCall = rootInstance.render.mock.calls[0][0];
    expect(renderCall.type).toBe(StrictMode);
  });
});
