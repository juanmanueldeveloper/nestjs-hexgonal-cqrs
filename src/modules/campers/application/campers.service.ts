import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CamperCreate, CamperDto, CamperUpdate } from './dto/camper.dto';
import { CreateCamperCommand } from './commands/create/create-camper.command';
import { UpdateAllergiesCommand } from './commands/update-allergies/update-allergies.command';
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

  async create(createCamper: CamperCreate): Promise<void> {
    await this.commandBus.execute<CreateCamperCommand, void>(
      new CreateCamperCommand(createCamper),
    );
  }

  async update(camperId: string, camperUpdate: CamperUpdate): Promise<void> {
    await this.commandBus.execute<UpdateAllergiesCommand, void>(
      new UpdateAllergiesCommand(
        camperId,
        camperUpdate.allergies,
      ),
    );
  }

  async delete(camperId: string): Promise<void> {
    await this.commandBus.execute<DeleteCamperCommand, void>(
      new DeleteCamperCommand(camperId),
    );
  }

}
