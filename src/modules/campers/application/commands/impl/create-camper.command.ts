import { IQuery } from "@nestjs/cqrs";
import { CamperCreate } from "../../../domain/entities/camper.entity";

export class CreateCamperCommand implements IQuery {
  constructor(public readonly createCamper: CamperCreate) {}
}
