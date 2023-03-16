import { CreateCamperRequest } from "../dto_/create-camper.payload";

export class CreateCamperCommand {
  constructor(public readonly createCamperRequest: CreateCamperRequest) {}
}
