export default function Resume({ resume }) {
  return (
    <div className="resume">
      <h1>{resume.name}</h1>

      <h3>
        {resume.email} | {resume.phoneNumber}
      </h3>

      <h2>Education</h2>

      {resume.educationalExperience.map((education) => (
        <div key={education.id}>
          <h3>{education.schoolName}</h3> 
          <h3>{education.degree}</h3>
          <p>
            {education.startDate} - {education.endDate}
          </p>
        </div>
      ))}

      <h2>Experience</h2>

      {resume.practicalExperience.map((experience) => (
        <div key={experience.id}>
          <h3>{experience.companyName}</h3>
          <p>{experience.position}</p>
          <p>
            {experience.startDate} - {experience.endDate}
          </p>
          {experience.highlights}
        </div>
      ))}
    </div>
  )
}