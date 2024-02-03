import React, { useState,useEffect } from "react";
import earth from "../Image/img.png";
import cut from "../Image/cut.png";
import search from "../Image/search.png";
import computer from "../Image/computer.png";
import people from "../Image/pepole.png";
import caiset from "../Image/caiset.png";
import setting from "../Image/setting.png";
import StartScan from "./StartScan";
export default function Setting({ value }) {
  const [buttonType, setButtonType] = useState(
    value === "Scan" ? value : "General"
  );
  const [cleanerStart, setCleanerStart] = useState("status");
   const [checkboxStates, setCheckboxStates] = useState(() => {

    const storedCheckboxStates = JSON.parse(
      localStorage.getItem("checkboxStates")
    );
    return storedCheckboxStates || {
      application: false,
      fonts: false,
      helpFiles: false,
    };
  });
  useEffect(() => {
    localStorage.setItem("checkboxStates", JSON.stringify(checkboxStates));
  }, [checkboxStates]);

  const handleCheckboxChange = (checkboxName) => {
    setCheckboxStates((prevStates) => ({
      ...prevStates,
      [checkboxName]: !prevStates[checkboxName],
    }));
  };
  const handleApplyButtonClick = () => {
    Object.keys(checkboxStates).forEach((checkboxName) => {
      handleCheckboxChange(checkboxName);
    });
  };


  const handleClickGeneral = () => {
    setButtonType("General");
  };
  const handleClickScan = () => {
    setButtonType("Scan");
  };

  return cleanerStart === "status" ? (
    <>
      {" "}
      <div className="settingfirstbox">
        <div className="firstboxone">
          {" "}
          <button onClick={handleClickGeneral}>General</button>{" "}
          <button onClick={handleClickScan}>Scan Area</button>{" "}
        </div>{" "}
      </div>{" "}
      {buttonType === "General" && (
        <div className="firstgeneral">
          <div className="firstgeneralboxone">
            <div className="generalfirstbar">
              <div className="generalsecondbar">Language :</div>{" "}
            </div>{" "}
            <div className="generalsecondboxone">
              {" "}
              <div className="first">
                {" "}
                <div className="firstearth">
                  {" "}
                  <img src={earth} alt="" srcset="" />{" "}
                </div>{" "}
              </div>{" "}
              <div className="second">
                {" "}
                <div className="secondPara">
                  {" "}
                  Select the Preferred language :{" "}
                </div>{" "}
                <div className="secondinput">
                  {" "}
                  <select className="selectinput" name="cars" id="cars">
                    {" "}
                    <option value="en">English</option>{" "}
                    <option value="es">Spanish</option>{" "}
                    <option value="fr">French</option>{" "}
                    <option value="de">German</option>{" "}
                    <option value="it">Italian</option>{" "}
                  </select>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="firstgeneralboxtwo">
            <div className="generalfirstbar">
              <div className="generalsecondbar">Program Control :</div>
            </div>
            <div className="generalsecondboxone">
              <div className="first">
                <div className="firstearth">
                  <img src={cut} alt="" srcset="" />
                </div>
              </div>
              <div className="second">
                <div className="secondPara">
                  {" "}
                  Select action on Close Button :
                </div>
                <div className="secondinput">
                  <select className="selectinput" name="cars" id="cars">
                    <option value="saab">Exits DevCleaner</option>
                    <option value="volvo">Minimize DevCleaner</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="firstgeneralboxthird">
            <div className="generalfirstbar">
              {" "}
              <div className="generalsecondbar">StartUp Schedule :</div>
            </div>
            <div className="generalsecondboxone">
              <div className="first">
                {" "}
                <div className="firstearth">
                  <img src={search} alt="" srcset="" />{" "}
                </div>
              </div>
              <div className="second">
                <div className="secondinput checkbox">
                  {" "}
                  <div className="secondinputpara">
                    <input
                      type="checkbox"
                      value="Launch"
                      checked={checkboxStates.Launch}
                    onClick={() => handleCheckboxChange("Launch")}
                    />
                    <label for="vehicle1">
                      {" "}
                      Launch at Window startup ans start a registry scan
                    </label>
                  </div>
                  <div className="secondinputpara">
                    <input
                      type="checkbox"
                      value="Product"
                      checked={checkboxStates.Product}
                    onClick={() => handleCheckboxChange("Product")}
                    />{" "}
                    <label for="vehicle1"> Product Message</label>
                  </div>
                  <div className="secondinputpara">
                    <input
                      type="checkbox"
                      value="periodic"
                      checked={checkboxStates.periodic}
                    onClick={() => handleCheckboxChange("periodic")}
                    />
                    <label for="vehicle1">
                      Show periodic update messages to optimize your pc{" "}
                    </label>{" "}
                  </div>{" "}
                  <div className="secondinputpara">
                    <input
                      type="checkbox"
                      value="hide"
                      checked={checkboxStates.hide}
                    onClick={() => handleCheckboxChange("hide")}
                    />
                    <label for="vehicle1">Hide Notification</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="setting-btn">
            <button className="applybtn scanspan button1 ">Apply</button>
          </div>{" "}
        </div>
      )}
      {buttonType === "Scan" && (
        <div className="firstScan">
          <div className="generalfirstbar">
            <div className="generalsecondbar">
              {" "}
              Select the areas you like to be scanned for issues :{" "}
            </div>{" "}
          </div>
          <div className="scandiv">
            {" "}
            <div className="scanbox1">
              <div className="firstscandiv">
                <img className="people-img" src={computer} alt="" />{" "}
              </div>
              <div className="firstsecond">
                <div className="check-box">
                  <input
                    type="checkbox"
                    value="application"
                    checked={checkboxStates.application}
                    onClick={() => handleCheckboxChange("application")}
                  />
                  <label className="checkbox-label"> Application</label>{" "}
                </div>
                <div className="check-box">
                  <input 
                  type="checkbox"
                   value="fonts"
                   checked={checkboxStates.fonts}
                    onClick={() => handleCheckboxChange("fonts")}
                    />{" "}
                  <label className="checkbox-label"> Fonts</label>
                </div>
                <div className="check-box">
                  <input
                   type="checkbox"
                    value="helpfiles" 
                    checked={checkboxStates.helpfiles}
                    onClick={() => handleCheckboxChange("helpfiles")}
                    />
                  <label className="checkbox-label"> Help Files</label>
                </div>
                <div className="check-box">
                  <input 
                  type="checkbox"
                   value="deepscan" 
                   checked={checkboxStates.deepscan}
                    onClick={() => handleCheckboxChange("deepscan")}
                   />
                  <label className="checkbox-label"> Deep Scan</label>
                </div>
              </div>
            </div>
            <div>
              <div className="scanbox1">
                <div className="firstscandiv">
                  <img className="peoples-img" src={people} alt="" />
                </div>
                <div className="firstsecond">
                  {" "}
                  <div className="check-box">
                    <input type="checkbox" 
                    value="historyfiles" 
                    checked={checkboxStates.historyfiles}
                    onClick={() => handleCheckboxChange("historyfiles")}
                    />{" "}
                    <label className="checkbox-label"> History Files</label>{" "}
                  </div>{" "}
                  <div className="check-box">
                    <input 
                    type="checkbox" 
                    value="shortcut" 
                    checked={checkboxStates.shortcut}
                    onClick={() => handleCheckboxChange("shortcut")}
                    />{" "}
                    <label className="checkbox-label"> Shortcuts</label>{" "}
                  </div>
                  <div className="check-box">
                    {" "}
                    <input 
                    type="checkbox" 
                    value="sound" 
                    checked={checkboxStates.sound}
                    onClick={() => handleCheckboxChange("sound")}
                    />
                    <label className="checkbox-label"> Sounds</label>
                  </div>
                  <div className="check-box">
                    <input 
                    type="checkbox" 
                    value="currentuser" 
                    checked={checkboxStates.currentuser}
                    onClick={() => handleCheckboxChange("currentuser")}
                    />
                    <label className="checkbox-label"> Current User</label>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="scanbox1">
                <div className="firstscandiv">
                  <img className="people-img" src={caiset} alt="" />
                </div>{" "}
                <div className="firstsecond">
                  {" "}
                  <div className="check-box">
                    {" "}
                    <input 
                    type="checkbox" 
                    value="com" 
                    checked={checkboxStates.com}
                    onClick={() => handleCheckboxChange("com")}
                    />{" "}
                    <label className="checkbox-label"> Com and Active</label>
                  </div>{" "}
                  <div className="check-box">
                    {" "}
                    <input 
                    type="checkbox" 
                    value="active" 
                    checked={checkboxStates.active}
                    onClick={() => handleCheckboxChange("active")}
                    />{" "}
                    <label className="checkbox-label"> Active x And Com</label>{" "}
                  </div>{" "}
                  <div className="check-box">
                    {" "}
                    <input 
                    type="checkbox" 
                    value="files" 
                    checked={checkboxStates.files}
                    onClick={() => handleCheckboxChange("files")}
                    />{" "}
                    <label className="checkbox-label"> Files Types</label>{" "}
                  </div>{" "}
                  <div className="check-box">
                    {" "}
                    <input 
                    type="checkbox" 
                    value="share" 
                    checked={checkboxStates.share}
                    onClick={() => handleCheckboxChange("share")}
                    />
                    <label className="checkbox-label"> Shared File</label>
                  </div>{" "}
                </div>
              </div>
            </div>
            <div>
              <div className="scanbox1">
                <div className="firstscandiv">
                  <img className="peoples-img" src={setting} alt="" />
                </div>
                <div className="firstsecond">
                  <div className="check-box">
                    <input
                     type="checkbox"
                      value="startupuninstall"
                      checked={checkboxStates.startupuninstall}
                    onClick={() => handleCheckboxChange("startupuninstall")}
                       />
                    <label className="checkbox-label">
                      {" "}
                      Startup and Uninstall issues{" "}
                    </label>
                  </div>
                  <div className="check-box">
                    <input 
                    type="checkbox" 
                    value="start" 
                    checked={checkboxStates.start}
                    onClick={() => handleCheckboxChange("start")}
                    />
                    <label className="checkbox-label"> Start Menu</label>
                  </div>
                  <div className="check-box">
                    <input 
                    type="checkbox" 
                    value="startup" 
                    checked={checkboxStates.startup}
                    onClick={() => handleCheckboxChange("startup")}
                    />
                    <label className="checkbox-label">
                      {" "}
                      Startup Program
                    </label>{" "}
                  </div>
                  <div className="check-box">
                    {" "}
                    <input 
                    type="checkbox" 
                    value="add" 
                    checked={checkboxStates.add}
                    onClick={() => handleCheckboxChange("add")}
                    />
                    <label className="checkbox-label">
                      {" "}
                      Add Remove Program{" "}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottomdiv">
            <div className="bip">
              <span className="scanspan button1">Restore Default</span>
              <span className="scanspan button1">Apply</span>
            </div>
            <button
              className="applybtn scanspan button1"
              onClick={(e) => setCleanerStart("start-registry")}
            >
              {" "}
              Start scan
            </button>{" "}
          </div>
        </div>
      )}
    </>
  ) : (
    <StartScan />
  );
}
