import React, { useCallback, useEffect, useState, useRef } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import "../css/multiRangeSlide.css";

const MultiRangeSlider = ({
  min,
  max,
  unit,
  onChange,
  reset,
  currency,
  locale,
}) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(null);
  const maxValRef = useRef(null);
  const range = useRef(null);

  // variable 
  const finalCurrency = currency || "VND";
  const finalLocale = locale || "VN-vi"; 


  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  useEffect(() => {
    setMaxVal(max);
    setMinVal(min);
  }, [reset, min, max]);

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value); // Preceding with '+' converts the value from type string to type number

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: +(minVal + unit), max: +(maxVal + unit) });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reset]);

  const handleMouseUp = () => {
    onChange({ min: +(minVal + unit), max: +(maxVal + unit) });
  };

  return (
    <div className="container">
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        ref={minValRef}
        onChange={(event) => {
          const value = Math.min(+event.target.value, maxVal - 1);
          setMinVal(value);
          event.target.value = value.toString();
        }}
        className={classnames("thumb thumb--zIndex-3", {
          "thumb--zIndex-5": minVal > max - 100,
        })}
        onMouseUp={handleMouseUp}
        onTouchEnd={handleMouseUp}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        ref={maxValRef}
        onChange={(event) => {
          const value = Math.max(+event.target.value, minVal + 1);
          setMaxVal(value);
          event.target.value = value.toString();
        }}
        className="thumb thumb--zIndex-4"
        onMouseUp={handleMouseUp}
         onTouchEnd={handleMouseUp}
      />

      <div className="slider">
        <div className="slider__track" />
        <div ref={range} className="slider__range" />
        <div className="slider__left-value">
          {(+(minVal + unit)).toLocaleString(finalLocale, {
            style: "currency",
            currency: finalCurrency,
          })}
        </div>
        <div className="slider__right-value">
          {(+(maxVal + unit)).toLocaleString(finalLocale, {
            style: "currency",
            currency: finalCurrency,
          })}
        </div>
      </div>
    </div>
  );
};

MultiRangeSlider.propTypes = {
  unit: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  reset: PropTypes.bool,
  currency: PropTypes.string,
  locale: PropTypes.string,
};

export default React.memo(MultiRangeSlider);
