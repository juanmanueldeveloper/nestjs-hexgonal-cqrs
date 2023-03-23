import { ObjectId } from 'mongodb';

interface CamperDto {
  readonly _id: ObjectId;
  readonly name: string;
  readonly age: number;
  readonly allergies: string[];
  readonly isAllergicToPeanuts: boolean;
}

type CamperCreate = Omit<CamperDto, "_id" | "isAllergicToPeanuts">;
type CamperUpdate = Partial<CamperDto>;

export { CamperDto, CamperCreate, CamperUpdate }