import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect} from 'react';
import Employee from './Employee';
import { useNavigate } from 'react-router-dom';
function Edit() {
  const [id,setId]=useState('')
  const [uname,setUname]=useState('')
  const [age,setAge]=useState('')
  const [desg,setDesg]=useState('')
  
  const [salary,setSalary]=useState(0)

  useEffect(()=>{
    setId(localStorage.getItem("id"))
    setUname(localStorage.getItem("uname"))
    setAge(localStorage.getItem("age"))
    setDesg(localStorage.getItem("desg"))
    setSalary(localStorage.getItem("salary"))
  },[])
  // console.log(id);
  // console.log(uname);
  console.log(salary);

 var index=Employee.map(item=>item.id).indexOf(id)
// console.log(index);
let  history=useNavigate()

 const handleUpdate=(e)=>{
  e.priventDefault();
  console.log(e);
  let emp=Employee[index]

  emp.uname=uname;
  emp.age=age;
  emp.desg=desg;
  emp.salary=salary
  console.log(emp);
  history('/')
 }
//  let history=useNavigate()
  return (
    <> <h1 className='text-primary mt-4 text-center'>Update Employee Management System</h1>
        <p>An employee management system or EMS is a tool that helps improve employee satisfaction and productivity to help a company achieve their overall goals. These tools help monitor, assess and control employees' working hours and efficiently utilise human resources.</p>
        <Row>
            <Col md={4}>
            <img  width={'400px'} height={'400px'} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-fMXEWyzl7MNd3Q15JOeyzHxasfVIHK6K_A&usqp=CAU'/>
            </Col>
            <Col>
            <Form className='border border-4 p-4'>
      <Form.Group className="mb-3" controlId='formName' >
       <Form.Label>User name</Form.Label>
     <Form.Control type='text' value={uname} onChange={(e)=>setUname(e.target.value)} required/>
    
      </Form.Group>
      <Form.Group className="mb-3"  controlId='formName'>
       <Form.Label>Age</Form.Label>
     <Form.Control type='text'  value={age} onChange={(e)=>setAge(e.target.value)} required/>
      </Form.Group>
      <Form.Group className="mb-3"  controlId='formName'>
       <Form.Label>Designation</Form.Label>
     <Form.Control type='text' value={desg} onChange={(e)=>setDesg(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3"  controlId='formName'>
       <Form.Label>Salary</Form.Label>
     <Form.Control type='text' value={salary} onChange={(e)=>setSalary(e.target.value)}/>
      </Form.Group>
     
      <Button onClick={(e)=>handleUpdate(e)} variant="primary" type="submit">
        Update
      </Button>
    </Form>
            </Col>

        </Row>
        </>
  )
}

export default Edit