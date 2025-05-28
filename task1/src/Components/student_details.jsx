import students from "./Student_data";

function StudentDetails() {
  return (
    <div className="student-details" style={{  textAlign: "center", marginTop: "9rem" }}>
      <h1>Student Details</h1>
      <div className="student-list" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" , padding: "20px"}}>
        {students.map((student) => (
          <div key={student.rollno} className="student-item" style={{  padding: "10px", margin: "10px", borderRadius: "10px" , backgroundColor: "beige", width: "200px", boxShadow: "0px 0px 5px grey" }}>
            <h3>{student.name}</h3>
            <p>Age: {student.age}</p>
            <p>Roll No: {student.rollno}</p>
            <p>College: {student.college}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentDetails;
