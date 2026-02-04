
// # Oop Questions

// 1. Design Person and Employee
// Requirements:
// - Person: name, age, introduce() → "Hi, I'm [name], [age] years old."
// - Employee extends Person
// - Extra: jobTitle, salary
// - Override introduce() → add "I work as [jobTitle]"
// - Extra method: getAnnualSalary() → salary * 12

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduction() {
        return `Hi, I'm ${this.name}, ${this.age} years old.`   // use teturn cos , In JavaScript, functions that don’t return anything return undefined 
    }
}
// - Employee extends Person
class Employee extends Person {
    constructor(name, age, jobTitle, salary) {     // Call the parent constructor first
        super(name, age);
        this.jobTitle = jobTitle;
        this.salary = salary;
    }
    // Optional: use the parent's function via super and add child class logic
    introduction() {
        console.log(`${super.introduction()}, I work as ${this.jobTitle} and I yearn ${this.salary}`)
    }
    getAnnualSalary() {
        console.log(` ${super.introduction()} salary is ${this.salary * 12}`);
    }
}
let e1 = new Employee("sunny", 24, "EDMDJ", 6000000);
e1.introduction()
let e3 = new Employee("rohan", 25, "SD", 23000)
e3.getAnnualSalary()
// let e2 = new Person("ronny", 25)
// e2.introduction()