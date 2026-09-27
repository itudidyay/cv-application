export default function Form({
  label,
  name,
  data,
  onChange,
  useTextarea = false
}) {
  return <>
    <div>
      <label>{label}: </label>
      </div>
      <div>
      {useTextarea ? 
        <textarea 
          name={name}
          value={data}
          onChange={onChange}
        >
        </textarea>
        :
        <input 
          name={name}
          value={data}
          onChange={onChange}
        />
      }
      
    </div>
  </>
}