const createArray = (value: string) => {
  return [value];
};

// createArrayWithGeneric used to create an array with dynamic parameter ,
//  value: T where type of parameter T will be assigned
//  <T> where value of parameter T will be hold
//  T[] is the returned dynamic array we receive from createArrayWithGeneric

const createArrayWithGeneric = <T>(value: T): T[] => {
  return [value];
};

const liv = createArray("Liverpool");
const allRed = createArrayWithGeneric<number>(190);

interface User {
  name: string;
  age: number;
}

const Ikonate = createArrayWithGeneric<User>({
  name: "Konate",
  age: 23,
});

console.log(liv);
console.log(allRed);
console.log(Ikonate);

// GenericXTuple

const genericXtuple = <T1, T2>(value1: T1, value2: T2): [T1, T2] => {
  return [value1, value2];
};

interface Skills {
  skillName: string;
  yearsExperience: number;
}

const gt = genericXtuple<string, Skills>("Monzur", {
  skillName: "ReactJS",
  yearsExperience: 5,
});
console.log(gt);

const add2Course = <T>(property: T) => {
  const addProp = "Salah fan";
  return { ...property, addProp };
};
const result = add2Course<{ name: string; age: number }>({
  name: "string",
  age: 12,
});
const result2 = add2Course<{ name: string; penaltySkill: boolean }>({
  name: "string",
  penaltySkill: true,
});

console.log(result, result2);

// The beauty of generic is that we can take we can take dynamically parameter
// for suppose we called one generic function but depends on the use case we made two different output
