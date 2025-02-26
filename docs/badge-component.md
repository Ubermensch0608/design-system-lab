# Badge Component

## 개발 방향

- 뱃지 컴포넌트는 모티브 서비스의 뱃지 컴포넌트를 참조하여 개발합니다.
- 뱃지 컴포넌트는 코어 디자인 시스템으로 개발합니다.
- 뱃지 컴포넌트는 앱 프로젝트에서 확장 및 가공하여 사용하게 됩니다.
- 뱃지 컴포넌트는 웹 기준을 지킵니다.
- 뱃지 컴포넌트는 controlled 및 uncontrolled 모드를 지원합니다.
  - controlled 모드는 뱃지의 상태를 직접 제어할 수 있습니다.
  - uncontrolled 모드는 뱃지의 상태를 제어하지 않고, 뱃지의 상태를 자동으로 제어합니다.
- 뱃지 컴포넌트는 스토리북 세팅을 지원합니다.
  - 스토리북 세팅은 뱃지 컴포넌트의 상태를 확인할 수 있도록 돕습니다.
- 뱃지 컴포넌트는 타입스크립트로 개발합니다.
- 뱃지 컴포넌트는 production에서 사용합니다.

## 모티브 서비스

- 참조: https://www.radix-ui.com/themes/docs/components/badge

## 사용 방법

```jsx
import { Badge } from "../components/Badge";

function Example() {
  return (
    <div>
      <Badge>기본 뱃지</Badge>
      <Badge theme="success">성공</Badge>
      <Badge size="small" radius="100">
        작은 뱃지
      </Badge>
      <Badge backgroundColor="#8B5CF6" color="white">
        커스텀 뱃지
      </Badge>
    </div>
  );
}
```

## 속성 (Props)

| 속성              | 타입                                                                       | 기본값      | 설명                                     |
| ----------------- | -------------------------------------------------------------------------- | ----------- | ---------------------------------------- |
| `theme`           | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `'primary'` | 뱃지의 테마                              |
| `backgroundColor` | `string`                                                                   | -           | 뱃지의 배경색 (theme prop보다 우선 적용) |
| `borderColor`     | `string`                                                                   | -           | 뱃지의 테두리 색상                       |
| `color`           | `string`                                                                   | -           | 뱃지의 텍스트 색상                       |
| `borderWidth`     | `string`                                                                   | `'1px'`     | 뱃지의 테두리 두께                       |
| `size`            | `'x-small' \| 'small' \| 'medium' \| 'large'`                              | `'medium'`  | 뱃지의 크기                              |
| `radius`          | `'none' \| '100' \| '200' \| '300' \| 'circle'`                            | `'circle'`  | 뱃지의 모서리 둥글기                     |
| `children`        | `React.ReactNode`                                                          | -           | 뱃지의 내용                              |

## 테마 (Themes)

Badge 컴포넌트는 다음과 같은 테마를 지원합니다:

- `primary`: 파란색 배경의 기본 뱃지
- `secondary`: 회색 배경의 보조 뱃지
- `success`: 녹색 배경의 성공 상태 뱃지
- `warning`: 주황색 배경의 경고 상태 뱃지
- `danger`: 빨간색 배경의 위험 상태 뱃지
- `info`: 파란색 배경의 정보 뱃지

## 크기 (Sizes)

Badge 컴포넌트는 다음과 같은 크기를 지원합니다:

- `x-small`: 매우 작은 크기 (0.625rem)
- `small`: 작은 크기 (0.75rem)
- `medium`: 중간 크기 (0.875rem)
- `large`: 큰 크기 (1rem)

## 모서리 둥글기 (Radius)

Badge 컴포넌트는 다음과 같은 모서리 둥글기를 지원합니다:

- `none`: 모서리가 직각 (0)
- `100`: 약간 둥근 모서리 (0.125rem)
- `200`: 중간 정도 둥근 모서리 (0.375rem)
- `300`: 많이 둥근 모서리 (0.5rem)
- `circle`: 완전히 둥근 모서리 (9999px)

## 커스텀 스타일링

Badge 컴포넌트는 다음과 같은 방법으로 커스텀 스타일링을 지원합니다:

1. `backgroundColor`, `borderColor`, `color`, `borderWidth` 속성을 사용하여 직접 스타일 지정
2. `className` 속성을 사용하여 추가 CSS 클래스 적용
3. `style` 속성을 사용하여 인라인 스타일 적용

```jsx
<Badge
  backgroundColor="#FFFBEB"
  color="#F59E0B"
  borderColor="#F59E0B"
  borderWidth="2px"
>
  커스텀 뱃지
</Badge>
```

## 접근성 고려사항

Badge 컴포넌트는 주로 시각적인 표시를 위한 것이므로, 스크린 리더 사용자에게도 정보가 전달될 수 있도록 적절한 텍스트 콘텐츠를 포함해야 합니다.
