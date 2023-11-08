// Creating Custom promise and use it in different scenario

// custom Promise
const createPromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "Allahu Akbar";
    if (data) {
      resolve(data);
    } else {
      reject("Data not found");
    }
  });
};

// function where we use custom promise function
const promiseFunc = async () => {
  const promiseVar = await createPromise();
  return promiseVar;
};

promiseFunc();

// promise uses by using api fetching
const toDo = async (): Promise<{
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}> => {
  const url = await fetch("https://jsonplaceholder.typicode.com/todos/2");
  const result = await url.json();
  return result;
};

toDo();
