import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CamperDto } from '../infrastructure/dto/camper.dto';
import { CreateCamperCommand } from './commands/create/create-camper.command';
import { UpdateAllergiesCommand } from './commands/update-allergies/update-allergies.command';
import { CreateCamperRequest } from '../infrastructure/payload/create-camper-request.dto';
import { UpdateCamperAllergiesRequest } from '../infrastructure/payload/update-camper-allergies-request.dto';
import { CamperQuery } from './queries/camper.query';
import { CampersQuery } from './queries/campers.query';
import { DeleteCamperCommand } from './commands/delete/delete-camper.command';

@Injectable()
export class CampersService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  async find(): Promise<CamperDto[]> {
    return this.queryBus.execute<CampersQuery, CamperDto[]>(new CampersQuery());
  }

  async findById(camperId: string): Promise<CamperDto> {
    return this.queryBus.execute<CamperQuery, CamperDto>(
      new CamperQuery(camperId),
    );
  }

  async create(createCamperRequest: CreateCamperRequest): Promise<void> {
    await this.commandBus.execute<CreateCamperCommand, void>(
      new CreateCamperCommand(createCamperRequest),
    );
  }

  async update(camperId: string, updateCamperAllergiesRequest: UpdateCamperAllergiesRequest): Promise<void> {
    await this.commandBus.execute<UpdateAllergiesCommand, void>(
      new UpdateAllergiesCommand(
        camperId,
        updateCamperAllergiesRequest.allergies,
      ),
    );
  }

  async delete(camperId: string): Promise<void> {
    await this.commandBus.execute<DeleteCamperCommand, void>(
      new DeleteCamperCommand(camperId),
    );
  }

}
