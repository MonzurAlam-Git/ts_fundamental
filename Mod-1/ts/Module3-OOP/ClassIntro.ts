{
  class Player {
    // name: string;
    // rating: number;
    // isInjured: boolean;

    constructor(
      public name: string,
      public rating: number,
      public isInjured: boolean
    ) {
      //   (this.isInjured = isInjured), (this.name = name), (this.rating = rating);
    }

    training() {
      console.log(`${this.name} will be on training tomorrow`);
    }
  }

  const alison = new Player("A. Becker", 89, false);
  alison.training();
  const nunez = new Player("D. Nunez", 83, false);

  //
}

// Parameter properties decrease the initilization and type double declaring into a single
