{
  //Start

  //   Parent Class
  class Player {
    // parent property
    // name: string;
    // rating: number;
    // penaltySpecialist: boolean;

    // parent method
    setPieceTake() {
      return `${this.name} will take penalty`;
    }

    // parent constructor
    constructor(
      public name: string,
      public rating: number,
      public penaltySpecialist: boolean
    ) {
      //   this.name = name;
      //   this.rating = rating;
      //   this.penaltySpecialist = penaltySpecialist;
    }
  }

  //Child class

  class Diaz extends Player {
    constructor(name: string, rating: number, penaltySpecialist: boolean) {
      super(name, rating, penaltySpecialist);
    }
  }

  class Szobazslai extends Player {
    cornerTaker: boolean;

    constructor(
      name: string,
      rating: number,
      penaltySpecialist: boolean,
      cornerTaker: boolean
    ) {
      super(name, rating, penaltySpecialist);
      this.cornerTaker = cornerTaker;
    }
  }

  const lucho = new Diaz("luiz diaz", 89, true);
  const luchoFunc = lucho.setPieceTake();
  console.log(luchoFunc);

  const Szo = new Szobazslai("Szobazslai", 89, true, true);
  const SzoFunc = Szo.setPieceTake();
  console.log(SzoFunc);

  //End
}
