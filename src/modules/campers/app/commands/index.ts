import { CreateCamperHandler } from './handler/create-camper.handler';
import { DeleteCamperHandler } from './handler/delete-camper.handler';
import { UpdateAllergiesHandler } from './handler/update-allergies.handler';

export const CamperCommandHandlers = [
  CreateCamperHandler,
  UpdateAllergiesHandler,
  DeleteCamperHandler
];
