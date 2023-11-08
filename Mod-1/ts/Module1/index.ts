let a: string = "bismillah";

let ageNum: [number, string] = [23, "monica"];

console.log(a);

let roll: number[] = [12, 21, 14, 44, 21, 44, 42];

const user: {
  name: string;
  age?: number;
  isMarried: boolean;
  readonly company: string; //literal type
} = {
  name: "Monica",
  //   age: 25,
  isMarried: true,
  company: "BetterFly",
};

function func(num1: number, num2: number): number {
  return num1 + num2;
}

const arrowFunc = (num1: number, num2: number): number => {
  return num1 + num2;
};

const user_1 = {
  name: "Sayberia",
  age: 26,
  isMarried: false,
  company: "TechnoNatura",
  methodFunc(age: number): number {
    return this.age + 20;
  },
};

const arr4map: number[] = [1, 2, 5, 3, 2, 1];

// object destructuring
const obj4des = {
  namee: "Salimullah",
  education: {
    ssc: 2012,
    hsc: 2014,
    bsc: 2020,
  },
  address: "252 B/S",
};

const eduLevel = obj4des?.education?.msc ?? "No Masters";
console.log({ eduLevel });

const {
  namee,

  education: { hsc },
} = obj4des;

const dosto = ["onim", "Maruf", "towsif", "asif", "rakib", "shihab"];
const [d1, d2, d3, ...rest] = dosto;

// type alias

type Student = {
  name: string;
  age: number;
  address: string;
  education: {
    ssc: number;
    hsc: number;
    bsc: number;
  };
  contact: number;
};

const student1: Student = {
  name: "Ibrahima Konate",
  age: 27,
  address: "Dhaka",
  education: {
    ssc: 2012,
    hsc: 2018,
    bsc: 2022,
  },
  contact: 9635656565,
};
const student2: Student = {
  name: "Muhammad Salah",
  age: 27,
  address: "Ctg",
  education: {
    ssc: 2013,
    hsc: 2019,
    bsc: 2021,
  },
  contact: 96356565115,
};

type Dev = "FrontEnd dev" | "Backend Dev";
type Masters = "MBA" | "MSC";

const webDev: Dev = "FrontEnd dev";

type FrontEndDev = {
  skills: string[];
  position1: "FrontEnd Developer";
};
type BackEndDev = {
  skills: string[];
  position2: "BackEnd Developer";
};

type FullStackDev = FrontEndDev & BackEndDev;

const fullstackDev: FullStackDev = {
  skills: ["ReactJS", "NodeJs", "MongoDB"],
  position1: "FrontEnd Developer",
  position2: "BackEnd Developer",
};
