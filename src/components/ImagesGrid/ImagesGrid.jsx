import React, { useEffect } from "react";
import GroupBox from "./GroupBox";

const ImagesGrid = React.memo(({ images, getTitle, loadOver }) => {
  useEffect(() => loadOver(false));

  const handleClick = (e) => {
    getTitle(e.target.title);
  };

  if (Array.isArray(images)) {
    return (
      <div className="images-grid">
        {images.length !== 0
          ? images.map((elem) => (
              <span onClick={handleClick} key={elem.id} title={elem.title}>
                <iframe
                  src={elem.src}
                  className="images-grid__img"
                  title={elem.title}
                />
              </span>
            ))
          : null}
      </div>
    );
  } else {
    const arr = [];
    for (let elem in images) {
      arr.push(
        <GroupBox
          title={elem}
          images={images[elem]}
          getTitle={getTitle}
          key={elem}
        />
      );
    }
    return arr;
  }
});

export default ImagesGrid;
