import React from "react";
import PropTypes from "prop-types";
import style from "./index.module.scss";

const Button = props => {
  return <div className={style.btn}>{props.children}</div>;
};
Button.propTypes = {
  text: PropTypes.any
};
export default Button;
