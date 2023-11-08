type Generic<T> = Array<T>;

const arr_numbers: Generic<number> = [10, 12, 14, 15];
const arr_object: Generic<{ name: string; age: number }> = [
  {
    name: "John",
    age: 30,
  },
  {
    name: "Jane",
    age: 28,
  },
];
const arr_boolean: Generic<boolean> = [true, false, true, true];
const arr_strings: Generic<string> = ["true1", "false1", "true2", "true3"];

// Generic Tuple
type GenericTuple<x, y> = [x, y];

const tuple1: GenericTuple<string, string> = ["Tsimikas", "Robertson"];
const tuple2: GenericTuple<string, number> = ["Nunez", 24];
const tuple3: GenericTuple<string, { age: number; rating: number }> = [
  "Jota",
  { age: 25, rating: 81 },
];
