import "./Card.css";

import { Link } from "react-router-dom";

export default function Card() {
  return (
    <article className="card-top">
      <Link to="articles/598273895">
        <img src="./article1.jpg" className="article1-image"></img>
      </Link>
      <p>제습기 팝니다</p>
      <h2>30,000원</h2>
      <div className="card-region-name">서울 중랑구 상봉제2동</div>
    </article>
  );
}
