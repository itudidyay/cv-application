export default function Form({
  label,
  name,
  data,
  onChange
}) {
  return <>
    <label>{label}: </label>
    <input 
      name={name}
      value={data}
      onChange={onChange}
    />
  </>
}