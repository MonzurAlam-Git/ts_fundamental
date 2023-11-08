// Constraint ensures that certain property does exist on the function

const addtoCourse = <T extends { id: number; name: string }>(property: T) => {
  const addProp = "Salah fan";
  return { ...property, addProp };
};
const result1 = add2Course<{ id: number; name: string; age: number }>({
  id: 101,
  name: "string",
  age: 12,
});
const result21 = add2Course<{
  id: number;
  name: string;
  penaltySkill: boolean;
}>({
  id: 102,
  name: "string",
  penaltySkill: true,
});

console.log(result1, result21);
