// Type alias
type User_TA = {
  name: string;
  age: number;
};

type User_TA_Extended = User_TA & { role: string };

const user_TA: User_TA_Extended = {
  name: "Monzur",
  age: 28,
  role: "FrontEnd Developer",
};

// interface

// declaring interface
interface User_Interface {
  name: string;
  age: number;
}

// declaring new interface extending current interface
interface User_Interface_extended extends User_Interface {
  role: string;
}

// assigning new interface to object
const user_Interface: User_Interface_extended = {
  name: "Monzur",
  age: 28,
  role: "FrontEnd Developer",
};

// Mix n Match

// interface extending Type
interface User_Interface_extended extends User_TA {
  role: string;
}

// function
type function_type = (a: number, b: number) => number;

interface function_interface {
  (a: number, b: number): number;
}

const function1: function_interface = (a, b) => {
  return a + b;
};

// Array
type array_TA = number[];

interface array_IF {
  [index: number]: number;
}

const array: array_IF = [10, 12, 121, 121];
