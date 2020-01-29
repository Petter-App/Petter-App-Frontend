import React from "react";
import PropTypes from "prop-types";
import "./SubHeader.css";

const SubHeader = ({ subheader, ...props }) => {
  return <div className="SubHeader">{subheader}</div>;
};

SubHeader.propTypes = {
  header: PropTypes.string.isRequired
};

export default SubHeader;
