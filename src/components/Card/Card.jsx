import "./Card.css";

import { Link } from "react-router-dom";

export default function Card() {
  return (
    <article className="card-top">
      <Link to="/">
        <img src="./article1.jpg" className="article1-image"></img>
      </Link>
      <div className="card-title">제습기 팝니다</div>
      <div className="card-price">30,000원</div>
      <div className="card-region-name">서울 중랑구 상봉제2동</div>
      <div className="card-counts">관심 19 ∙ 채팅 15</div>
    </article>
  );
}
