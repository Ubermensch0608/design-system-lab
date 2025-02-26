import React, { forwardRef } from "react";
import "./Badge.css";

export type BadgeTheme =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info";
export type BadgeSize = "x-small" | "small" | "medium" | "large";
export type BadgeRadius = "none" | "100" | "200" | "300" | "circle";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * 뱃지의 테마
   * @default 'primary'
   */
  theme?: BadgeTheme;

  /**
   * 뱃지의 배경색 (theme prop보다 우선 적용)
   */
  backgroundColor?: string;

  /**
   * 뱃지의 테두리 색상
   */
  borderColor?: string;

  /**
   * 뱃지의 텍스트 색상
   */
  color?: string;

  /**
   * 뱃지의 테두리 두께
   * @default '1px'
   */
  borderWidth?: string;

  /**
   * 뱃지의 크기
   * @default 'medium'
   */
  size?: BadgeSize;

  /**
   * 뱃지의 모서리 둥글기
   * @default 'circle'
   */
  radius?: BadgeRadius;

  /**
   * 뱃지의 내용
   */
  children: React.ReactNode;
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
      theme = "primary",
      backgroundColor,
      borderColor,
      color,
      borderWidth,
      size = "medium",
      radius = "circle",
      children,
      className,
      style: userStyle,
      ...props
    },
    ref
  ) => {
    // 사용자 정의 스타일 계산
    const customStyle: React.CSSProperties = {
      ...(backgroundColor && { backgroundColor }),
      ...(borderColor && { borderColor }),
      ...(color && { color }),
      ...(borderWidth && { borderWidth }),
      ...userStyle,
    };

    // 클래스 이름 생성
    const badgeClassName = [
      "badge",
      // 사용자 정의 배경색이나 텍스트 색상이 없을 때만 기본 테마 클래스 적용
      !backgroundColor && !color ? `badge-theme-${theme}` : "",
      `badge-${size}`,
      `badge-radius-${radius}`,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <span ref={ref} className={badgeClassName} style={customStyle} {...props}>
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export default Badge;
