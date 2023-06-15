import "./Header.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigaion,
} from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="header-container1">
        <Link to="/">
          <img src="./carrot-logo.png" className="carrot-logo"></img>
        </Link>
        <Link to="/">중고거래</Link>
        <Link to="/kr/nearby-stores/">동네가게</Link>
        <Link to="kr/jobs/">알바</Link>
        <Link to="kr/realty/">부동산 직거래</Link>
        <Link to="kr/car/">중고차 직거래</Link>
      </div>

      <div className="header-container2">
        <div className="search">
          <input type="text" placeholder="물품이나 동네를 검색해보세요"></input>
        </div>
        <button className="chat-button">채팅하기</button>
      </div>
    </div>
  );
}
