import Card from "../../Card/Card";
import "./Section5.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigaion,
} from "react-router-dom";

export default function Section5() {
  return (
    <div className="section5">
      <h1 className="section5-title">중고거래 인기매물</h1>
      <div className="cards-wrap">
        <div className="cards-container">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((key) => (
            <Card key={key} />
          ))}
        </div>
      </div>
      <div className="cards-link">
        <Link to="/">인기매물 더보기</Link>
      </div>
    </div>
  );
}
