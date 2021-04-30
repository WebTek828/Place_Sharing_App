import React from "react";

import "./moreInfoBtn.css";

const MoreInfo = (props) => {
  return (
    <button className="more-info-btn netflix-btn">
      <i class="fas fa-info-circle"></i>
      {props.children}
    </button>
  );
};
export default MoreInfo;
