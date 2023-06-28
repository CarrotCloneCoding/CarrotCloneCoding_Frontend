import { useNavigate } from "react-router-dom";
import "./Section1.css";

export default function Section1() {
  const navigate = useNavigate();
  return (
    <div className="section1">
      <div className="text-section1">
        <h1>
          당신 근처의 <br />
          당근마켓
        </h1>
        <p className="text-m">
          중고 거래부터 동네 정보까지, 이웃과 함께해요.
          <br />
          가깝고 따뜻한 당신의 근처를 만들어요.
        </p>
        <button onClick={() => navigate("/write")} className="write-button">
          글쓰기
        </button>
      </div>
      <img src="./Section1.png" className="section1_picture"></img>
    </div>
  );
}
