{
  type A = number;

  type B = string;

  type C = boolean;

  type ConditionalType = A extends boolean
    ? string
    : B extends boolean
    ? boolean
    : number;

  type Dev = {
    frontend: boolean;
    backend: boolean;
    devops: boolean;
  };

  type DevCheck<T> = T extends keyof Dev ? boolean : null;
  type dev = DevCheck<"frontend">;
}
