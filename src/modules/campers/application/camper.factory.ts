import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';

import { EntityFactory } from '../../../common/database/entity.factory';
import { Camper } from '../domain/entities/camper.aggregate';
import { CamperCreate } from '../domain/entities/camper.entity';
import { CamperEntityRepository } from './camper-entity.repository';
import { CamperCreatedEvent } from './events/impl/created-camper.event';

@Injectable()
export class CamperFactory implements EntityFactory<Camper> {
  constructor(
    private readonly camperEntityRepository: CamperEntityRepository,
  ) {}

  async create(camper: CamperCreate): Promise<Camper> {
    const camperCreated = new Camper(
      new ObjectId().toHexString(),
      camper.name,
      camper.age,
      camper.allergies,
    );
    await this.camperEntityRepository.create(camperCreated);
    camperCreated.apply(new CamperCreatedEvent(camperCreated.getId()));
    return camperCreated;
  }

  async deleteById(camperId: string): Promise<void> {
    await this.camperEntityRepository.findByIdAndRemove({
      _id: camperId,
    });
  }
}
