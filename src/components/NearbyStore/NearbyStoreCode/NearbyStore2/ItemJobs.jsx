import "./ItemJobs.css";
import { getDatabase, ref, child, get } from "firebase/database";
import React, { useEffect } from "react";

export default function Item({ title, content }) {
  return (
    <div className="itemboxNB">
      <a href="/">
        <img src="/carrotitem.png" className="item-img" />
        <div className="textboxNB">
          <div className="item-title">
            <h3>{title}</h3>
          </div>
          <h6 className="item-content">{content}</h6>
        </div>
        <hr className="separator"/>
      </a>
    </div>
  );
}
