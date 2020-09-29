import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./Star.css";

const StarComponent = (props) => {
  const [star, setStar] = useState(+props.star);
  const [hover, setHover] = useState(-1);
  const updateStar = (index) => {
    setStar(index);
    props.setStar(index);
  };
  return (
    <>
      {[0, 1, 2, 3, 4, 5].map((s, index) => {
        return (
          <span
            className="stars"
            onMouseOver={() => {
              setHover(index);
            }}
            onMouseOut={() => setHover(-1)}
            onClick={() => updateStar(index)}
            key={s}
          >
            <span
              className={
                (hover === -1 && index && index > 0 && index <= star) ||
                (index <= hover && index !== 0)
                  ? `activeStar`
                  : ""
              }
            >
              <FaStar />
            </span>
          </span>
        );
      })}
    </>
  );
}

export default StarComponent;