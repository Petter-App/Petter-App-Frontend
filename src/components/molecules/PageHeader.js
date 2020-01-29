import React from "react";
import PropTypes from "prop-types";
import Header from "../atoms/Header.js";
import SubHeader from "../atoms/SubHeader.js";
import "./PageHeader.css";

function PageHeader() {
  return (
    <div className="PageHeader">
      <Header header="Pettr" />
      <SubHeader subheader="Come adopt a pet before you both die" />
    </div>
  );
}

Header.propTypes = {
  header: PropTypes.string.isRequired
};

export default PageHeader;
