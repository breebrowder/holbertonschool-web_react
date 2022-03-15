// Task 5.  Create a few new interfaces with 3 expected methods
// Create a new function with specific reqs

interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome = () => 'Working from home';
  getCoffeeBreak = () => 'Getting a coffee break';
  workDirectorTasks = () => 'Getting to director tasks';
}

class Teacher implements TeacherInterface {
  workFromHome = () => 'Cannot work from home';
  getCoffeeBreak = () => 'Cannot have a break';
  workTeacherTasks = () => 'Getting to work';
}

// If salary is a number and less than 500 - It should return a new Teacher. Otherwise it should return a Director

const createEmployee = (firstName: string, lastName: string, salary: number | string) => {
  if (Number(salary) < 500) return new Teacher
  else return new Director;
}

// Task 6. Write two new functions that accept employee as an argument

export function isDirector(employee: TeacherInterface | DirectorInterface): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

export function executeWork(employee: DirectorInterface | TeacherInterface): string {
  let result = undefined;
  (isDirector(employee)) ? result = employee.workDirectorTasks() : result = employee.workTeacherTasks();
  return result;
}

// Task 7. Write a string literal type that allows a variable to have a value of "Math" or "History"

type Subjects = "Math" | "History";

export function teachClass(todayClass: Subjects): string {
  if (todayClass == "Math") {
    return "Teaching Math";
  } else if (todayClass === "History") {
    return "Teaching History";
  }
}

console.log(teachClass("Math"));
console.log(teachClass("History"));