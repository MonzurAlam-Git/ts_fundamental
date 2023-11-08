{
  type Player = {
    shooting: number;
    dribbling: number;
    passing: number;
    defense: number;
  };

  type MappedPlayer<T> = {
    [key in keyof T]: T[key];
  };

  //   Here T[key] is lookup : In each loop every type is assigning there
  const player_new: MappedPlayer<{
    passing: number;
    defense: string;
  }> = {
    passing: 85,
    defense: "89",
  };

  //   type Pass = MappedPlayer["passing"];

  // end
}

// Key in works almost like map function for TS , it individually modiefies type for every element
