//complete this code
class Person {
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	
	get fullname(){
	         return console.log(this.name);
		}

		set age(age){
			this.age=age;
		}
}



class Student extends Person {
	function study(){
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	function teach(){
		console.log(`${this.name} is teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
