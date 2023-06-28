import "./Car2.css";
export default function item() {
  return (
    <div className="itembox">
      <img src="/itemcarimg.png" className="item" />
      <div className="textbox">
        포르쉐 마칸 95B 2.0 터보 4WD
        <div className="graytext">월곡제1동</div>
        <div className="money">6,060만원</div>
      </div>
    </div>
  );
}
