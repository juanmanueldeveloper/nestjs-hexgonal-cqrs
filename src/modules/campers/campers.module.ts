import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule, SchemaFactory } from '@nestjs/mongoose';
import { CamperFactory } from './domain/camper.factory';
import { CampersController } from './infrastructure/campers.controller';
import { CamperCommandHandlers } from './application/commands';
import { CamperDtoRepository } from './infrastructure/db/camper-dto.repository';
import { CamperEntityRepository } from './domain/camper-entity.repository';
import { CamperSchemaFactory } from './domain/camper-schema.factory';
import { CamperSchema } from './infrastructure/db/camper.schema';
import { CamperEventHandlers } from './application/events';
import { CamperQueryHandlers } from './application/queries';
import { CampersService } from './application/campers.service';

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forFeature([
      {
        name: CamperSchema.name,
        schema: SchemaFactory.createForClass(CamperSchema),
      },
    ]),
  ],
  controllers: [CampersController],
  providers: [
    CamperEntityRepository,
    CamperDtoRepository,
    CamperSchemaFactory,
    CamperFactory,
    ...CamperCommandHandlers,
    ...CamperEventHandlers,
    ...CamperQueryHandlers,
    CampersService,
  ],
})
export class CampersModule {}
