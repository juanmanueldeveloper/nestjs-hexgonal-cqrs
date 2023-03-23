import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { CamperDto } from '../../dto/camper.dto';
import { CamperDtoRepository } from '../../../infrastructure/repositories/camper.repository';
import { CamperQuery } from '../impl/camper.query';

@QueryHandler(CamperQuery)
export class CamperHandler implements IQueryHandler<CamperQuery> {
  constructor(
    private readonly camperDtoRepository: CamperDtoRepository,
  ) {}

  async execute({
    camperId,
  }: CamperQuery): Promise<Partial<CamperDto>> {
    const camper =  await this.camperDtoRepository.findById(camperId);
    return camper;
  }
}
