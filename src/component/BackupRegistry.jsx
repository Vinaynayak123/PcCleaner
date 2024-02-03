import React, { useState, useEffect } from "react";
import filemanager from "../Image/filemanager.jpeg";
import Swal from "sweetalert2";
export default function BackupRegistry() {
  const [registryScans, setRegistryScans] = useState([]);

  useEffect(() => {
    const storedScans = localStorage.getItem("registryScans");
    if (storedScans) {
      setRegistryScans(JSON.parse(storedScans));
    }
  }, []);

  const handleOptimizeRegistryScan = () => {
    let timerInterval;
    Swal.fire({
      title: "Please Wait Some Time ",
      html: "It will Take Some  <b></b> Time.",
      timer: 5000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });

    setTimeout(()=>{
      const currentTime = new Date().toLocaleTimeString();
    const currentDate = new Date().toLocaleDateString();
    const newRow = `${currentTime} - ${currentDate}`;

    // Update the state with the new row
    setRegistryScans((prevScans) => [...prevScans, newRow]);

    // Save registry scans to local storage
    localStorage.setItem(
      "registryScans",
      JSON.stringify([...registryScans, newRow])
    );
    },3000)
  };

  return (
    <>
      <div className="backupregistry">
        <div className="backupregistrySecond">Backup Registry :</div>
      </div>
      <div className="backupseconddiv">
        DevCleaner pro provides complete backup and restore support. To return
        toany previous configuration , simply select an item from the list below
        and click on the Restore button to start the restore process
      </div>
      <div className="backupbutton">
        <button
          class="button-scan"
          role="button"
          onClick={handleOptimizeRegistryScan}
        >
          Optimize Registry Scan
        </button>
      </div>
      <div className="backupregistry">
        <div className="backupregistrySecond">Restore Registry :</div>
      </div>
      <div className="registry-scan-rows">
        {registryScans.map((row, index) => (
          <div key={index} className="registry-scan-row">
            <span className="filemanagerimg">
              <img src={filemanager} />
            </span>{" "}
            <span className="datetime">{row}</span>
          </div>
        ))}
      </div>
    </>
  );
}
