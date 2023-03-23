
import { CamperCreate } from '../../dto/camper.dto'
export class CreateCamperCommand {
  constructor(public readonly createCamper: CamperCreate) {}
}
