import React, { useState} from "react";
import axios from 'axios';
import StudentForm from "./StudentForm";
  
// CreateStudent Component
const CreateStudent = () => {
  const [formValues, setFormValues] = 
    useState({ name: '', email: '', rollno: '' })
  // onSubmit handler
  const onSubmit = studentObject => {
    axios.post(
'http://localhost:3000/CreateStudent', 
    studentObject)
      .then(res => {
        if (res.status === 200)
          alert('Student successfully created')
        else
          Promise.reject()
      })
      .catch(err => alert('Something went wrong'))
  }
    
  // Return student form
  return(
    <StudentForm initialValues={formValues} 
      onSubmit={onSubmit} 
      enableReinitialize>
      Create Student
    </StudentForm>
  )
}
  
export default CreateStudent