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
          <img src="/carrot-logo.png" className="carrot-logo"></img>
        </Link>
        <Link to="/">
          <p className="font">중고거래</p>
        </Link>
        <Link to="/kr/nearby-stores/">
          <p className="font">동네가게</p>
        </Link>
        <Link to="/kr/jobs/">
          <p className="font">알바</p>
        </Link>
        <Link to="/kr/realty/">
          <p className="font">부동산 직거래</p>
        </Link>
        <Link to="/kr/car/">
          <p className="font">중고차 직거래</p>
        </Link>
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
