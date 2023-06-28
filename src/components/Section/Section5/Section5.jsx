import Card from "../../Card/Card";
import "./Section5.css";

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
        <a herf="" className="ingi">
          인기매물 더보기
        </a>
      </div>
    </div>
  );
}
