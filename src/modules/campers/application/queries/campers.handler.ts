import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { CamperDto } from '../../infrastructure/dto/camper.dto';
import { CamperDtoRepository } from '../../infrastructure/db/camper-dto.repository';
import { CampersQuery } from './campers.query';

@QueryHandler(CampersQuery)
export class CampersHandler implements IQueryHandler<CampersQuery> {
  constructor(private readonly camperDtoRepository: CamperDtoRepository) {}

  async execute(): Promise<CamperDto[]> {
    return this.camperDtoRepository.findAll();
  }
}
