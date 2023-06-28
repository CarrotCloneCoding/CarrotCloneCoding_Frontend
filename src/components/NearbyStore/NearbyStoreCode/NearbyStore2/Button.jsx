import React, { useState } from "react";
import "./Button.css";

const ButtonComponent = () => {
  const [activeButton, setActiveButton] = useState(null);
  const buttons = [
    "전체",
    "식당",
    "카페",
    "용달/이사",
    "뷰티/미용",
    "헬스/필라테스/요가",
  ];

  // 버튼 클릭 핸들러
  const handleClick = (index) => {
    setActiveButton(index);
  };

  return (
    <div className="menu-button">
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={() => handleClick(index)}
          style={{
            backgroundColor: activeButton === index ? "gray" : "initial",
          }}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default ButtonComponent;
