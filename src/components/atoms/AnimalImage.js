import React from "react";
import PropTypes from "prop-types";
import "./AnimalImage.css";

const AnimalImage = ({ AnimalImage, ...props }) => {
  return <div className="AnimalImage"></div>;
};

AnimalImage.propTypes = {
  cityimage: PropTypes.string.isRequired
};

export default AnimalImage;
