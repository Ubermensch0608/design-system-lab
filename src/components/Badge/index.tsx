import React, { forwardRef } from "react";
import "./Badge.css";

export type BadgeSize = "xs" | "s" | "m" | "l";
export type BadgeRadius = "none" | "100" | "200" | "300" | "circle";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * 뱃지의 크기
   * @default 's'
   */
  size?: BadgeSize;

  /**
   * 뱃지의 텍스트 색상
   * @default '--Colors-White'
   */
  color?: string;

  /**
   * 뱃지의 배경색 (theme prop보다 우선 적용)
   * @default '--Colors-Sky-400'
   */
  backgroundColor?: string;

  /**
   * 뱃지의 테두리 색상
   */
  borderColor?: string;

  /**
   * 뱃지의 모서리 둥글기
   * @default 'none'
   */
  radius?: BadgeRadius;

  /**
   * 뱃지의 내용
   */
  children: React.ReactNode;

  /**
   * 뱃지의 태그 타입
   * @default 'span'
   */
  as?: React.ElementType;
}

/**
 * Badge 컴포넌트
 *
 * 상태나 카테고리를 표시하기 위한 작은 요소입니다.
 * 정보 표시 목적으로만 사용되며, 인터랙션 기능은 없습니다.
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      as,
      backgroundColor = "var(--Colors-Sky-400, #00ABFF)",
      borderColor,
      color = "var(--Colors-White, #FFFFFF)",
      size = "s",
      radius = "none",
      children,
      className,
      style: userStyle,
      ...props
    },
    ref
  ) => {
    const Component = as || "span";

    // 사용자 정의 스타일 계산
    const customStyle: React.CSSProperties = {
      ...(backgroundColor && { backgroundColor }),
      ...(borderColor && { borderColor }),
      ...(color && { color }),
      ...userStyle,
    };

    // 클래스 이름 생성
    const badgeClassName = [
      "badge",
      `badge-${size}`,
      `badge-radius-${radius}`,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <Component
        ref={ref}
        className={badgeClassName}
        style={customStyle}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Badge.displayName = "Badge";

export default Badge;
