import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../backBtn/BackTutton.css";

const BackButton = () => {
  const [currenturl, setcurrenturl] = useState(window.location.href)
  const navigate = useNavigate();
  console.log("landing url",currenturl)
  return (
    <>
        <div className="back-btn-container">
          <button
            id="scores-back-button"
            onClick={() => {
              navigate(-1);
            }}
          >
            {" "}
            &lt; Go back
          </button>
        </div>
    </>
  );
};
export default BackButton;
