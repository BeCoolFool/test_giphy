import React, { useState } from "react";

const PopUp = ({ text, closePopUp }) => {
  const [animStyle, setStyle] = useState("popup_show");
  const handleAction = () => {
    setStyle("popup_hide");
    setTimeout(() => closePopUp(), 500);
  };
  const style = "popup__block " + animStyle;
  return (
    <div className={text ? "popup" : "hidden"} onClick={handleAction}>
      <p className={style}>{text}</p>
    </div>
  );
};

export default PopUp;
