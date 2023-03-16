import { CreateCamperRequest } from "../../../infrastructure/payload/create-camper-request.dto";

export class CreateCamperCommand {
  constructor(public readonly createCamperRequest: CreateCamperRequest) {}
}
