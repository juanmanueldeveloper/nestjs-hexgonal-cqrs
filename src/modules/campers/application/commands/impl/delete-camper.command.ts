import { IQuery } from "@nestjs/cqrs";

export class DeleteCamperCommand  implements IQuery{
  constructor(public readonly camperId: string) {}
}
