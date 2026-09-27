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
      schoolName: "Northeast Southwest University",
      degree: "Geography B.S.",
      startDate: "2024",
      endDate: "2028"
    }
  ],
  practicalExperience: [
    {
      companyName: "Acme LCC",
      position: "Roadrunning Intern",
      startDate: "June 2026",
      endDate: "August 2026",
      highlights: [
        "Delivered 1000 deliverables",
        "Solved 2000 solutions",
        "Synergized 3000 synergies",
        ]
    }
  ]
}

function App() {
  const [resume, setResume] = useState(exampleResume)

  function handleChange(e) {
    const { name, value } = e.target;

    setResume(prev => ({
      ...prev,
      [name]: value,
    }));
  }
  
  return (
    <>
    <Sidebar 
      resume={resume}
      onChange={handleChange}
    />
    <Resume resume={resume}/>
    </>
  )
}

export default App
