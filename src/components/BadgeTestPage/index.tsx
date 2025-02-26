import "./BadgeTestPage.css";
import { Badge } from "../Badge";

const BadgeTestPage = () => {
  return (
    <div className="badge-test-page">
      <h1>Badge 컴포넌트 테스트 페이지</h1>

      <section className="test-section">
        <h2>모서리 둥글기 (Radius)</h2>
        <div className="badge-row">
          <Badge radius="none">None</Badge>
          <Badge radius="100">100</Badge>
          <Badge radius="200">200</Badge>
          <Badge radius="300">300</Badge>
          <Badge radius="circle">Circle</Badge>
        </div>
      </section>

      <section className="test-section">
        <h2>테마 (Themes)</h2>
        <div className="badge-row">
          <Badge theme="primary">Primary</Badge>
          <Badge theme="secondary">Secondary</Badge>
          <Badge theme="success">Success</Badge>
          <Badge theme="warning">Warning</Badge>
          <Badge theme="danger">Danger</Badge>
          <Badge theme="info">Info</Badge>
        </div>
      </section>

      <section className="test-section">
        <h2>크기 (Sizes)</h2>
        <div className="badge-row align-center">
          <Badge size="x-small">X-Small</Badge>
          <Badge size="small">Small</Badge>
          <Badge size="medium">Medium</Badge>
          <Badge size="large">Large</Badge>
        </div>
      </section>

      <section className="test-section">
        <h2>커스텀 스타일 (Custom Styles)</h2>
        <div className="badge-row">
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
          <Badge
            backgroundColor="#FFFBEB"
            color="#F59E0B"
            borderColor="#F59E0B"
          >
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
      </section>

      <section className="test-section">
        <h2>조합 예시 (Combinations)</h2>
        <div className="badge-row">
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
      </section>

      <section className="test-section">
        <h2>커스텀 스타일 + 기본 속성 조합</h2>
        <div className="badge-row">
          <Badge
            backgroundColor="#4338CA"
            color="white"
            size="small"
            radius="100"
          >
            커스텀 색상 + 작은 크기
          </Badge>
          <Badge
            backgroundColor="transparent"
            borderColor="#059669"
            color="#059669"
            size="large"
          >
            커스텀 테두리 + 큰 크기
          </Badge>
          <Badge
            backgroundColor="#FEF3C7"
            color="#D97706"
            borderColor="#D97706"
            radius="none"
          >
            커스텀 조합 + 직각 모서리
          </Badge>
          <Badge backgroundColor="#F87171" color="white">
            커스텀 색상
          </Badge>
        </div>
      </section>
    </div>
  );
};

export default BadgeTestPage;
