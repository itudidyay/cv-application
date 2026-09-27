import Form from "./form"

export default function PracticalForm({
  practicalData,
  onChange,
  onRemove }) {
  return (
    <div>
      <Form
        label="Company"
        name="companyName"
        data={practicalData.companyName}
        onChange={e =>
          onChange(practicalData.id, "companyName", e.target.value)}
      />
      
      <Form
        label="Position"
        name="position"
        data={practicalData.position}
        onChange={e =>
          onChange(practicalData.id, "position", e.target.value)}
      />

      <Form
        label="Start Date"
        name="startDate"
        data={practicalData.startDate}
        onChange={e =>
          onChange(practicalData.id, "startDate", e.target.value)}
      />

      <Form
        label="End Date"
        name="endDate"
        data={practicalData.endDate}
        onChange={e =>
          onChange(practicalData.id, "endDate", e.target.value)}
      />

      <Form
        label="Highlights"
        name="highlights"
        data={practicalData.highlights}
        useTextarea={true}
        onChange={e =>
          onChange(practicalData.id, "highlights", e.target.value)}
      />

      <button onClick={() => onRemove(practicalData.id)}>
        Delete
      </button>
    </div>
  );
}
