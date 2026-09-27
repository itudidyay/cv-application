import { useState } from "react"
import Form from "./form"
import GeneralInfo from "./generalInfo"
export default function Sidebar({ resume, onChange }) {

  return (
    <div className="sidebar">
      <h2>General Information</h2>
      <GeneralInfo
        resume={resume}
        onChange={onChange}
      />
    </div>
  )
}
