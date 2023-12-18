import PropTypes from "prop-types";
import "../css/slideShow.css";
import React, { useCallback, useEffect, useRef } from "react";
//

const SlideShow = React.memo(function SlideShow({ data, scrollStep }) {
  const containerElement = useRef(null);
  const step = useRef(0);

  const delaySlide = 4000;
  
  // when pressing to switch banner
  const onSlideClick = useCallback(
    (direction) => {
      const container = document.getElementById("img-slide-container");
      const currentScroll = container.scrollLeft;
      let finalScrollStep = scrollStep; 

      if(containerElement.current.offsetWidth !== scrollStep)
        finalScrollStep = containerElement.current.offsetWidth || scrollStep;

      if (direction === "left") {
        if (currentScroll <= 0) {
          container.scrollLeft = finalScrollStep * (data.length - 1);
          step.current = data.length - 1;
        } else {
          container.scrollLeft = currentScroll - finalScrollStep;
          step.current--;
        }
      } else {
        if (currentScroll >= finalScrollStep * (data.length - 1)) {
          container.scrollLeft = 0;
          step.current = 0;
        } else {
          container.scrollLeft = currentScroll + finalScrollStep;
          step.current++;
        }
      }

      document
        .querySelectorAll(".carousel-dots")
        .forEach((element, key) =>
          key === step.current
            ? (element.style.backgroundColor = "black")
            : (element.style.backgroundColor = "white")
        );
    },
    [data, scrollStep]
  );

  // load
  useEffect(() => {
    const interval = setInterval(() => {
      onSlideClick("right");
    }, delaySlide);

    return () => {
      clearInterval(interval);
    };
  }, [onSlideClick]);

  return (
    <div id="slideShow-container" ref={containerElement}>
      <div id="slide-btn-left" onClick={() => onSlideClick("left")}></div>
      <div id="img-slide-container">
        {data.map((data, index) => (
          <img
            src={data.url}
            alt="img slide show"
            className="img-slide-elements"
            key={index}
            onClick={() => (window.location.href = `${data.link}`)}
          />
        ))}
      </div>
      <div id="slide-btn-right" onClick={() => onSlideClick("right")}></div>
      <div id="stardust-carousel-dots">
        {data.map((data, index) => (
          <span
            key={`dot-${index}`}
            id={`carousel-dots-${index}`}
            className="carousel-dots"
          ></span>
        ))}
      </div>
    </div>
  );
});

// set type
SlideShow.propTypes = {
  data: PropTypes.array.isRequired,
  scrollStep: PropTypes.number.isRequired,
};
//
export default React.memo(SlideShow);
