import React from "react";
import HeadTitle from "../components/Helmet";

//TODO: meta 설정
export default function Post() {
  return (
    <>
      <HeadTitle title="거르는 개발자는 이유가 있다." />
      <article>
        <header>
          <h1>거르는 개발자는 이유가 있다.</h1>
          <div>
            <span>hyoJeong</span>
            <span>2023년 2월 22일</span>
          </div>
        </header>
        <p>
          기존에 잘 알려진 UI 패턴들은 UI 디자인의 복잡한 문제를 해결하는 데
          효과가 입증되었음에도 불구하고 프런트엔드 개발 세계에서는 잘 활용되지
          않는 경우가 많습니다. 이 글에서는 리팩토링의 여정을 보여주는 코드
          예시를 통해 기존 UI 구축 패턴을 리액트 세계에 적용하는 방법을 살펴보고
          그 이점을 보여드립니다. 특히 레이어링 아키텍처가 리액트 애플리케이션의
          개선된 응답성과 향후 변경사항을 반영하는 측면에서 어떻게 도움이 될 수
          있는지에 중점을 둡니다.
        </p>
      </article>
    </>
  );
}
