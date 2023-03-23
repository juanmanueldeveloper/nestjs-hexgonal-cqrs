import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Camper } from '../../../domain/entities/camper.entity';
import { CamperDtoRepository } from '../../../infrastructure/adapters/repositories/camper.repository';
import { CampersQuery } from '../impl/campers.query';

@QueryHandler(CampersQuery)
export class CampersHandler implements IQueryHandler<CampersQuery> {
  constructor(private readonly camperDtoRepository: CamperDtoRepository) {}

  async execute(): Promise<Camper[]> {
    return this.camperDtoRepository.findAll();
  }
}
