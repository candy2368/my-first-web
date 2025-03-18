import { useEffect,useState } from "react";
import {Outlet} from "react-router-dom"
import { request } from "../../util/api";

function StudentsList_Page() {

    const [student, setStudent] = useState({
        list: [],
        total: 0,
        loading: false,
        visible: false
    });
    


    
    const [newStudent, setNewStudent] = useState({
        student_name: "",
        gender: "",
        dob: "",
        phone: ""
    })
    
    const [showForm, setShowForm] = useState(false);

    useEffect(()=>{
        getStudent();
    },[])

    const getStudent = async () => {
        const response = await request("students","GET",{});
        
        if(response) {
            setStudent((prevStudent)=>({
                ...prevStudent,
                list: response.list,
                total: response.total
            }))
        }
    }

   const handleInputChange = (e) => {
    setNewStudent({ ...newStudent,[e.target.name]: e.target.value})
   }
   const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await request("students", "POST", newStudent)

    if(response) {
        setShowForm(false)
        setNewStudent({ student_name:"", gender: "", dob: "",phone: ""})
        getStudent()
    }
   }
    return (
        <div>
          <div>
            <div className="flex gap-4">
            <h1>Students List</h1>
            <p>Total Students: {student.total}</p>
            <button onClick={() => setShowForm(true)}>Add</button>
            </div>
          
            {showForm && (
                <form onSubmit={handleSubmit} className="student-form">
                    <input type="text" name="student_name" placeholder="Student Name" onChange={handleInputChange} required />
                    <input type="text" name="gender" placeholder="Gender" onChange={handleInputChange} required />
                    <input type="date" name="dob" onChange={handleInputChange} required />
                    <input type="text" name="phone" placeholder="Phone" onChange={handleInputChange} />
                    <div className="gap-4 flex">
                    <button type="submit">Submit</button>
                    <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
                    </div>
                    
                </form>
            )}

    <table border="1" >
        <thead>
            <tr>
                <th>ID</th>
                <th>Student Name</th>
                <th>Gender</th>
                <th>Date of Birth</th>
                <th>Phone</th>
            </tr>
        </thead>
        <tbody>
            {student.list.length === 0 ? (
                <tr>
                    <td colSpan="5" style={{ textAlign: "center" }}>No students found.</td>
                </tr>
            ) : (
                student.list.map((s) => (
                    <tr key={s.id}>
                        <td>{s.id}</td>
                        <td>{s.student_name}</td>
                        <td>{s.gender}</td>
                        <td>{s.dob}</td>
                        <td>{s.phone}</td>
                    </tr>
                ))
            )}
        </tbody>
    </table>
</div>

           
            <Outlet />
        </div>
    )
}

export default StudentsList_Page