import React from 'react'
import Employee from './Employee'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FaUserPlus,FaUserEdit,FaRegTrashAlt } from "react-icons/fa";
import { Link,useNavigate } from 'react-router-dom';
function Home() {
  const history=useNavigate()
  const handleDelele=(id)=>{
   let index=Employee.map(item=>item.id).indexOf(id)
   Employee.splice(index,1)
   console.log(Employee);
   history('/')
    alert('Deleting')
  }
  const handleEdit=(id,uname,age,desg,salary)=>{
    localStorage.setItem("id",id)
    localStorage.setItem("uname",uname)
    localStorage.setItem("age",age)
    localStorage.setItem("desg",desg)
    localStorage.setItem("salary",JSON.stringify(salary))
  }
  return (
    <>
    <h1 className='text-primary mt-4 text-center'>Employee Management System</h1>
    <Link to={'/add'}>
    <Button className='btn btn-success align-center'>Add <FaUserPlus/></Button>
    </Link>
    <p>An employee management system or EMS is a tool that helps improve employee satisfaction and productivity to help a company achieve their overall goals. These tools help monitor, assess and control employees' working hours and efficiently utilise human resources.</p>
   <div style={{margin:"10rem"}}>  <Table striped bordered hover variant='light' >
    <thead>
      <tr>
        <th>Username</th>
        <th>Age</th>
        <th>Designation</th>
        <th>salary</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
 {
    Employee && Employee.length > 0?
    Employee.map((item)=>(
        <tr>
            <td>{item.uname}</td>
            <td>{item.age}</td>
            <td>{item.desg}</td>
            <td>{item.salary}</td>
            <td>
              <Link to={'/edit'}>
              <Button onClick={()=>handleEdit(item.id,item.uname,item.salary,item.age,item.desg)} variant="primary"><FaUserEdit/></Button> 
              </Link>
            <Button onClick={()=>handleDelele(item.id)} className='ms-3' variant="danger"><FaRegTrashAlt/></Button></td>
            
        </tr>
    )):'error'
 }
    </tbody>
  </Table>
</div>
</>
)
}

export default Home