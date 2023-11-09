{
  // Type Guard - Checking strictly type

  // using KeyOf
  type AlphaNumeric = number | string;
  const add = (num1: AlphaNumeric, num2: AlphaNumeric): AlphaNumeric => {
    if (typeof num1 === "number" && typeof num2 === "number") {
      return num1 + num2;
    } else {
      return num1.toString() + num2.toString();
    }
  };

  console.log(add("2", "5"));

  // Using in guard
  type MSC = {
    name: string;
    masters: boolean;
  };

  type MBA = {
    name: string;
    masters: boolean;
    mandatory: boolean;
  };

  const getUser = (user: MSC | MBA) => {
    if ("mandatory" in user) {
      console.log("User is doing MBA");
    } else {
      console.log("User is doing MSC");
    }
  };
  const msc: MSC = {
    name: "msc",
    masters: true,
  };
  const mba: MBA = {
    name: "mba",
    masters: false,
    mandatory: true,
  };

  getUser(mba);

  //
}
