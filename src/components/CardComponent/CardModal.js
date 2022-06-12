import React from "react";
import { Modal } from "bootstrap";

export const CardModal = (props) => {
  return props.trigger ? (
    <div className="modal-popup">
      <div className="popup-inner">{props.children}</div>
    </div>
  ) : (
    ""
  );
};
