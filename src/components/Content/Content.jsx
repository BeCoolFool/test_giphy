import React, { useState, useCallback } from "react";
import ImagesGrid from "../ImagesGrid/ImagesGrid";
import getImage from "../../functions/getImage";
import PopUp from "../PopUp/PopUp";

const Content = () => {
  const [streamPics, setStream] = useState([]); /* картинки без группировки */
  const [groupedPics, setTag] = useState({}); /* картинки с группировкой */
  const [grouped, setGroup] = useState(false);
  const [error, setError] = useState(null);
  const [label, setLabel] = useState(""); /* Получаем тег от картинки */
  const [isLoading, setLoad] = useState(false);

  const handleStateChange = (img, tag, id) => {
    setStream((prev) => [
      {
        src: img,
        title: tag,
        id,
      },
      ...prev,
    ]);
    setTag((prev) => {
      if (prev.hasOwnProperty(tag)) {
        return {
          ...prev,
          [tag]: [...prev[tag], { img, id }],
        };
      } else {
        return {
          ...prev,
          [tag]: [{ img, id }],
        };
      }
    });
  };

  const clearState = () => {
    setStream([]);
    setTag({});
    setLabel("");
  };

  const handleError = (err) => {
    setError(err);
    setLoad(false);
  };

  const closePopUp = () => setError(null);

  const handleGroupButton = () => setGroup(!grouped);

  const getTitle = useCallback((title) => setLabel(title), []);

  /* FORM FUNCTIONS  */

  const handleChange = (e) => {
    setLabel(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (label === "") {
      setError("Заполните поле 'тег'");
    } else {
      setLoad(true);
      getImage(label)
        .then((data) => {
          handleStateChange(data.url, label, data.id);
        })
        .catch((err) => handleError(err.message));
      setLabel("");
    }
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="cat"
          value={label}
          onChange={handleChange}
          className="form__input"
          disabled={error}
        />
        <button type="submit" className="form__load-btn" disabled={isLoading}>
          {isLoading ? "Загрузка..." : "Загрузить"}
        </button>
        <button type="button" className="form__clear-btn" onClick={clearState}>
          Очистить
        </button>
        <button
          type="button"
          className={grouped ? "hidden" : "form__group-btn"}
          onClick={handleGroupButton}
        >
          Группировать
        </button>
        <button
          type="button"
          className={grouped ? "form__group-btn" : "hidden"}
          onClick={handleGroupButton}
        >
          Разгруппировать
        </button>
      </form>

      {error ? <PopUp text={error} closePopUp={closePopUp} /> : null}

      <ImagesGrid
        images={!grouped ? streamPics : groupedPics}
        getTitle={getTitle}
        loadOver={setLoad}
      />
    </React.Fragment>
  );
};

export default Content;
