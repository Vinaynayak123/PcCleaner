import React, { useState, useEffect, useContext } from "react";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import HomeIcon from "../Image/HomeIcon2.png";
import SeacrhIcon from "../Image/search.png";
import DraftRegistry from "../Image/DraftRegistry3.png";
import BackUpRegistry from "../Image/BackupRegistry2.png";
import Setting1 from "../Image/Setting4.png";
import RegisterNow from "../Image/Register.png";
import Status from "./Status";
import ScanRegistry from "./ScanRegistry";
import Dafrag from "./Dafrag";
import BackupRegistry from "./BackupRegistry";
import Setting from "./Setting";
// import RegisterPopupComponent from "./RegisterPopupComponent";
import PopupComponent from "./PopupComponent";
import { StudentContext } from "../context/StudentState";
import StartScan from "./StartScan";

function Header() {
  let ContextValue = useContext(StudentContext);

  console.log("contextValue =",ContextValue)
  const [cleanerStatus, setCleanerStatus] = useState("status");
  const [isRegisterPopupOpen, setRegisterPopupOpen] = useState(false);

  const handleRegisterNowClick = () => {
    ContextValue.updateCleanerStatus("")
    setCleanerStatus("");
    setRegisterPopupOpen(true);
  };
  useEffect(() => {
    document.body.classList.toggle("popup-open", isRegisterPopupOpen);
    return () => {
      document.body.classList.remove("popup-open");
    };
  }, [isRegisterPopupOpen]);
  const handleButtonClick = (status) => {
    if (status === "Register Now") {
      setCleanerStatus("");
      setRegisterPopupOpen(true);
    } else {
      setCleanerStatus(status);
      setRegisterPopupOpen(false);
    }
  };
  return (
    <>
      {isRegisterPopupOpen && <div className="blur-overlay"></div>}
      <div
        className={`main-container ${isRegisterPopupOpen ? "header-blur" : ""}`}
      >
        <div className="box-containers">
          <div
            class="box"
            onClick={(e) => {
              ContextValue.updateCleanerStatus("status");
            }}
          >
            <div className="box-items">
              <div className="boxItemImage">
                <img src={HomeIcon} alt="" />
              </div>
              <h3 className="h3-box">Status</h3>
            </div>
          </div>
          <div
            class="box"
            onClick={(e) => {
           
              ContextValue.updateCleanerStatus("scan-registry")
            }}
          >
            <div className="box-items">
              <div className="boxItemImage">
                <img src={SeacrhIcon} alt="" />
              </div>
              <h3 className="h3-box">Scan Registry</h3>
            </div>
          </div>
          <div
            class="box"
            onClick={(e) => {
             
              ContextValue.updateCleanerStatus("defrag")
            }}
          >
            <div className="box-items">
              {" "}
              <div className="boxItemImage">
                <img src={DraftRegistry} alt="" />
              </div>
              <h3 className="h3-box">Defrag Registry</h3>
            </div>
          </div>
          <div
            class="box"
            onClick={(e) => {
              
              ContextValue.updateCleanerStatus("Backup")
            }}
          >
            <div className="box-items">
              <div className="boxItemImage">
                <img src={BackUpRegistry} alt="" />
              </div>
              <h3 className="h3-box">Backup Registry</h3>
            </div>
          </div>
          <div
            class="box"
            onClick={(e) => {
              ContextValue.updateCleanerStatus("Settings")
             
            }}
          >
            <div className="box-items">
              <div className="boxItemImage">
                <img src={Setting1} alt="" />
              </div>
              <h3 className="h3-box">Settings</h3>
            </div>
          </div>
          <div class="box" onClick={handleRegisterNowClick}>
            <div className="box-items">
              <div className="boxItemImage">
                <img src={RegisterNow} alt="" />
              </div>
              <h3 className="h3-box" style={{ color: "yellow" }}>
                RegisterNow
              </h3>
            </div>
          </div>
        </div>
        {ContextValue.cleanerStatus === "status" && <Status />}
        {ContextValue.cleanerStatus === "scan-registry" && <ScanRegistry />}
        {ContextValue.cleanerStatus === "defrag" && <Dafrag />}
        {ContextValue.cleanerStatus === "Backup" && <BackupRegistry />}
        {ContextValue.cleanerStatus === "Settings" && <Setting />}
        {ContextValue.cleanerStatus === "start-registry" && <StartScan />}
        {isRegisterPopupOpen && (
          <PopupComponent onClose={() => setRegisterPopupOpen(false)} />
        )}
      </div>
      <div className="buttommarquee">
        <div className="buttommarqueesecond">
          <marquee behavior="alternate">For any technical assistance or inquiries, please contact our
            support team at{" "}
            <span style={{ color: "rgb(214 255 0)" }}>
              {" "}
              [vinay.uncodemy@gmail.com/9898989898].{" "}
            </span>
         
            </marquee>
        </div>
      </div>
    </>
  );
}
export default Header;
