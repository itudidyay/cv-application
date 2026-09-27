import GeneralInfo from "./generalInfo"
import EducationForm from "./education"
import PracticalForm from "./practical"

export default function Sidebar({
  resume,
  onChange,
  handleEducationChange,
  addEducation,
  removeEducation,
  handlePracticalChange,
  addPractical,
  removePractical
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

      <h2>Experience</h2>
      <button onClick={addPractical}>
        Add Experience
      </button>
      {resume.practicalExperience.map(practical => (
        <PracticalForm
          practicalData={practical}
          onChange={handlePracticalChange}
          onRemove={removePractical}
        />
      ))}
    </div>

  )
}
