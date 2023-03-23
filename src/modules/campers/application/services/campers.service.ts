import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateCamperCommand } from '../commands/impl/create-camper.command';
import { UpdateAllergiesCommand } from '../commands/impl/update-allergies.command';
import { CamperQuery } from '../queries/impl/camper.query';
import { CampersQuery } from '../queries/impl/campers.query';
import { DeleteCamperCommand } from '../commands/impl/delete-camper.command';
import { ICamperRepository } from '../../domain/repositories/camper.repository';
import { Camper, CamperCreate, CamperUpdate } from '../../domain/entities/camper.entity';

@Injectable()
export class CampersService implements ICamperRepository {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  async getAll(): Promise<Camper[]> {
    return this.queryBus.execute<CampersQuery, Camper[]>(new CampersQuery());
  }

  async getById(camperId: string): Promise<Camper> {
    return this.queryBus.execute<CamperQuery, Camper>(
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
