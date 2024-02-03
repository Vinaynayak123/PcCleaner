import React, { useState } from "react";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import SearchIcon from "@mui/icons-material/Search";
import StartScan from "./StartScan";
function Dafrag() {
    const [navigate , setNavigate] = useState("draft")

  return navigate ==="draft" ? (
    <>
      <div className="container-darfrag">
        <div className="lastScreenResult">
          <div className="lastScreenResultSecond">Last Scan Result :</div>
        </div>
        <h5 className="dafrag-h5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Explicabocommodi deleniti praesentium. Mollitia, cupiditate! Suscipit
          fugiat ex quo! Inventore praesentium velit officiis fugiat illum
          quibusdam cumanimi culpa aliquam quae?
        </h5>
        <br />
        <h5 className="dafrag-h5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sed,inventore.
        </h5>
        <div className="Dafrag-button">
          <AppRegistrationIcon className="Dafrag-icon" />
          <button class="button-scan" role="button" onClick={(e)=>setNavigate("StartScan")}>
            Optimize Registry Scan
          </button>
        </div>
        <div className="lastDafrag-container">
          <SearchIcon className="Dafrag-icon" />
          <div>
            <div className="lastDafrag">
              <div className="lastDafrag-result">Last Scan Result :</div>
            </div>
            <div className="drag-text">
              <h5 className="dafrags-h5">Registry not Optimized yet</h5>
              <a href="">start registry optimization</a>
            </div>
          </div>
        </div>
      </div>
    </>
  ):(
    <StartScan/>
  )
}
export default Dafrag;
