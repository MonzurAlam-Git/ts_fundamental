interface GenericPlayer<T> {
  name: string;
  country: string;
  rating: T;
}

const salah: GenericPlayer<{
  shooting: number;
  dribbling: number;
  finishing: number;
  passing: number;
  defense: number;
}> = {
  name: "M. Salah",
  country: "Egypt",
  rating: {
    shooting: 85,
    dribbling: 90,
    finishing: 88,
    passing: 76,
    defense: 43,
  },
};

const konate: GenericPlayer<{
  shooting: number;
  dribbling: number;
  tackling: number;
  defense: number;
}> = {
  name: "I. Konate",
  country: "France",
  rating: {
    shooting: 82,
    dribbling: 60,
    tackling: 85,
    defense: 89,
  },
};

interface Dev1<T> {
  name: string;
  age: number;
  profession: string;
  skills: T;
}

const trainee: Dev1<{
  html: boolean;
  css: boolean;
  js: boolean;
}> = {
  name: "monzur",
  age: 19,
  profession: "trainee",
  skills: {
    html: true,
    css: true,
    js: false,
  },
};
const frontend: Dev1<{
  html: boolean;
  css: boolean;
  js: boolean;
  react: boolean;
}> = {
  name: "alam",
  age: 19,
  profession: "frontend",
  skills: {
    html: true,
    css: true,
    js: false,
    react: true,
  },
};
const backend: Dev1<{
  html: boolean;
  css: boolean;
  js: boolean;
  express: boolean;
}> = {
  name: "Adler",
  age: 19,
  profession: "backend",
  skills: {
    html: true,
    css: true,
    js: false,
    express: true,
  },
};
