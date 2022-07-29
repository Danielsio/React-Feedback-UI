import React from "react";
import PropTypes from "prop-types";

function Card({ children }) {
  return <div className="card">{children}</div>;
}

Card.defaultProps = {
  reverse: false,
};
Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
