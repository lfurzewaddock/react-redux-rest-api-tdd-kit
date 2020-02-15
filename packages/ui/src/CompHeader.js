import React from "react";
import PropTypes from "prop-types";

const CompHeader = ({ title }) => (
  <header style={{ marginBottom: 10 }}>
    <div>
      <span className="header"> {title} </span>
    </div>

    <div className="subheader-body">
      <span className="subheader">
        {" "}
        Powered by{" "}
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.coindesk.com/price/"
        >
          CoinDesk
        </a>
        .{" "}
      </span>
    </div>
  </header>
);

CompHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CompHeader;
