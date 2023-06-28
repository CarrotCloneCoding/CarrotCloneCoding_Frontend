import "./Job2.css";
export default function item() {
  return (
    <div className="itembox">
      <a href="">
        <img src="/dog.jpg" className="item-img" />
        <div className="textbox">
          애견샵 아르바이트
          <div className="graytext">도그마루 대구점</div>
          <div className="money">시급 10,000</div>
        </div>
      </a>
    </div>
  );
}
