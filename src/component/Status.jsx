import React, { useState, useEffect, useContext } from "react";
import StartScan from "./StartScan";
import { StudentContext } from "../context/StudentState";

function Status() {
  const [cleanerStart, setCleanerStart] = useState("status");
  let ContextValue = useContext(StudentContext);
  const [systemInfo, setSystemInfo] = useState([]);
  console.log("system info :", systemInfo);
  // const [showModel, setShowModel] = useState(false);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        console.log("Fetching data...");
        const response = await fetch("http://localhost:5000/systeminfo");
        if (!response.ok) {
          throw new Error("Failed to fetch system info");
        }

        const data = await response.json();
        console.log("Data received:", data);
        setSystemInfo(data);
      } catch (error) {
        console.error("Error fetching system info:", error.message);
        // Handle error state if needed
      }
    };

    fetchData();
  }, []);
  // Check if systemInfo properties are defined before accessing them
  const deviceName = systemInfo?.cpuInfo?.[0]?.[0] || "N/A";
  const deviceStorage = systemInfo?.diskInfo?.[0] || "N/A";
  const deviceRAM = systemInfo?.memoryInfo?.[0] || "N/A";
  const deviceOS = systemInfo?.osInfo?.[0]?.[0] || "N/A";
  const deviceProcessor = systemInfo?.cpuInfo?.[0]?.[2] || "N/A";
  const deviceType = systemInfo?.osInfo?.[0]?.[1] || "N/A";

  // useEffect(() => {
  //   // Open the modal after 6 seconds
  //   setTimeout(() => {
  //     setShowModel(true);
  //   }, 6000);
  // }, []);

  // const handleCloseModel = () => {
  //   setShowModel(false);
  //   setTimeout(() => {
  //     setShowModel(true);
  //   }, 300000);
  // };

  return cleanerStart === "status" ? (
    <>
      <div className="scan-container">
        <div className="scan-status">
          <div className="system-info-main">
            <div className="systeminfosecond">
              {systemInfo ? (
                <div className="systemname">
                  <p>
                    <span style={{ fontWeight: "bold" }}>Device Name </span> :{" "}
                    {deviceName}
                  </p>
                  <p>
                    <span style={{ fontWeight: "bold" }}>Device Storage </span> :{" "}
                    {deviceStorage}
                  </p>
                  <p>
                    <span style={{ fontWeight: "bold" }}>Device RAM </span> :{" "}
                    {deviceRAM}
                  </p>
                  <p>
                    <span style={{ fontWeight: "bold" }}>Device OS </span> :{" "}
                    {deviceOS}
                  </p>
                  <p>
                    <span style={{ fontWeight: "bold" }}>Device Processor</span>{" "}
                    : {deviceProcessor}
                  </p>
                  <p>
                    <span style={{ fontWeight: "bold" }}>Device Type </span> :{" "}
                    {deviceType}
                  </p>
                </div>
              ) : (
                <p>Loading...</p>
              )}
            </div>
            {/* <marquee className="enquiryform">
            For any technical assistance or inquiries,
             please contact our support team at <span style={{color:"#1152ed"}}> [vinay.uncodemy@gmail.com/9898989898]. </span><br />
             If you encounter any issues during activation or have questions, feel free to reach out to us.
            </marquee> */}
          </div>
        </div>
        <div className="start-container">
          <h4 className="status-h4">
            Deep Scan clean, and optimize your registry to help boost the
            performance of your PC !
          </h4>
          <button
            class="button-scan"
            role="button"
            onClick={(e) => {ContextValue.updateCleanerStatus("start-registry")}}
          >
            Start Registry Scan
          </button>
        </div>
      </div>

      <div className="scan-container">
        <div className="scan-status">
          {/* <div className="fix-section">
            <h3 className="scan-h4"> Scan : Today</h3>
            <h4 className="status-h4">2184 Registry issue found.</h4>
            <h5>Recommended action</h5>
            <a style={{cursor:"pointer"}} role="button" onClick={(e) => setCleanerStart("start-registry")}>
              Fix Now
            </a>
          </div>
          <div className="recommented-section">
            <h5 className="recom-h5">Recommended action</h5>
            <i class="fa-solid fa-circle-info recom-i "></i>
            <h5 className="recom-h5">Remove</h5>
          </div> */}
          <div className="enquiryform">
            For any technical assistance or inquiries, please contact our
            support team at{" "}
            <span style={{ color: "#1152ed" }}>
              {" "}
              [vinay.uncodemy@gmail.com/9898989898].{" "}
            </span>
            <br />
            If you encounter any issues during activation or have questions,
            feel free to reach out to us.
          </div>
        </div>

        <div className="start-container">
          <h3 className="status-h4">
            <div>
              <span>
                <i className="fa-solid fa-phone-volume fa-shake iconColor"></i>
              </span>
              Toll free Number 9898989898
            </div>
          </h3>
          {/* <button
            class="button-scan"
            role="button"
            onClick={(e) => setCleanerStart("start-registry")}
          >
            Start Registry Scan
          </button> */}
        </div>
      </div>
      

      {/* <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Desktop App</th>
              <th>Solution</th>
              <th>Status</th>
              <th>Action Required</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-column="JamesJames">James</td>
              <td data-column="Last Name">Matman</td>
              <td data-column="Job Title">Not Installed</td>
              <td data-column="Download">
                <a href="">Download Now</a>
              </td>
            </tr>
            <tr>
              <td data-column="First Name">Andor</td>
              <td data-column="Last Name">Nagy</td>
              <td data-column="Job Title">Not Installed</td>
              <td data-column="Download">
                <a href="">Download Now</a>
              </td>
            </tr>
            <tr>
              <td data-column="First Name">Tamas</td>
              <td data-column="Last Name">Biro</td>
              <td data-column="Job Title">Not Installed</td>
              <td data-column="Download">
                <a href="">Download Now</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div> */}

      {/* side pop up */}

      {/* {showModel ? (
        <div className="statusmainmodel">
          <div className="secondStatus">
            <div className="statusModel">
              <div className="statusmodelcontent">
                <div className="statusmodelheader">
                  <h4>DevCleaner</h4>
                  <div className="modelcutbutton">
                    <button onClick={handleCloseModel}>
                      <i
                        class="fa-solid fa-xmark"
                        style={{ color: "red", backgroundColor: "white" }}
                      ></i>
                    </button>
                  </div>
                </div>
                <div className="startscanmodelregistertext">
                  Register your Licence today to <br /> release all premium
                  features
                </div>
                <div className="rightsignlogo">
                  <div className="rightsignlogofirst">
                    <span className="arrowColor">
                      <i
                        class="fa-solid fa-arrow-right-long"
                        style={{ color: "#14ee11" }}
                      ></i>
                    </span>
                    Unlimted Full System Scan
                  </div>
                  <div className="rightsignlogofirst">
                    <span className="arrowColor">
                      <i
                        class="fa-solid fa-arrow-right-long"
                        style={{ color: "#14ee11" }}
                      ></i>
                    </span>
                    Get Rid of Files You Don't Need
                  </div>
                  <div className="rightsignlogofirst">
                    <span className="arrowColor">
                      <i
                        class="fa-solid fa-arrow-right-long"
                        style={{ color: "#14ee11" }}
                      ></i>
                    </span>
                    Free Up Hard Drive Space
                  </div>
                  <div className="rightsignlogofirst">
                    <span className="arrowColor">
                      <i
                        class="fa-solid fa-arrow-right-long"
                        style={{ color: "#14ee11" }}
                      ></i>
                    </span>
                    Free Updates and Support
                  </div>
                </div>
                <div className="startscanmodelbuttonmain">
                  <a
                    href="https://cleanersite.netlify.app/checkout"
                    className="startscanmodelbutton"
                  >
                    Register Now
                  </a>
                </div>
              </div>

              <div className="modelbutton"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="Statusfalse" style={{ display: "none" }}>
          False
        </div>
      )} */}
    </>
  ) : cleanerStart === "start-registry" ?(
    <StartScan />
  ):(
    <Status/>
  )
}

export default Status;
