import "./NearbyStore1.css";
import React from "react";
import Item from "../NearbyStore2/ItemJobs";

export default function NearbyStore1() {
  return (
    <div>
      <div className="near1">
        <div className="near1-section1">
          <h1>
            동네 이웃들이
            <br />
            자주 가는 동네 가게
          </h1>
          <p>
            우리 동네 사람들이
            <br />
            이용하는 가게를 찾아보세요.
          </p>
        </div>
        <img src="/naerhe.png" className="near1box" />
      </div>
    </div>
  );
}
