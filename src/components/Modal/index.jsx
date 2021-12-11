import React from "react";
import { useState } from "react";
import Rodal from "rodal";
import "./style.scss";
import "rodal/lib/rodal.css";

const Modal = ({ visible, onClose, contents }) => {
  console.log(contents);
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 40,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Rodal
        width="1200"
        height="1000"
        animation="fade"
        visible={visible}
        customStyles={{
          marginRight: "45em",
          borderRadius: "25px",
          overflowY: "auto",
        }}
        onClose={() => onClose()}
      >
        {contents}
      </Rodal>
    </div>
  );
};

export default Modal;
