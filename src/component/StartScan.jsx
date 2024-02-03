import { useEffect, useState, useContext } from "react";
import RegisterPopupComponent from "./RegisterPopupComponent";
import { StudentContext } from "../context/StudentState";
import Status from "./Status";
export default function StartScan({ value = 0 }) {
  let ContextValue = useContext(StudentContext);
  const [showRegisterPopupComponent, setShowRegisterPopupComponent] =
    useState(false);
  const [percentage, setPercentage] = useState(value);
  const [isScanning, setIsScanning] = useState(true);
  const [data, setData] = useState("data");
  const [fileArrayIndex, setFileArrayIndex] = useState(0);
  const [scanTime, setScanTime] = useState([]);
  // console.log("Scan Date & Time is :",scanTime)
  const [randomNumbers, setRandomNumbers] = useState({
    issuesfirst: 0,
    issuessecond: 0,
    issuesthird: 0,
    issuesfour: 0,
  });
  const [checkboxes, setCheckboxes] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
  });
  const [removeActionFirst, setRemoveActionFirst] = useState(false);
  const [removeActionSecond, setRemoveActionSecond] = useState(false);
  const [removeActionThird, setRemoveActionThird] = useState(false);
  const [removeActionFourth, setRemoveActionFourth] = useState(false);
  const [removeRendomNumber, setRemoveRendomNumber] = useState(false);
  const [removeRendomNumbertwo, setRemoveRendomNumbertwo] = useState(false);
  const [removeRendomNumberthree, setRemoveRendomNumberthree] = useState(false);
  const [removeRendomNumberfour, setRemoveRendomNumberfour] = useState(false);
  const [removeRendomNumberall, setRemoveRendomNumberall] = useState(false);

  const handleRemove = (issue) => {
    const storeLicenseKey = JSON.parse(localStorage.getItem("licenseKey"));
    if (!storeLicenseKey || !storeLicenseKey.status) {
      setShowRegisterPopupComponent(true);
    } else {
      setRemoveRendomNumber(true);
      setTimeout(() => {
        setRemoveRendomNumber(false);
        const interval = setInterval(() => {
          setRandomNumbers((prevNumbers) => ({ ...prevNumbers, [issue]: 0 }));
          if (randomNumbers[issue] === 0) {
            clearInterval(interval);
            switch (issue) {
              case "issuesfirst":
                setRemoveActionFirst(true);
                break;
              default:
                break;
            }
          }
        }, 10);
      }, 5000);
    }
  };
  const handleRemovetwo = (issue) => {
    const storeLicenseKey = JSON.parse(localStorage.getItem("licenseKey"));
    if (!storeLicenseKey || !storeLicenseKey.status) {
      setShowRegisterPopupComponent(true);
    } else {
      setRemoveRendomNumbertwo(true);
      setTimeout(() => {
        setRemoveRendomNumbertwo(false);
        const interval = setInterval(() => {
          setRandomNumbers((prevNumbers) => ({ ...prevNumbers, [issue]: 0 }));
          if (randomNumbers[issue] === 0) {
            clearInterval(interval);
            switch (issue) {
              case "issuessecond":
                setRemoveActionSecond(true);
                break;
              default:
                break;
            }
          }
        }, 10);
      }, 4000);
    }
  };
  const handleRemovethree = (issue) => {
    const storeLicenseKey = JSON.parse(localStorage.getItem("licenseKey"));
    if (!storeLicenseKey || !storeLicenseKey.status) {
      setShowRegisterPopupComponent(true);
    } else {
      setRemoveRendomNumberthree(true);
      setTimeout(() => {
        setRemoveRendomNumberthree(false);
        const interval = setInterval(() => {
          setRandomNumbers((prevNumbers) => ({ ...prevNumbers, [issue]: 0 }));
          if (randomNumbers[issue] === 0) {
            clearInterval(interval);
            switch (issue) {
              case "issuesthird":
                setRemoveActionThird(true);
                break;
              default:
                break;
            }
          }
        }, 10);
      }, 7000);
    }
  };
  const handleRemovefour = (issue) => {
    const storeLicenseKey = JSON.parse(localStorage.getItem("licenseKey"));
    if (!storeLicenseKey || !storeLicenseKey.status) {
      setShowRegisterPopupComponent(true);
    } else {
      setRemoveRendomNumberfour(true);
      setTimeout(() => {
        setRemoveRendomNumberfour(false);
        const interval = setInterval(() => {
          setRandomNumbers((prevNumbers) => ({ ...prevNumbers, [issue]: 0 }));
          if (randomNumbers[issue] === 0) {
            clearInterval(interval);
            switch (issue) {
              case "issuesfour":
                setRemoveActionFourth(true);
                break;
              default:
                break;
            }
          }
        }, 10);
      }, 9000);
    }
  };
  const handleRemoveAll = () => {
    const storeLicenseKey = JSON.parse(localStorage.getItem("licenseKey"));
    if (!storeLicenseKey || !storeLicenseKey.status) {
      setShowRegisterPopupComponent(true);
    } else {
      setRemoveRendomNumberall(true);
      setTimeout(() => {
        const checkboxesToUpdate = Object.keys(checkboxes).filter(
          (box) => checkboxes[box]
        );
        checkboxesToUpdate.forEach((issue) => {
          setCheckboxes((prevCheckboxes) => ({
            ...prevCheckboxes,
            [issue]: false,
          }));
          switch (issue) {
            case "first":
              handleRemove("issuesfirst");
              break;
            case "second":
              handleRemovetwo("issuessecond");
              break;
            case "third":
              handleRemovethree("issuesthird");
              break;
            case "fourth":
              handleRemovefour("issuesfour");
              break;
            default:
              break;
          }
        });
        setRemoveRendomNumberall(false);
      }, 50);
    }
  };
  const handleRemoveAll2 = () => {
    const storeLicenseKey = JSON.parse(localStorage.getItem("licenseKey"));
    if (!storeLicenseKey || !storeLicenseKey.status) {
      setShowRegisterPopupComponent(true);
    } else {
      setTimeout(() => {
        handleRemove();
        handleRemovetwo();
        handleRemovethree();
        handleRemovefour();
        setRemoveRendomNumberall(false);

        Object.keys(randomNumbers).forEach((issue) => {
          const interval = setInterval(() => {
            setRandomNumbers((prevNumbers) => ({
              ...prevNumbers,
              [issue]: 0,
            }));

            if (randomNumbers[issue] === 0) {
              clearInterval(interval);

              // Update the corresponding remove action state
              switch (issue) {
                case "issuesfirst":
                  setRemoveActionFirst(true);
                  break;
                case "issuessecond":
                  setRemoveActionSecond(true);
                  break;
                case "issuesthird":
                  setRemoveActionThird(true);
                  break;
                case "issuesfour":
                  setRemoveActionFourth(true);
                  break;
                default:
                  break;
              }
            }
          }, 10);
        });
      }, 10);
    }
    // setRemoveRendomNumberall(true);

    // setTimeout(() => {
    //   handleRemove();
    //   handleRemovetwo();
    //   handleRemovethree();
    //   handleRemovefour();
    //   setRemoveRendomNumberall(false);

    //   Object.keys(randomNumbers).forEach((issue) => {
    //     const interval = setInterval(() => {
    //       setRandomNumbers((prevNumbers) => ({
    //         ...prevNumbers,
    //         [issue]: 0,
    //       }));

    //       if (randomNumbers[issue] === 0) {
    //         clearInterval(interval);

    //         // Update the corresponding remove action state
    //         switch (issue) {
    //           case "issuesfirst":
    //             setRemoveActionFirst(true);
    //             break;
    //           case "issuessecond":
    //             setRemoveActionSecond(true);
    //             break;
    //           case "issuesthird":
    //             setRemoveActionThird(true);
    //             break;
    //           case "issuesfour":
    //             setRemoveActionFourth(true);
    //             break;
    //           default:
    //             break;
    //         }
    //       }
    //     }, 10);
    //   });
    // }, 9000);
  };
  const handleScanToggle = () => {
    if (isScanning) {
      setIsScanning(false);
      setPercentage(0);
      clearInterval();
    } else {
      setIsScanning(true); // Start scanning setPercentage(0); // Reset progress
      const scanInterval = setInterval(() => {
        setPercentage((prevPercentage) => Math.min(prevPercentage + 0.5, 100));
        if (currentIndex === fileArray.length) {
          clearInterval(scanInterval);
        }
      }, 200);
    }
  };

  const fileArray = [
    "_0D514759-F901-46CE-8242-CAC31A4E4D63.vvemp",
    "vnd.crick.clicker",
    "_1AB89C69-751F-4796-B17C-8A294B9A73AC.temp",
    "_1F3455F0-42D9-43D5-8886-A2704AE5E134.temp",
    "x-msdownload",
    "x-cpio",
    "_2E2DE53A-E3A9-463E-A974-73683F153316ggf.cmp",
    "_5EFFA188-C033-4A34-A99F-290C5B3AE786.dwemp",
    "application/vnd.lotus-approach",
    "_3E7DA8B3-A94A-4CE2-86D8-23A018981604.temp",
    "_7D535042-4D0A-4CCC-B86D-9342F9E0D49433.3emp",
    "vnd.fujixerox.ddd",
    "vnd.crick.clicker.template",
    "application/vnd.americandynamics.acc",
    "_19F5AC38-D592-4CE8-8715-A5F54EDB45A9.temp",
    "x-debian-package",
    "video/x-msvideo",
    "_25C06FA7-A0FE-44AF-A198-B91C891DF4D9.temp",
    "octet-stream",
    "application/vnd.accpac.simply.aso",
    "_25C06FA7-A0FE-44AF-A198-B91C891DF4D9.ghemp",
    "application/vnd.adobe.air-application-installer-package+zip",
    "_037CE536-ED5E-4490-8F4A-826DC4C3799A.safemp",
    "_25C06FA7-A0FE-44AF-A198-B91C891DF4D9.temp",
    "mac-compactpro",
    "video/x-ms-asf",
    "_3E7DA8B3-A94A-4CE2-86D8-23A018981604.temp",
    "_1F3455F0-42D9-43D5-8886-A2704AE5E134.tem",
    "_064B2BE1-70A8-4CC7-A37A-6983DA85B6C7.bemp",
    "_0D514759-F901-46CE-8242-CAC31A4E4D63.uemp",
    "vnd.fujixerox.ddd",
    "prs.cww",
    "_1AB89C69-751F-4796-B17C-8A294B9A73AC.tffgmp",
    "application/x-abiword",
    "_F7B78A56-88BA-4BCB-8816-3490216179AD.temp",
    "application/x-authorware-seg",
    "_1F3455F0-42D9-43D5-8886-A2704AE5E134.emp",
    "_5E204C6E-D249-4370-AC83-0C13568C0BB3.mp",
    "CustomINI6440c07a208.txt",
    "CustomINI6440c07d2ad.txt",
    "_25C06FA7-A0FE-44AF-A198-B91C891DF4D9.gemp",
    "CustomINI6440c07e3ac.txt",
    "_25C06FA7-A0FE-44AF-A198-B91C891DF4D9.temp",
    "CustomINI6440c07f108.txt",
    "_0D514759-F901-46CE-8242-CAC31A4E4D63.rmp",
    "_1AB89C69-751F-4796-B17C-8A294B9A73AC.femp",
    "CustomINI6440c0813e7.txt",
    "_25C06FA7-A0FE-44AF-A198-B91C891DF4D9.#emp",
    "gustomINI64102e5b114.txt",
    "dustomINI64102e6ccc.txt",
    "xustomINI6440c0803d6.txt",
    "CustomINI644212131d5.txt",
    "application/x-authorware-map",
    "application/vnd.lotus-1-2-3",
    "_25C06FA7-A0FE-44AF-A198-B91C891DF4D9.temp",
    "text/vnd.in3d.3dml",
    "MsEdgeCrashpad",
    "UIU_IROR_6440C094154",
    "application/octet-stream",
    "Microsoft Visual Studio Tools for Office Runtime 2010 Setup_10.0.5090",
    "application/x-authorware-bin",
    "video/x-msvideo",
    "_25C06FA7-A0FE-44AF-A198-B91C891DF4D9.temp",
    "octet-stream",
    "application/vnd.accpac.simply.aso",
    "_25C06FA7-A0FE-44AF-A198-B91C891DF4D9.ghemp",
    "application/vnd.adobe.air-application-installer-package+zip",
    "_037CE536-ED5E-4490-8F4A-826DC4C3799A.safemp",
    "_25C06FA7-A0FE-44AF-A198-B91C891DF4D9.temp",
    "vnd.crick.clicker",
    "_1AB89C69-751F-4796-B17C-8A294B9A73AC.temp",
    "_1F3455F0-42D9-43D5-8886-A2704AE5E134.temp",
    "x-msdownload",
    "x-cpio",
    "_2E2DE53A-E3A9-463E-A974-73683F153316ggf.cmp",
    "_5EFFA188-C033-4A34-A99F-290C5B3AE786.dwemp",
    "application/vnd.lotus-approach",
    "_3E7DA8B3-A94A-4CE2-86D8-23A018981604.temp",
    "_7D535042-4D0A-4CCC-B86D-9342F9E0D49433.3emp",
    "vnd.fujixerox.ddd",
    "vnd.crick.clicker.template",
    "application/vnd.americandynamics.acc",
    "_19F5AC38-D592-4CE8-8715-A5F54EDB45A9.temp",
    "_25C06FA7-A0FE-44AF-A198-B91C891DF4D9.gemp",
    "CustomINI6440c07e3ac.txt",
    "_25C06FA7-A0FE-44AF-A198-B91C891DF4D9.temp",
    "CustomINI6440c07f108.txt",
    "_0D514759-F901-46CE-8242-CAC31A4E4D63.rmp",
    "_1AB89C69-751F-4796-B17C-8A294B9A73AC.femp",
    "CustomINI6440c0813e7.txt",
    "_7D535042-4D0A-4CCC-B86D-9342F9E0D49433.3emp",
    "vnd.fujixerox.ddd",
    "vnd.crick.clicker.template",
    "application/vnd.americandynamics.acc",
    "_19F5AC38-D592-4CE8-8715-A5F54EDB45A9.temp",
    "x-debian-package",
    "video/x-msvideo",
    "_25C06FA7-A0FE-44AF-A198-B91C891DF4D9.temp",
    "octet-stream",
  ];
  let currentIndex = 0;
  useEffect(() => {
    let interval;
    if (isScanning) {
      interval = setInterval(() => {
        setPercentage((prevPercentage) => Math.min(prevPercentage + 0.5, 100));
        let currentIndex = parseInt(percentage);
        if (percentage > 0 && percentage < 100) {
          setData(fileArray[currentIndex]);
          if (currentIndex === fileArray.length) {
            clearInterval(interval);
          }
        }
      }, 200);
    } else {
      clearInterval(interval);
      setPercentage(0);
      setData("");
    }
    return () => clearInterval(interval);
  }, [isScanning, percentage, fileArray]);

  useEffect(() => {
    if (percentage === 20) {
      clearInterval();
      setRandomNumbers((prevNumbers) => ({
        ...prevNumbers,
        issuesfirst: getRandomNumber(),
      }));
    }
    if (percentage === 48) {
      setRandomNumbers((prevNumbers) => ({
        ...prevNumbers,
        issuessecond: getRandomNumber(),
      }));
    }
    if (percentage === 77) {
      setRandomNumbers((prevNumbers) => ({
        ...prevNumbers,
        issuesthird: getRandomNumber(),
      }));
    }
    if (percentage === 100) {
      setRandomNumbers((prevNumbers) => ({
        ...prevNumbers,
        issuesfour: getRandomNumber(),
      }));
    }
  }, [percentage]);
  function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  // scan date and Time
  useEffect(() => {
    const currentTime = new Date().toLocaleTimeString();
    const currentDate = new Date().toLocaleDateString();
    // const newRow = `${currentTime} - ${currentDate}`;

    // Update the state with the new row
    setScanTime((prevScans) => [...prevScans, currentTime, currentDate]);

    // Save registry scans to local storage
    localStorage.setItem(
      "scanTime",
      JSON.stringify([...scanTime, currentTime, currentDate])
    );
  }, []);

  return (
    <>
      {" "}
      <div className="StartScan">
        <div className="uppertextprogress">
          {" "}
          <div>
            {" "}
            please be patient while system is scanned, it may take few minutes.{" "}
          </div>
        </div>
        <div class="progress">
          {" "}
          <div
            class="progress-bar progress-bar-striped bg-success"
            role="progressbar"
            style={{ width: `${percentage}%` }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {" "}
            <span>{percentage.toFixed()}%</span>{" "}
          </div>{" "}
          <div>{data}</div>
        </div>{" "}
      </div>
      <div className="firstregistrysection">
        <div className="secondregistrysection">
          {" "}
          <div className="firstsection">
            {" "}
            <table className="table-start">
              {" "}
              <tr className="tableheading">
                {" "}
                <th>Registry Section</th> <th>Status</th> <th>Issues</th>{" "}
                <th className="startscanremoveallth">Recommended Action</th>{" "}
                <th className="startscanRemovedall" onClick={handleRemoveAll}>
                  {" "}
                  Remove{" "}
                </th>{" "}
              </tr>
              <div className="firstbox">
                {" "}
                <div>
                  {" "}
                  <div className="firstboxfirst">
                    {" "}
                    <div className="computericon">
                      {" "}
                      <i
                        class="fa-solid fa-desktop  fa-xs"
                        style={{ color: "#0d3882;" }}
                      ></i>{" "}
                    </div>{" "}
                    <div className="systemdiv">
                      {" "}
                      <div className="systemrelatedissuse">
                        {" "}
                        <button>System related issues</button>{" "}
                      </div>{" "}
                      <div>
                        {" "}
                        <div className="issuesaffe">
                          {" "}
                          Issues affecting all users profile on the PC{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div>
                  {" "}
                  {percentage < 20 ? (
                    <div className="loader"></div>
                  ) : (
                    <div className="infobtn">
                      {" "}
                      {randomNumbers.issuesfirst == 0 ? (
                        <i
                          class="fa-solid fa-circle-info"
                          style={{ color: "green", marginTop: "23px" }}
                        ></i>
                      ) : randomNumbers.issuesfirst <= 30 ? (
                        <i
                          class="fa-solid fa-circle-info"
                          style={{ color: "orange", marginTop: "23px" }}
                        ></i>
                      ) : (
                        <i
                          class="fa-solid fa-circle-info"
                          style={{ color: "red", marginTop: "23px" }}
                        ></i>
                      )}{" "}
                    </div>
                  )}{" "}
                </div>{" "}
                <div>
                  {" "}
                  {percentage >= 20 && (
                    <div className="mainissues">
                      {" "}
                      <div className="issuesfirst">
                        {" "}
                        {removeRendomNumber ? (
                          <span class="loader"></span>
                        ) : (
                          randomNumbers.issuesfirst
                        )}{" "}
                      </div>{" "}
                    </div>
                  )}{" "}
                </div>
                <div className="recomendedactionmain">
                  {percentage >= 20 && (
                    <span
                      className={`recomendedactionfirst ${
                        percentage < 100 ? "disabled" : ""
                      }`}
                      onClick={() => handleRemove("issuesfirst")}
                      disabled={percentage === 20}
                    >
                      {" "}
                      remove{" "}
                    </span>
                  )}
                </div>
                <div className="startScanfirstbox">
                  {" "}
                  <input
                    type="checkbox"
                    style={{marginTop:"25px"}}
                    checked={checkboxes.first}
                    onChange={() =>
                      setCheckboxes((prevCheckboxes) => ({
                        ...prevCheckboxes,
                        first: !prevCheckboxes.first,
                      }))
                    }
                  />{" "}
                </div>
              </div>
              <div className="secondbox">
                {" "}
                <div>
                  {" "}
                  <div className="firstboxfirst">
                    {" "}
                    <div className="computericon">
                      {" "}
                      <i
                        class="fa-solid fa-gears  fa-xs"
                        style={{ color: "#174696;" }}
                      ></i>{" "}
                    </div>{" "}
                    <div className="systemdiv">
                      {" "}
                      <div className="systemrelatedissuse">
                        {" "}
                        <button>Com and ActiveX issues</button>{" "}
                      </div>{" "}
                      <div>
                        {" "}
                        <div className="issuesaffe">
                          {" "}
                          Issues related to Com and Active-X components{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div>
                  {" "}
                  <div className="statuscontentsecond">
                    {" "}
                    {percentage < 48 ? (
                      <div
                        className={`loader ${
                          percentage >= 48 ? "complete" : ""
                        }`}
                      ></div>
                    ) : (
                      <div className="infobtn">
                        {" "}
                        {randomNumbers.issuessecond == 0 ? (
                          <i
                            class="fa-solid fa-circle-info"
                            style={{ color: "green" }}
                          ></i>
                        ) : randomNumbers.issuessecond <= 30 ? (
                          <i
                            class="fa-solid fa-circle-info"
                            style={{ color: "orange" }}
                          ></i>
                        ) : (
                          <i
                            class="fa-solid fa-circle-info"
                            style={{ color: "red" }}
                          ></i>
                        )}{" "}
                      </div>
                    )}{" "}
                  </div>{" "}
                </div>{" "}
                <div>
                  {" "}
                  {percentage >= 48 && (
                    <div className="mainissues">
                      {" "}
                      <div className="issuessecond">
                        {" "}
                        {removeRendomNumbertwo ? (
                          <span class="loader"></span>
                        ) : (
                          randomNumbers.issuessecond
                        )}{" "}
                      </div>{" "}
                    </div>
                  )}{" "}
                </div>
                <div className="recomendedactionmain">
                  {" "}
                  {percentage >= 48 && (
                    <span
                      className={`recomendedactionfirst ${
                        percentage < 100 ? "disabled" : ""
                      }`}
                      onClick={() => handleRemovetwo("issuessecond")}
                      disabled={percentage === 48}
                    >
                      {" "}
                      remove{" "}
                    </span>
                  )}{" "}
                </div>
                <div className="startScanfirstbox">
                  {" "}
                  <input
                    type="checkbox"
                    style={{marginTop:"25px"}}
                    checked={checkboxes.second}
                    onChange={() =>
                      setCheckboxes((prevCheckboxes) => ({
                        ...prevCheckboxes,
                        second: !prevCheckboxes.second,
                      }))
                    }
                  />{" "}
                </div>
              </div>
              <div className="thirdbox">
                <div>
                  <div className="firstboxfirst">
                    <div className="computericon">
                      <i
                        class="fa-solid fa-users  fa-xs"
                        style={{ color: "#1ad57e;" }}
                      ></i>
                    </div>
                    <div className="systemdiv">
                      <div className="systemrelatedissuse">
                        <button>User related issues</button>
                      </div>
                      <div>
                        <div className="issuesaffe">
                          Issues affecting your personal profile
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="statuscontentsecond">
                    {percentage < 77 ? (
                      <div
                        className={`loader ${
                          percentage >= 77 ? "complete" : ""
                        }`}
                      ></div>
                    ) : (
                      <div className="infobtn">
                        {randomNumbers.issuesthird == 0 ? (
                          <i
                            class="fa-solid fa-circle-info"
                            style={{ color: "green" }}
                          ></i>
                        ) : randomNumbers.issuesthird <= 30 ? (
                          <i
                            class="fa-solid fa-circle-info"
                            style={{ color: "orange" }}
                          ></i>
                        ) : (
                          <i
                            class="fa-solid fa-circle-info"
                            style={{ color: "red" }}
                          ></i>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  {percentage >= 77 && (
                    <div className="mainissues">
                      <div className="issuesthird">
                        {removeRendomNumberthree ? (
                          <span class="loader"></span>
                        ) : (
                          randomNumbers.issuesthird
                        )}
                      </div>
                    </div>
                  )}
                </div>
                <div className="recomendedactionmain">
                  {percentage >= 77 && (
                    <span
                      className={`recomendedactionfirst ${
                        percentage < 100 ? "disabled" : ""
                      }`}
                      onClick={() => handleRemovethree("issuesthird")}
                      disabled={percentage === 77}
                    >
                      remove
                    </span>
                  )}
                </div>
                <div className="startScanfirstbox">
                  <input
                    type="checkbox"
                    style={{marginTop:"25px"}}
                    checked={checkboxes.third}
                    onChange={() =>
                      setCheckboxes((prevCheckboxes) => ({
                        ...prevCheckboxes,
                        third: !prevCheckboxes.third,
                      }))
                    }
                  />
                </div>
              </div>
              <div className="fourthbox">
                <div>
                  <div className="firstboxfirst">
                    <div className="computericon">
                      <i
                        class="fa-regular fa-file-lines  fa-xs"
                        style={{ color: "#1ad57e;" }}
                      ></i>
                    </div>
                    <div className="systemdiv">
                      <div className="systemrelatedissuse">
                        <button>Startup and Uninstall issues</button>
                      </div>
                      <div>
                        <div className="issuesaffe">
                          Issues related to Startup and Uninstall section
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="statuscontentsecond">
                    {percentage < 100 ? (
                      <div
                        className={`loader ${
                          percentage === 100 ? "complete" : ""
                        }`}
                      ></div>
                    ) : (
                      <div className="infobtn">
                        {randomNumbers.issuesfour == 0 ? (
                          <i
                            class="fa-solid fa-circle-info"
                            style={{ color: "green" }}
                          ></i>
                        ) : randomNumbers.issuesfour <= 30 ? (
                          <i
                            class="fa-solid fa-circle-info"
                            style={{ color: "orange" }}
                          ></i>
                        ) : (
                          <i
                            class="fa-solid fa-circle-info"
                            style={{ color: "red" }}
                          ></i>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  {percentage === 100 && (
                    <div className="mainissues">
                      <div className="issuesfour">
                        {removeRendomNumberfour ? (
                          <span class="loader"></span>
                        ) : (
                          randomNumbers.issuesfour
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <div className="recomendedactionmain">
                  {percentage === 100 && (
                    <span
                      className="recomendedactionfirst"
                      onClick={() => handleRemovefour("issuesfour")}
                    >
                      remove
                    </span>
                  )}
                </div>
                <div className="startScanfirstbox">
                  <input
                    type="checkbox"
                    style={{marginTop:"25px"}}
                    checked={checkboxes.fourth}
                    onChange={() =>
                      setCheckboxes((prevCheckboxes) => ({
                        ...prevCheckboxes,
                        fourth: !prevCheckboxes.fourth,
                      }))
                    }
                  />
                </div>
                {/* <button
                  className="stopscansecond-buttonRemove"
                  onClick={handleRemoveAll2}
                >
                  Remove All
                </button> */}
              </div>
            </table>
            <div></div>
          </div>
        </div>
        <div className="stopScanbtnmain">
          <div className="stopscanfirst">
            DevClean Pro is now scanning your system for Registry issues.These
            issues usually device from various software install and/or
            uninstalled from your pc. they are most often the cases of a slow PC
          </div>

          <div className="stopscansecond">
            <button
              className="stopscansecond-button"
              style={{ verticalAlign: "middle" }}
              onClick={handleScanToggle}
            >
              <span>
                {percentage > 0 && percentage < 100
                  ? "Stop Scan"
                  : "Start Scan"}
              </span>
            </button>
          </div>

          <div className="removebutton" onClick={handleRemoveAll2}>
            <button>Remove All</button>
          </div>
          <div className="removeclickbutton"  onClick={handleRemoveAll}>
            <button>Click on Remove</button>
          </div>
          
        </div>
      </div>
      {showRegisterPopupComponent && (
        <RegisterPopupComponent
          onClose={() => setShowRegisterPopupComponent(false)}
          onValidationSuccess={handleRemoveAll}
        />
      )}
    </>
  );
}
