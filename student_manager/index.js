const students=[];
function addStudent() {
    const name = document.getElementById("nameInput").value ;
    const age=parseInt(document.getElementById("ageInput").value);
    const course=document.getElementById("courseInput").value;
    if (!name||!age||!course){
        alert("please enter all fields!");
        return;
    }
    const student={
        name:name,
        age:age,
        course:course
    };
    students.push(student);
    displayStudents();
}
function displayStudents() {
    const studentList=document.getElementById("studentList");
    studentList.innerHTML="";
    students.forEach((student, index) => {
    const div = document.createElement("div");
    div.className="student";
    div.innerHTML=`<strong>${index+1}.${student.name}</strong> (Age:${student.age},Course:${student.course})`;
    studentList.appendChild(div);
    });
}