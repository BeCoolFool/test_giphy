import React from "react";

const GroupBox = ({ title, images, getTitle }) => {
  const handleClick = (e) => {
    getTitle(e.target.title);
  };
  return (
    <div className="group-box">
      <h3>{title}</h3>
      <div className="group-box__images">
        {images.reverse().map((elem) => (
          <span onClick={handleClick} key={elem.id} title={title}>
            <iframe
              src={elem.img}
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
