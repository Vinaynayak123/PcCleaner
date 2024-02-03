import React, { useState } from 'react'
// import StudentContext from './StudentContext'
import { createContext } from "react";

export const StudentContext = createContext();



const StudentState = (props) => {

  const [cleanerStatus, setCleanerStatus] = useState("status");

 const updateCleanerStatus = (value)=>{
    setCleanerStatus(value)
  }
    


  
  return (
    <div>
      <StudentContext.Provider value={{cleanerStatus:cleanerStatus,updateCleanerStatus:updateCleanerStatus}}>
        {props.children}
      </StudentContext.Provider>
    </div>
  )
}

export default StudentState;