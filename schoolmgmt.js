let students = []
function attach(studentObj){
    students.push(studentObj)

}
function detach(studentObj){
    let newStudent = []
    for(let i of students){
        if(i != studentObj){
            newStudent.push(i)
        }
    }
}
function notify(message){
    for(let i of students){
        console.log(i + " : " + message)
    }
}

// Adding students
attach("Sam")
attach("Varsh")
attach("Aliza")
attach("Bobby")

// Notify everyone
notify("Holiday")
notify("Exam Tomorrow")
notify("College Fest on Friday")

// Remove one student
detach("Sam")

// Notify again
notify("Project Submission")
