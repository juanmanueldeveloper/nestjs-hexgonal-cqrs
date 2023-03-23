import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Camper } from '../../../domain/entities/camper.entity';
import { CamperDtoRepository } from '../../../infrastructure/adapters/repositories/camper.repository';
import { CamperQuery } from '../impl/camper.query';

@QueryHandler(CamperQuery)
export class CamperHandler implements IQueryHandler<CamperQuery> {
  constructor(
    private readonly camperDtoRepository: CamperDtoRepository,
  ) {}

  async execute({
    camperId,
  }: CamperQuery): Promise<Partial<Camper>> {
    const camper =  await this.camperDtoRepository.findById(camperId);
    return camper;
  }
}
