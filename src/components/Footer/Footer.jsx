import "./Footer.css";

export default function Footer() {
  const text1 = "대표";
  const text2 = "강민제, 백서진 | ";
  const text3 = "사업자번호";
  const text4 = "375-87-00088\n";

  return (
    <div className="footer">
      <hr className="job-hr" />
      <div className="footer-root1">
        <ul className="root1-list1">
          <li>
            <a href="">중고거래</a>
          </li>
          <li>
            <a href="">동네가게</a>
          </li>
          <li>
            <a href="">당근알바</a>
          </li>
          <li>
            <a href="">부동산 직거래</a>
          </li>
          <li>
            <a href="">중고차 직거래</a>
          </li>
        </ul>
        <ul className="root1-list2">
          <li>
            <a href="">당근 비지니스</a>
          </li>
          <li>
            <a href="">채팅하기</a>
          </li>
        </ul>
        <ul className="root1-list3">
          <li>
            <a href="">자주 묻는 질문</a>
          </li>
          <li>
            <a href="">회사 소개</a>
          </li>
          <li>
            <a href="">인재 채용</a>
          </li>
        </ul>
        <div className="root1-download">
          <h4 className="download-text">당근마켓 앱 다운로드</h4>

          <div className="button-container">
            <button className="footer-button">
              <img src="/apple.png" className="apple-logo"></img>
              App store
            </button>
            <button className="footer-button">
              <img src="/gp.png" className="googleplay-logo"></img>
              Google play
            </button>
          </div>
        </div>
      </div>

      <hr className="footer-hr" />

      <div className="footer-root2">
        <div className="root2-text">
          <div>
            <b>{text1}</b> {text2}
            <b>{text3}</b> {text4}
          </div>
          <div>
            <b>직업정보제공사업 신고번호</b> 2016-서울서초-0051
          </div>
          <div>
            <b>주소</b> 서울특별시 구로구 디지털로 30길 28, 609호 (당근서비스)
          </div>
          <div>
            <b>전화</b> 1544-9796 | <b>고객문의</b> cs@daangnservice.com
          </div>
          <br />
        </div>
        <div className="many-logo">
          <a href="">
            <img src="/facebook.png" className="small-logo"></img>
          </a>
          <a href="">
            <img src="/inssta.png" className="small-logo"></img>
          </a>
          <a href="">
            <img src="/youtube.png" className="small-logo"></img>
          </a>
          <a href="">
            <img src="/blog.png" className="small-logo"></img>
          </a>
          <a href="">
            <img src="/internet.png" className="small-logo"></img>
          </a>
          <a className="tee">한국</a>
        </div>
        <div className="root2-list">
          <li>
            <ul>제휴 문의</ul>
            <ul>광고 문의</ul>
            <ul>PR 문의</ul>
            <ul>IR 문의</ul>
          </li>
        </div>
        <div className="list">
          <li>
            <ul>이용약관</ul>
            <ul>개인정보처리방침</ul>
            <ul>위치기반서비스 이용약관</ul>
            <ul>이용자보호 비전과 계획</ul>
            <ul>청소년보호정책</ul>
          </li>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
