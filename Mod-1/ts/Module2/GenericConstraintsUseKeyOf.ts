{
  //
  type Forward = {
    shooting: number;
    dribbling: number;
    penaltySpecialist: boolean;
    name: string;
  };

  type Salah = keyof Forward;

  const salah: Salah = {
    dribbling: 85,
  };
  //
}
