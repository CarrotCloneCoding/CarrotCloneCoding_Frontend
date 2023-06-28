import "./Realty2.css";
export default function item() {
  return (
    <div className="itembox">
      <img src="/realhomeimg.png" className="item" />
      <div className="textbox">
        투룸이상 300만원/1만원
        <div className="graytext">남동구</div>
        <h6 className="money">단기</h6>
      </div>
    </div>
  );
}
