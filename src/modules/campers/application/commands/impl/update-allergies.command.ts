import { IQuery } from "@nestjs/cqrs";

export class UpdateAllergiesCommand implements IQuery{
  constructor(
    public readonly camperId: string,
    public readonly allergies: string[],
  ) {}
}
