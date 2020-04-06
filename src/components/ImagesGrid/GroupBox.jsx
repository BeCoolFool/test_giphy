import React from "react";
import { v4 as uuidv4 } from "uuid";

const GroupBox = ({ title, images, getTitle }) => {
  const handleClick = e => {
    getTitle(e.target.title);
  };
  return (
    <div className="group-box">
      <h3>{title}</h3>
      <div className="group-box__images">
        {images.map(elem => (
          <span onClick={handleClick} key={uuidv4()} title={title}>
            <iframe
              src={elem}
              className="group-box__images__img"
              title={title}
            />
          </span>
        ))}
      </div>
    </div>
  );
};

export default GroupBox;
