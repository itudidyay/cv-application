import GeneralInfo from "./generalInfo"
import EducationForm from "./education"

export default function Sidebar({
  resume,
  onChange,
  handleEducationChange,
  addEducation,
  removeEducation
}) {

  return (
    <div className="sidebar">
      <h2>General Information</h2>
      <GeneralInfo
        resume={resume}
        onChange={onChange}
      />

      <h2>Education</h2>
      <button onClick={addEducation}>
        Add Education
      </button>
      {resume.educationalExperience.map(education => (
        <EducationForm
          educationData={education}
          onChange={handleEducationChange}
          onRemove={removeEducation}
        />
      ))}

    </div>

  )
}
