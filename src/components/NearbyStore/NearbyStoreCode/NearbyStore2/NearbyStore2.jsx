import "./NearbyStore2.css";
import React from "react";
import Item from "./ItemJobs";
import Button from "./Button";
import { child, get, getDatabase, ref } from "firebase/database";

export default function NearbyStore2() {
  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `post`))
      .then((snapshot) => {
        setList(Object.entries(snapshot.val()).map((item) => item[1]));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div className="NearbyStore2">
        <div className="text-section3">
          <h1 className="">다양한 동네가게를 볼 수 있어요</h1>
        </div>

        <div className="button-wrap">
          <Button />
        </div>

        <div className="item-containerNB">
          {list.map((item, index) => {
            return <Item {...item} key={index} />;
          })}
        </div>

        <div className="bar2">
          <div className="bar1box1">
            <img src="/carrotbar1.png" className="barimg1"></img>
            <div className="bar1text">
              가게를 운영하고 계신가요?
              <br />
              <div className="sma">
                당근마켓에 등록하고 이웃에게 알려보세요!
              </div>
            </div>
          </div>
          <div className="bar1button">비즈프로필 만들기</div>
        </div>
      </div>
    </div>
  );
}
