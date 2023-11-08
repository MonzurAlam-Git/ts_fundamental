{
  type Academy = {
    name: string;
    age: number;
    rating: number;
    hasExperience?: boolean;
  };

  type PickType = Pick<Academy, "name" | "hasExperience">;
  type OmitType = Omit<Academy, "rating" | "hasExperience">;

  type Acad = Required<Academy>;
  type Acad_partial = Partial<Academy>;
  type Acad_Readonly = Readonly<Academy>;

  type Acad_object = Record<string, any>;
  type emptyOj = Record<string, unknown>;

  const obj1: Acad_object = {
    name: "string",
    age: 12,
    rating: 34,
    hasExperience: false,
  };

  //
}
