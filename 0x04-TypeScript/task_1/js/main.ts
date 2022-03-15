// Task 1. Write a new Teacher interface that accepts new elements

interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [property: string]: any;
};

// Task 2. Write an interface named Directors that extends Teacher

interface Directors extends Teacher {
  numberOfReports: number,
};

// Task 3. Write a function printTeacher

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => `${firstName.charAt(0)}. ${lastName}`;

// Task 4. Write a Class named StudentClass


interface StudentClassConstructor {
  new(firstName: string, lastName: string): StudentClassInterface;
}
interface StudentClassInterface {
  firstName: string;
  lastName: string;
}
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workonHomework() {
    return 'Curently working';
  }
  displayName() {
    return this.firstName;
  }
}
