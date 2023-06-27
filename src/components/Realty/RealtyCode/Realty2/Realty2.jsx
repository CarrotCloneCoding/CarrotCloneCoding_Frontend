import "./Realty2.css";
import React from 'react';
import Item from "./ItemJobs";


export default function Realty2() {
    return (
      <>
      <div className="job2">
        <div className="text-section2">
          <h2>
          인기 부동산 직거래 게시글<br />
          </h2>
          <div className="item-wrap">
           {[1,2,3,4,5,6, 7, 8, 9, 10].map((key)=>(
              <Item key={key} /> 
            ))}
          </div>
          <div className="bar1">
            <div className="bar1box1">
            <img src="/reabar1img.png" className="barimg1"></img>
            <div className="bar1text">
            복비 없이 투명한 부동산 직거래
            <br></br>
            당근마켓 내 근처 탭에서 바로 찾아보세요!        
            </div>
            </div>
            <div className="bar1button">
             어플 다운로드 하기
            </div>
          </div>
          <div className="item-wrap">
           {[1,2,3,4,5,6, 7, 8, 9, 10].map((key)=>(
              <Item key={key} /> 
            ))}
        </div>
        </div>
    
      </div>
         <div className="footer1">
            <hr />
         </div>
         </>
      
    );
  }