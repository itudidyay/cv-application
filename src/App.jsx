import { useState } from 'react'
import './styles/App.css'
import Sidebar from './components/sidebar'
import Resume from './components/resume'

const exampleResume = {
  name: "John Doe",
  email: "jdoe@example.com",
  phoneNumber: "123-456-7890",
  educationalExperience: [
    {
      id: crypto.randomUUID(),
      schoolName: "Northeast Southwest University",
      degree: "Geography B.S.",
      startDate: "2024",
      endDate: "2028"
    }
  ],
  practicalExperience: [
    {
      id: crypto.randomUUID(),
      companyName: "Acme LCC",
      position: "Roadrunning Intern",
      startDate: "June 2026",
      endDate: "August 2026",
      highlights: "Delivered 1000 deliverables. Solved 2000 solutions. Synergized 3000 synergies"
    }
  ]
}

export default function App() {
  const [resume, setResume] = useState(exampleResume)

  function handleChange(e) {
    const { name, value } = e.target;

    setResume(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleEducationChange(id, field, value) {
    setResume(prev => ({
      ...prev,
      educationalExperience: prev.educationalExperience.map(education =>
        education.id === id
          ? { ...education, [field]: value }
          : education
      )
    }))
  }

  function addEducation() {
    const newEducation = {
      id: crypto.randomUUID(),
      schoolName: "",
      degree: "",
      startDate: "",
      endDate: "",
    }

    setResume(prev => ({
      ...prev,
      educationalExperience: [
        ...prev.educationalExperience,
        newEducation,
      ],
    }))
  }

  function removeEducation(id) {
    setResume(prev => ({
      ...prev,
      educationalExperience: prev.educationalExperience.filter(
        education => education.id !== id
      ),
    }))
  }
  
  function handlePracticalChange(id, field, value) {
    setResume(prev => ({
      ...prev,
      practicalExperience: prev.practicalExperience.map(practical =>
        practical.id === id
          ? { ...practical, [field]: value }
          : practical
      )
    }))
  }

  function addPractical() {
    const newPractical = {
      id: crypto.randomUUID(),
      companyName: "",
      position: "",
      startDate: "",
      endDate: "",
      highlights: ""
    }

    setResume(prev => ({
      ...prev,
      practicalExperience: [
        ...prev.educationalExperience,
        newPractical,
      ],
    }))
  }

  function removePractical(id) {
    setResume(prev => ({
      ...prev,
      practicalExperience: prev.practicalExperience.filter(
        practical => practical.id !== id
      ),
    }))
  }

  return (
    <>
    <Sidebar 
      resume={resume}
      onChange={handleChange}
      handleEducationChange={handleEducationChange}
      addEducation={addEducation}
      removeEducation={removeEducation}
      handlePracticalChange={handlePracticalChange}
      addPractical={addPractical}
      removePractical={removePractical}
    />
    <Resume resume={resume}/>
    </>
  )
}
