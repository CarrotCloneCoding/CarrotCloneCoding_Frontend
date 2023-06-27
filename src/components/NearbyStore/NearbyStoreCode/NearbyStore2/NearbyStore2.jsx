import "./NearbyStore2.css";
import React from 'react';
import Item from "./ItemJobs";
import Button from "./Button"


export default function NearbyStore2() {
    return (
      <>
      <div className="job2">
        <div className="text-section2">
          <h1 className="midt">
          다양한 동네가게를 볼 수 있어요<br />
          </h1>
            
          <div className="button-wrap">
                <Button/>
            </div>

          <div className="item-wrap">
           {[1,2,3,4,5,6, 7, 8, 9, 10].map((key)=>(
              <Item key={key} /> 
            ))}
          </div>
          <h2 className="und" >
          동네 이웃이 남긴 후기를 찾아보세요
          </h2>
          <div className="item-wrap">
           {[1,2,3,4].map((key)=>(
              <Item key={key} /> 
            ))}
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
            <div className="bar1button">
              비즈프로필 만들기
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
         <div className="footer1">
         </div>
         </>
      
    );
  }