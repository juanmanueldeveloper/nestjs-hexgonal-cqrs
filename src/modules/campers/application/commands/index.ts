import { CreateCamperHandler } from './create/create-camper.handler';
import { DeleteCamperHandler } from './delete/delete-camper.handler';
import { UpdateAllergiesHandler } from './update-allergies/update-allergies.handler';

export const CamperCommandHandlers = [
  CreateCamperHandler,
  UpdateAllergiesHandler,
  DeleteCamperHandler
];
