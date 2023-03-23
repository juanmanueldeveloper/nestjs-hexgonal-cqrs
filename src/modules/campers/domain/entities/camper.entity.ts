interface Camper {
  readonly _id: string;
  readonly name: string;
  readonly age: number;
  readonly allergies: string[];
  readonly isAllergicToPeanuts: boolean;
}

type CamperCreate = Omit<Camper, '_id' | 'isAllergicToPeanuts'>;
type CamperUpdate = Omit<Camper, '_id' | 'isAllergicToPeanuts'>;

export { Camper, CamperCreate, CamperUpdate };
