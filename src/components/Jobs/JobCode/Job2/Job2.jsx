import "./Job2.css";
import React from 'react';
import Item from "./ItemJobs";


export default function Job2() {
    return (
      <>
      <div className="job2">
        <div className="text-section2">
          <h2>
            인기 당근 알바<br />
          </h2>
          <div className="item-wrap">
           {[1,2,3,4,5,6, 7, 8, 9, 10].map((key)=>(
              <Item key={key} /> 
            ))}
          </div>
          <div className="bar1">
            <div className="bar1box1">
            <img src="/carrotbar1.png" className="barimg1"></img>
            <div className="bar1text">
            당근알바 이용방법이 궁금하다면
            <br></br>
            지금 바로 알아보세요!           
            </div>
           
            </div>
            <div className="bar1button">
              이용방법 알아보기
            </div>
          </div>
          <div className="item-wrap">
           {[1,2,3,4,5,6, 7, 8, 9, 10].map((key)=>(
              <Item key={key} /> 
            ))}
        </div>
        <div className="bar2">
            <div className="bar1box1">
            <img src="/bar2img.png" className="barimg1"></img>
            <div className="bar1text">
            당근알바 이용방법이 궁금하다면
            <br></br>
            지금 바로 알아보세요!           
            </div>
           
            </div>
            <div className="bar2button">
              어플 다운로드 하기
            </div>
          </div>
        </div>
    
      </div>
         <div className="footer1">
            <hr />
         </div>
         </>
      
    );
  }