import "@testing-library/jest-dom";
import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";

// @testing-library/jest-dom의 확장 매처를 vitest에 추가합니다.
expect.extend(matchers);

// 각 테스트 후에 정리 작업을 수행합니다.
afterEach(() => {
  cleanup();
});

// 추가적인 테스트 설정이 필요한 경우 여기에 추가할 수 있습니다.
