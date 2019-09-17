import React from "react";
import studentsList from "./students";
import Flag from "./Flag";
import PostIt from "./PostIt";
import "./App";


function Students(students){
    return(
        <div class="students_form">
            <h1>Students</h1>
            <table class="students_table">
                <thead className = "student_row">
                    <tr className = "row">
                        <th>Name</th>
                        <th>Country</th>
                        <th>GitHub</th>
                    </tr>
                </thead>
                <tbody>
                {studentsList.map((student,i)=>
                            <tr className = "row"> 
                                <td style ={{color: student.gender === "male" ? "blue" : "red"}}>
                            {student.firstName}
                                </td>
                                <td>
                                <Flag country={student.country} />                        
                            </td>
                                <td ><a href={`http://www.github.com/${student.githubUsername}`}>{student.githubUsername}</a></td>
                           
                            </tr>
                             
                    )}
                    
                </tbody>
            </table>
            <PostIt />        
        </div>
    )        
}

// function color(students){
//     if(students.gender === "female"){
//         return <p style ={w}></p>
//     }
//     else return <p style ={m}></p>

// }

export default Students;