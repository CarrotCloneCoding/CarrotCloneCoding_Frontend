import "./Post.css";
import Header from "../../Header/Header";

export default function Post() {
  return (
    <div className="Post">
      <Header />
      <div className="jobpost-img">
        <img src="dog.jpg" className="dog-img"></img>
      </div>
      <div className="user">
        <img src="user.jpg" className="user-img"></img>
        <div className="user-text">
          <div className="postname">백설이</div>
          <div>범어동</div>
        </div>
        <div className="temperature">36.7°C</div>
      </div>
      <hr className="posthr"></hr>
      <div className="post-title">
        <div className="post-maintitle">
          대구 애견샵 오전 오후 아르바이트 모집
        </div>
        <div className="post-subtitle">도그마루대구점 ・ 3일 전 작성</div>
      </div>
    </div>
  );
}
