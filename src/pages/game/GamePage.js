import React, { useState } from "react";
import Board from "../../components/board/Board";
import "./GamePage.css";
import Modal from "../../components/modal/Modal";
import redCoin from "../../attachments/boardTools/Coin-red.svg";

export default function GamePage() {
  const [modal, setModal] = useState(true);

  return (
    <div className="gamePage-page">
      <div className="gamePage-header"></div>
      <div className="gamePage-body">
        <Board />
      </div>
      <div className="gamePage-footer">
        {modal ? (
          <Modal setIsOpen={setModal}>
            <div className="modal-container">
              <div className="modal-headers-container">
                <h1 style={{ fontWeight: "500" }}>congratulations </h1>
                <h1 style={{ fontWeight: "200" }}>
                  Y<img style={{ height: "18px" }} src={redCoin} alt="redCoin" />u Won!
                </h1>
              </div>
              <div className="modal-buttons-container">
                <button>Play again</button>
                <button>Score</button>
              </div>
            </div>
          </Modal>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
