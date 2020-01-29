import React from "react";
import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ header, ...props }) => {
  return <div className="Header">{header}</div>;
};

Header.propTypes = {
  header: PropTypes.string.isRequired
};

export default Header;
