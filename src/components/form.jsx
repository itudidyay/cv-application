export default function Form({
  label,
  name,
  data,
  onChange
}) {
  return <>
    <div>
      <label>{label}: </label>
      </div>
      <div>
      <input 
        name={name}
        value={data}
        onChange={onChange}
      />
    </div>
  </>
}