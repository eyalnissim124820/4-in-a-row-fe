import React from "react";

export default function Modal({ children, setIsOpen }) {
  const ModalStyle = {
    position: "absolute",
    left: '15%',
    top: '25%',
    width: 'fit-content',
    display:'flex',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: "20px",
    zIndex: "4",
    padding: "20px",
  };
  const ModalContainerStyle = {
    backgroundColor: "rgba(0,0,0,0.44)",
    position: "absolute",
    width: "100vw",
    height: "100vh",
    top: "0",
    right: "0",
    zIndex: "3",
  };

  return (
    <div  style={ModalContainerStyle}>
      <div
        className="modal"
        onClick={(e) => {
          e.stopPropagation();
        }}
        style={ModalStyle}
      >
        {children}
      </div>
    </div>
  );
}
