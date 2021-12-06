import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Buttons = ({
  className = "",
  title = "",
  onClick = () => {},
  icons=""
}) => {
  return (
    <button className={className} onClick={onClick}>
      {title} <FontAwesomeIcon icon={icons}/>
    </button>
  );
};
export default Buttons;
