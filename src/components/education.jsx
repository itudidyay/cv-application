import Form from "./form"

export default function EducationForm({
  educationData,
  onChange,
  onRemove }) {
  return (
    <div>
      <Form
        label="School"
        name="schoolName"
        data={educationData.schoolName}
        onChange={e =>
          onChange(educationData.id, "schoolName", e.target.value)}
      />
      
      <Form
        label="Degree"
        name="degree"
        data={educationData.degree}
        onChange={e =>
          onChange(educationData.id, "degree", e.target.value)}
      />

      <Form
        label="Start Date"
        name="startDate"
        data={educationData.startDate}
        onChange={e =>
          onChange(educationData.id, "startDate", e.target.value)}
      />

      <Form
        label="End Date"
        name="endDate"
        data={educationData.endDate}
        onChange={e =>
          onChange(educationData.id, "endDate", e.target.value)}
      />

      <button onClick={() => onRemove(educationData.id)}>
        Delete
      </button>
    </div>
  );
}
