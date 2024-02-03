import searchImage from "../Image/search.png";
import searchImage2 from "../Image/search img.png";
import Setting from "./Setting";
import { useState,useEffect } from "react";
import RegisterPopupComponent from "./RegisterPopupComponent";
export default function ScanRegistry() {
  const [cleanerStart, setCleanerStart] = useState("status");
  const [showDate , setShowDate] = useState([])
  console.log("Scan Registry me date and time :",showDate[0])
  

  useEffect(() => {
    // Load registry scans from local storage when the component mounts
    const storedScans = localStorage.getItem("scanTime");
    if (storedScans) {
      setShowDate(JSON.parse(storedScans));
    }
  }, []);
  return cleanerStart === "status" ? (
    <>
      <div className="lastScreenResult">
        <div className="lastScreenResultSecond">Last Scan Result :</div>
      </div>
      <div className="scanregistrysecondcontainerstart">
        <div className="scanregistrysecondcontainerfirst">
          <div className="scanregistrysecondcontainerfirstkafirst">
            <img src={searchImage} alt="" />
          </div>
          <div className="scanregistrysecondcontainerfirstkasecond">
            <div className="scannedtoday">Last Scanned  Time : {showDate[0]}</div>
            <div className="daymonthdate">Last Scanned Date : {showDate[1]}</div>
            <div className="issuesfound">484 registry issues found</div>
            <div className="viewissuesbtn">
              <button className="btn" onClick={(e) => setCleanerStart("view")}>View Issues</button>
            </div>
          </div>
          <div className="scanregistrysecondcontainerfirstkathird">
            <div className="recommendedaction">
              <p className="recommendedactionpara">
                Recommended action{" "}
                <i
                  class="fa-solid fa-circle-info"
                  style={{ color: "#195bcc", marginLeft: "10px" }}
                ></i>{" "}
              </p>{" "}
            </div>{" "}
            <div className="none">None</div>
          </div>
        </div>
      </div>
      <div className="lastScreenResult">
        <div className="lastScreenResultSecond">
          {" "}
          Select Categories to Scan :{" "}
        </div>{" "}
      </div>
      <div className="selectcategoriestoscanmaindiv">
        {" "}
        <div className="selectcategoriestoscanmaindivsecond">
          {" "}
          <div className="selectcategoriestoscanmaindivsecondfirst">
            {" "}
            <img src={searchImage2} alt="" />
          </div>{" "}
          <div className="selectcategoriestoscanmaindivsecondsecond">
            {" "}
            <div className="selectcategoriestoscanmaindivsecondsecondfirst">
              {" "}
              <div className="computericon">
                {" "}
                <i
                  class="fa-solid fa-desktop"
                  style={{ color: "#0d3882;" }}
                ></i>{" "}
              </div>{" "}
              <div className="systemdiv">
                <div className="systemrelatedissuse">
                  <button onClick={(e) => setCleanerStart("Setting")}>
                    System related issues
                  </button>
                </div>
                <div>
                  <div className="issuesaffe">
                    {" "}
                    Issues affecting all users profile on the PC{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="selectcategoriestoscanmaindivsecondsecondfirst">
              {" "}
              <div className="computericon">
                {" "}
                <i
                  class="fa-solid fa-gears"
                  style={{ color: "#174696;" }}
                ></i>{" "}
              </div>{" "}
              <div className="systemdiv">
                <div className="systemrelatedissuse">
                  <button onClick={(e) => setCleanerStart("Setting")}>
                    Com and ActiveX issues
                  </button>
                </div>
                <div>
                  <div className="issuesaffe">
                    {" "}
                    Issues related to Com and Active-X components{" "}
                  </div>{" "}
                </div>{" "}
              </div>
            </div>
          </div>
          <div className="selectcategoriestoscanmaindivsecondthird">
            <div className="selectcategoriestoscanmaindivsecondsecondfirst">
              <div className="computericon">
                <i class="fa-solid fa-users" style={{ color: "#1ad57e;" }}></i>
              </div>
              <div className="systemdiv">
                <div className="systemrelatedissuse">
                  <button onClick={(e) => setCleanerStart("Setting")}>
                    User related issues
                  </button>
                </div>
                <div>
                  <div className="issuesaffe">
                    {" "}
                    Issues affecting your personal profile
                  </div>
                </div>
              </div>
            </div>
            <div className="selectcategoriestoscanmaindivsecondsecondfirst">
              <div className="computericon">
                <i
                  class="fa-regular fa-file-lines"
                  style={{ color: "#1ad57e;" }}
                ></i>{" "}
              </div>{" "}
              <div className="systemdiv">
                <div className="systemrelatedissuse">
                  <button onClick={(e) => setCleanerStart("Setting")}>
                    Startup and Uninstall issues
                  </button>{" "}
                </div>{" "}
                <div>
                  {" "}
                  <div className="issuesaffe">
                    {" "}
                    Issues related to Startup and Uninstall section{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
      <div className="startscan">
        {" "}
        <button
          className="applybtn scanspan button1"
          onClick={(e) => setCleanerStart("start-registry")}
        >
          {" "}
          Start Scan{" "}
        </button>{" "}
      </div>{" "}
    </>
  ) : (
    
    <Setting value="Scan" /> 
  );
}
