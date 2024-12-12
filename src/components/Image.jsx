import React, { useState } from 'react';

function Image() {
  const [width, setWidth] = useState(300);
  const [isVisible, setIsVisible] = useState(true);

  const increaseSize = () => setWidth((prevWidth) => prevWidth + 50);
  const decreaseSize = () => setWidth((prevWidth) => (prevWidth > 50 ? prevWidth - 50 : prevWidth));
  const toggleVisibility = () => setIsVisible((prevVisibility) => !prevVisibility);

  return (
    <div>
      {isVisible && (
        <img
          src="https://bukinfo.com.ua/news-gallery/669e137cafe7c.jpg"
          alt="Чернівці"
          width={width}
        />
      )}
      <div>
        <button onClick={() => setIsVisible(true)}>Додати зображення</button>
        <button onClick={increaseSize}>Збільшити зображення</button>
        <button onClick={decreaseSize}>Зменшити зображення</button>
        <button onClick={toggleVisibility}>Видалити зображення</button>
      </div>
    </div>
  );
}

export default Image;