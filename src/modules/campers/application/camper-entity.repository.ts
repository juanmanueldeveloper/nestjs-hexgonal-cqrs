import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BaseEntityRepository } from '../../../common/database/base-entity.repository';
import { Camper } from '../domain/entities/camper.aggregate';
import { CamperSchema } from '../infrastructure/adapters/entities/camper.schema';
import { CamperSchemaFactory } from './camper-schema.factory';

@Injectable()
export class CamperEntityRepository extends BaseEntityRepository<
  CamperSchema,
  Camper
> {
  constructor(
    @InjectModel(CamperSchema.name)
    camperModel: Model<CamperSchema>,
    camperSchemaFactory: CamperSchemaFactory,
  ) {
    super(camperModel, camperSchemaFactory);
  }
}
