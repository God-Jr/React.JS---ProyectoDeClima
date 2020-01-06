import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

function Location({ city }) {
  //DESTRUCTURING
  // const { city } = props;

  return (
    <div className="LocationCont">
      <h1>{city}</h1>
    </div>
  );
}

Location.propTypes = {
  city: PropTypes.string.isRequired
};

export default Location;
