import Form from "./form"
export default function GeneralInfo({ resume, onChange }) {
  return (
    <>
      <Form
        label="Name"
        name="name"
        data={resume.name}
        onChange={onChange}
      />
      <Form
        label="Email"
        name="email"
        data={resume.email}
        onChange={onChange}
      />
      <Form
        label="Phone Number"
        name="phoneNumber"
        data={resume.phoneNumber}
        onChange={onChange}
      />
    </>
  );
}
