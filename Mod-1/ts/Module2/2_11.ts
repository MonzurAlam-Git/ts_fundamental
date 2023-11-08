const kg2gm = (kg: number | string): number | string | undefined => {
  if (typeof kg === "number") {
    return "Number it is";
  } else if (typeof kg === "string") {
    return "string it is";
  } else {
    return "Wadifa";
  }
};

const res_Num = kg2gm(323) as number;
const res_String = kg2gm("2133");
