import React, { useState } from "react";
import lock from "../Image/locker.png";
import key from "../Image/key.png";
import Swal from "sweetalert2";
export default function RegisterPopupComponent({ onClose }) {
  const [userDetail, setuserDetail] = useState("");
  const handleClose = () => {
    onClose();
    // window.location.href = "/";
  };
  const handlelincenskey = async () => {
    try {
      const response = await fetch("http://localhost:5000/getlicenseKey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: userDetail.email,
          licenseKey: userDetail.licenseKey,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("licenseKey", JSON.stringify(data));
        onClose();
        // window.alert("data is correct")
        Swal.fire("Your Email and Password is Correct");

        // window.location.href = "/";
      } else {
        console.log("not matched");
        // window.alert("email or password is incorrect")
        onClose();
        Swal.fire({
          icon: "error",
          title: "email or password is incorrect",
          text: "Something went wrong!",
          footer: '<a href="#">Please Cheak your email</a>',
        });
      }
    } catch (error) {
      console.log("Server is not call");
    }
  };
  return (
    <>
      <div className="popup-container">
        <div className="popup-content">
          <div className="registernowbody">
            <div className="registernowfistpara">
              <p>Thank you for Trying DevCleaner Pro!</p>
            </div>
            <div className="marqueeinpopup">
              Please Contact our Support 9898989898.
            </div>
            <div className="registernowalreadyhavekey">
              <div className="registernowalreadyhavekeypartone">
                <div className="registernowimg">
                  <img src={lock} alt="" srcset="" />
                </div>
              </div>
              <div className="registernowalreadyhavekeyparttwo">
                <p>Already have a License Key</p>
                <div className="registernowalreadyhavekeyparttwoin">
                  <div>
                    {" "}
                    If you have a License key , please enter it in the form
                    below and click <span className="spanw">Register Now</span>
                  </div>
                  <div className="registernowinput">
                    <div className="registernowinputfirst">
                      <label htmlFor="">Enter Your Email Address :</label>
                      <input
                        required
                        onChange={(e) =>
                          setuserDetail({
                            ...userDetail,
                            [e.target.name]: e.target.value,
                          })
                        }
                        type="email"
                        name="email"
                        class="form-control"
                      />
                      <label htmlFor="">License Key :</label>
                      <input
                        required
                        onChange={(e) =>
                          setuserDetail({
                            ...userDetail,
                            [e.target.name]: e.target.value,
                          })
                        }
                        type="text"
                        name="licenseKey"
                      />
                      <div className="registernowinputfirstbutton">
                        <button onClick={handlelincenskey}>Submit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="registernowalreadyhavekey">
              <div className="registernowalreadyhavekeypartone">
                <div className="registernowimg">
                  <img src={key} alt="" srcset="" />
                </div>
              </div>{" "}
              <div className="registernowalreadyhavekeyparttwo">
                <p>Need a License Key</p>
                <div className="registernowalreadyhavekeyparttwoin">
                  <div>
                    <div>
                      We recommended that you upgrade to the full version of{" "}
                      <span
                        style={{
                          color: "rgb(246, 134, 55)",
                          fontWeight: "600",
                        }}
                      >
                        DevClean Pro
                      </span>{" "}
                    </div>
                    <div>
                      {" "}
                      to repair all registry on your PC , other benefit may
                      include faster startup and{" "}
                    </div>
                    <div> greater stability of your system </div>
                  </div>
                  <div className="registernowinput">
                    <div className="registernowinputfirst">
                      <div className="registernowinputfirstbuttonbuynow">
                        <button className="registernowinputfirstbuttona">
                          <a
                            target="blank"
                            href="https://cleanersite.netlify.app/checkout"
                          >
                            Buy Now{" "}
                          </a>{" "}
                        </button>{" "}
                      </div>
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <span className="popupclosebtn" onClick={handleClose}>
          <i
            class="fa-solid fa-rectangle-xmark"
            style={{ color: "#0e5ce1" }}
          ></i>
        </span>{" "}
      </div>{" "}
    </>
  );
}
