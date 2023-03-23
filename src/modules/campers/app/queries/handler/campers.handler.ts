import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { CamperDto } from '../../dto/camper.dto';
import { CamperDtoRepository } from '../../../infrastructure/repositories/camper.repository';
import { CampersQuery } from '../impl/campers.query';

@QueryHandler(CampersQuery)
export class CampersHandler implements IQueryHandler<CampersQuery> {
  constructor(private readonly camperDtoRepository: CamperDtoRepository) {}

  async execute(): Promise<CamperDto[]> {
    return this.camperDtoRepository.findAll();
  }
}
