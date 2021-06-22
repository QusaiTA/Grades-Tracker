'use strict';


let studentForm = document.getElementById('studentForm');
let studentTable = document.getElementById('studentTable');

let studentArray = [];
let header = ['Student Name', 'Grade' , 'Course' , 'Status'];

function generateRandomGrade (){
  return Math.floor(Math.random() * (100 - 0)) + 0;

}
function StudentForm(name, course, status){

  this.name = name;
  this.grade = generateRandomGrade();
  this.course = course;

  if(this.grade >= 50){
  this.status ='Pass';
  }else {
      this.status = 'Fail';
  }

  studentArray.push(this);
}

function renderHeaders(){

    let headerRow = document.createElement('tr');
    for(let i = 0 ; i < header.length ; i++){

        let headers = document.createElement('th');
        headerRow.appendChild(headers);
        headers.textContent = header[i];
    }

    studentTable.appendChild(headerRow);




}

StudentForm.prototype.render = function(){

    let studentRow = document.createElement('tr');
    studentTable.appendChild(studentRow);

    let studentName = document.createElement('td');
    studentRow.appendChild(studentName);
    studentName.textContent = studentArray.name;


    let studentGrade = document.createElement('td');
    studentRow.appendChild(studentGrade);
    studentGrade.textContent = studentArray.grade;

    let studentCourse = document.createElement('td');
    studentRow.appendChild(studentCourse);
    studentCourse.textContent = studentArray.course;
    
    let studentStatus = document.createElement('td');
    studentRow.appendChild(studentStatus);
    studentStatus.textContent = studentArray.status;
  





}

studentForm.addEventListener('submit', handleSubmit);

function handleSubmit(event){

    event.preventDefault();

   let studentName = event.target.Name.value;
   let course = event.target.Course.value;
   let newStudentForm = new StudentForm(studentName,course);
   newStudentForm.render();
   console.log(newStudentForm);
   localStorage.setItem('student',JSON.stringify(studentArray));



}


function getStudent(){
  if(localStorage.getItem('student')){

    studentArray = JSON.parse(localStorage.getItem('student'));
  }

}

function renderStudent (){
  for (let i = 0 ; i < studentArray.length ; i++){


    let studentRow = document.createElement('tr');
    studentTable.appendChild(studentRow);

    let studentName = document.createElement('td');
    studentRow.appendChild(studentName);
    studentName.textContent = studentArray[i].name;


    let studentGrade = document.createElement('td');
    studentRow.appendChild(studentGrade);
    studentGrade.textContent = studentArray[i].grade;

    let studentCourse = document.createElement('td');
    studentRow.appendChild(studentCourse);
    studentCourse.textContent = studentArray[i].course;

    

    let studentStatus = document.createElement('td');
    studentRow.appendChild(studentStatus);
    studentStatus.textContent = studentArray[i].status;


   

  }



}
 
renderHeaders();
getStudent();
renderStudent();

